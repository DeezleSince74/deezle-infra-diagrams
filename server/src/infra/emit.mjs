// src/infra/emit.ts
import { mapResourceType } from "./mapping.mjs";
function label(s) {
  const clean = (s || "").replace(/["[\]\r\n]+/g, " ").replace(/\s+/g, " ").trim() || "node";
  return /[^A-Za-z0-9 ]/.test(clean) ? `"${clean}"` : clean;
}
function emitArchitecture(ir) {
  const lines = ["architecture-beta"];
  const unmapped = /* @__PURE__ */ new Set();
  const refFor = (provider, type) => {
    const ref = mapResourceType(ir.meta.platform, provider, type);
    if (!ref) unmapped.add(type);
    return ref;
  };
  const groupById = new Map(ir.groups.map((g) => [g.id, g]));
  const depth = (g) => {
    let d = 0;
    const seen = /* @__PURE__ */ new Set();
    for (let cur = g.parentId; cur && !seen.has(cur); cur = groupById.get(cur)?.parentId) {
      seen.add(cur);
      d++;
    }
    return d;
  };
  const groups = [...ir.groups].sort((a, b) => depth(a) - depth(b) || a.id.localeCompare(b.id));
  for (const g of groups) {
    const ref = (g.resourceType ? refFor(g.provider, g.resourceType) : void 0) ?? "generic:cloud";
    const parent = g.parentId && groupById.has(g.parentId) ? ` in ${g.parentId}` : "";
    lines.push(`    group ${g.id}(${ref})[${label(g.label)}]${parent}`);
  }
  if (groups.length) lines.push("");
  const nodeIds = new Set(ir.nodes.map((n) => n.id));
  const nodes = [...ir.nodes].sort((a, b) => a.id.localeCompare(b.id));
  for (const n of nodes) {
    const ref = refFor(n.provider, n.resourceType);
    const inGroup = n.groupId && groupById.has(n.groupId) ? ` in ${n.groupId}` : "";
    const icon = ref ? `(${ref})` : "";
    lines.push(`    service ${n.id}${icon}[${label(n.label)}]${inGroup}`);
  }
  const edgeKeys = /* @__PURE__ */ new Set();
  for (const e of ir.edges) {
    if (e.sourceId === e.targetId) continue;
    if (!nodeIds.has(e.sourceId) || !nodeIds.has(e.targetId)) continue;
    edgeKeys.add(`${e.sourceId}\0${e.targetId}`);
  }
  const edges = [...edgeKeys].sort();
  if (edges.length) {
    lines.push("");
    for (const key of edges) {
      const [s, t] = key.split("\0");
      lines.push(`    ${s}:R --> L:${t}`);
    }
  }
  return { mmd: lines.join("\n") + "\n", unmappedTypes: [...unmapped].sort() };
}
export {
  emitArchitecture
};
