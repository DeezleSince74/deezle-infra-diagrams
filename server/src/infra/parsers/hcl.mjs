// src/infra/parsers/hcl.ts
import { IacParseError, makeIdFactory, providerFromType } from "../ir.mjs";
import { displayLabel } from "../marketplace.mjs";
function stripComments(s) {
  return s.replace(/\/\*[\s\S]*?\*\//g, " ").replace(/(^|[^:"])(#|\/\/)[^\n]*/g, "$1");
}
function blockBody(src, openIdx) {
  let depth = 0;
  let inStr = false;
  let strCh = "";
  for (let i = openIdx; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      if (c === strCh && src[i - 1] !== "\\") inStr = false;
      continue;
    }
    if (c === '"' || c === "'") {
      inStr = true;
      strCh = c;
    } else if (c === "{") {
      depth++;
    } else if (c === "}") {
      depth--;
      if (depth === 0) return src.slice(openIdx + 1, i);
    }
  }
  return src.slice(openIdx + 1);
}
function hclToIr(files) {
  const blocks = [];
  const head = /\bresource\s+"([A-Za-z0-9_-]+)"\s+"([A-Za-z0-9_-]+)"\s*\{/g;
  for (const f of files) {
    const src = stripComments(f.content);
    for (const m of src.matchAll(head)) {
      const openIdx = src.indexOf("{", (m.index ?? 0) + m[0].length - 1);
      if (openIdx < 0) continue;
      blocks.push({ type: m[1], name: m[2], body: blockBody(src, openIdx) });
    }
  }
  if (blocks.length === 0) {
    throw new IacParseError('No Terraform resources found (no `resource "type" "name"` blocks in the scanned .tf files).');
  }
  const id = makeIdFactory();
  const nodes = [];
  const addrToId = /* @__PURE__ */ new Map();
  for (const b of blocks) {
    const addr = `${b.type}.${b.name}`;
    if (addrToId.has(addr)) continue;
    const nid = id(addr);
    addrToId.set(addr, nid);
    nodes.push({
      id: nid,
      resourceType: b.type,
      provider: providerFromType(b.type),
      label: displayLabel(b.type, b.name)
    });
  }
  const edges = [];
  const seen = /* @__PURE__ */ new Set();
  const refRe = /\b([a-z][a-z0-9_]+)\.([A-Za-z0-9_-]+)/g;
  for (const b of blocks) {
    const from = addrToId.get(`${b.type}.${b.name}`);
    if (!from) continue;
    for (const ref of b.body.matchAll(refRe)) {
      const to = addrToId.get(`${ref[1]}.${ref[2]}`);
      const key = `${from} ${to}`;
      if (to && to !== from && !seen.has(key)) {
        seen.add(key);
        edges.push({ sourceId: from, targetId: to });
      }
    }
  }
  return { nodes, groups: [], edges, meta: { platform: "terraform" } };
}
export {
  hclToIr
};
