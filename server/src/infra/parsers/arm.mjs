// src/infra/parsers/arm.ts
import { IacParseError, makeIdFactory } from "../ir.mjs";
import { displayLabel } from "../marketplace.mjs";
function normalize(res) {
  if (Array.isArray(res)) return res.map((r) => ({ r }));
  if (res && typeof res === "object") {
    return Object.entries(res).filter(([, r]) => r && typeof r === "object" && typeof r.type === "string").map(([symbolic, r]) => ({ symbolic, r }));
  }
  return [];
}
var typeLeaf = (type) => type.split("/").pop() || type;
function armToIr(json) {
  const top = normalize(json.resources);
  if (top.length === 0) throw new IacParseError("Not an ARM template (no resources).");
  const flat = [];
  const visit = (entry) => {
    flat.push(entry);
    for (const child of normalize(entry.r.resources)) visit(child);
  };
  for (const e of top) visit(e);
  const id = makeIdFactory();
  const nodes = [];
  const keyToId = /* @__PURE__ */ new Map();
  for (const { symbolic, r } of flat) {
    const cleanName = r.name && !r.name.includes("[") ? r.name : void 0;
    const rawId = symbolic ?? `${r.type}.${cleanName ?? typeLeaf(r.type)}`;
    const nid = id(rawId);
    const baseLabel = cleanName ?? symbolic ?? typeLeaf(r.type);
    nodes.push({
      id: nid,
      resourceType: r.type,
      provider: "azure",
      // Marketplace SaaS → publisher/offer; third-party → name tagged with vendor.
      label: displayLabel(r.type, baseLabel, r.properties)
    });
    if (symbolic) keyToId.set(symbolic, nid);
    if (r.name) keyToId.set(r.name, nid);
  }
  const edges = [];
  const seen = /* @__PURE__ */ new Set();
  for (const { symbolic, r } of flat) {
    const fromId = symbolic ? keyToId.get(symbolic) : r.name ? keyToId.get(r.name) : void 0;
    if (!fromId) continue;
    for (const dep of r.dependsOn ?? []) {
      const tokens = [dep, ...dep.match(/'([^']+)'/g)?.map((s) => s.slice(1, -1)) ?? []];
      for (const tok of tokens) {
        const to = keyToId.get(tok);
        if (to && to !== fromId && !seen.has(`${fromId} ${to}`)) {
          seen.add(`${fromId} ${to}`);
          edges.push({ sourceId: fromId, targetId: to });
          break;
        }
      }
    }
  }
  return { nodes, groups: [], edges, meta: { platform: "arm" } };
}
export {
  armToIr
};
