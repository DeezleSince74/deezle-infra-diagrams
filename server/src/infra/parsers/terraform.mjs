// src/infra/parsers/terraform.ts
import { IacParseError, makeIdFactory, providerFromType } from "../ir.mjs";
import { displayLabel } from "../marketplace.mjs";
var SKIP_REF = /^(var|local|each|count|self|path|terraform|data)\b/;
function collectRefs(node, out) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const x of node) collectRefs(x, out);
    return;
  }
  const o = node;
  if (Array.isArray(o.references)) {
    for (const r of o.references) if (typeof r === "string") out.push(r);
  }
  for (const v of Object.values(o)) collectRefs(v, out);
}
function refToAddress(ref) {
  if (SKIP_REF.test(ref)) return void 0;
  const parts = ref.split(".");
  return parts.length >= 2 ? `${parts[0]}.${parts[1]}` : void 0;
}
function terraformToIr(json, opts = {}) {
  const root = json;
  const rootModule = root.values?.root_module ?? root.planned_values?.root_module;
  if (!rootModule) {
    throw new IacParseError("Not a Terraform show -json document (no values.root_module).");
  }
  const id = makeIdFactory();
  const nodes = [];
  const groups = [];
  const edges = [];
  const addressToType = /* @__PURE__ */ new Map();
  const depsByAddress = /* @__PURE__ */ new Map();
  const moduleLabel = (address) => address.split(".").pop() || address;
  const walk = (mod, moduleAddr) => {
    if (moduleAddr) {
      const parent = moduleAddr.includes(".module.") ? moduleAddr.slice(0, moduleAddr.lastIndexOf(".module.")) : void 0;
      groups.push({
        id: id(moduleAddr),
        label: moduleLabel(moduleAddr),
        provider: "generic",
        parentId: parent ? id(parent) : void 0
      });
    }
    for (const r of mod.resources ?? []) {
      if (r.mode === "data" && !opts.includeData) continue;
      const full = r.address;
      addressToType.set(full, r.type);
      if (r.depends_on?.length) depsByAddress.set(full, r.depends_on);
      nodes.push({
        id: id(full),
        resourceType: r.type,
        provider: providerFromType(r.provider_name ?? r.type),
        label: displayLabel(r.type, r.name || r.type),
        groupId: moduleAddr ? id(moduleAddr) : void 0
      });
    }
    for (const child of mod.child_modules ?? []) {
      if (child.address) walk(child, child.address);
    }
  };
  walk(rootModule);
  const seen = /* @__PURE__ */ new Set();
  const addEdge = (fromAddr, toAddr) => {
    if (fromAddr === toAddr) return;
    if (!addressToType.has(fromAddr) || !addressToType.has(toAddr)) return;
    const key = `${fromAddr}\0${toAddr}`;
    if (seen.has(key)) return;
    seen.add(key);
    edges.push({ sourceId: id(fromAddr), targetId: id(toAddr) });
  };
  const configResources = root.configuration?.root_module?.resources;
  if (configResources?.length) {
    for (const cr of configResources) {
      const refs = [];
      collectRefs(cr.expressions, refs);
      for (const dep of cr.depends_on ?? []) refs.push(dep);
      for (const ref of refs) {
        const to = refToAddress(ref);
        if (to) addEdge(cr.address, to);
      }
    }
  } else {
    for (const [from, deps] of depsByAddress) {
      for (const dep of deps) {
        const to = refToAddress(dep);
        if (to) addEdge(from, to);
      }
    }
  }
  return { nodes, groups, edges, meta: { platform: "terraform" } };
}
export {
  terraformToIr
};
