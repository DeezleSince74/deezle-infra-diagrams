// src/infra/parsers/pulumi.ts
import { IacParseError, makeIdFactory, providerFromType } from "../ir.mjs";
import { displayLabel } from "../marketplace.mjs";
function nameFromUrn(urn) {
  const parts = urn.split("::");
  return parts[parts.length - 1] || urn;
}
function pulumiToIr(json) {
  const resources = json.deployment?.resources;
  if (!resources) {
    throw new IacParseError("Not a Pulumi stack export (no deployment.resources).");
  }
  const id = makeIdFactory();
  const urnToId = /* @__PURE__ */ new Map();
  const idFor = (urn) => {
    let v = urnToId.get(urn);
    if (!v) {
      v = id(nameFromUrn(urn));
      urnToId.set(urn, v);
    }
    return v;
  };
  const isHousekeeping = (type) => type.startsWith("pulumi:");
  const isComponent = (r) => r.custom === false;
  const componentUrns = /* @__PURE__ */ new Set();
  for (const r of resources) {
    if (r.urn && !isHousekeeping(r.type) && isComponent(r)) componentUrns.add(r.urn);
  }
  const groupIdOf = (urn) => urn && componentUrns.has(urn) ? idFor(urn) : void 0;
  const nodes = [];
  const groups = [];
  const edges = [];
  const nodeUrns = /* @__PURE__ */ new Set();
  for (const r of resources) {
    if (!r.urn || isHousekeeping(r.type)) continue;
    if (isComponent(r)) {
      groups.push({
        id: idFor(r.urn),
        label: nameFromUrn(r.urn),
        provider: providerFromType(r.type),
        parentId: groupIdOf(r.parent)
      });
    } else {
      nodeUrns.add(r.urn);
      nodes.push({
        id: idFor(r.urn),
        resourceType: r.type,
        provider: providerFromType(r.type),
        label: displayLabel(r.type, nameFromUrn(r.urn)),
        groupId: groupIdOf(r.parent)
      });
    }
  }
  for (const r of resources) {
    if (!r.urn || isHousekeeping(r.type) || isComponent(r)) continue;
    for (const dep of r.dependencies ?? []) {
      if (nodeUrns.has(dep)) edges.push({ sourceId: idFor(r.urn), targetId: idFor(dep) });
    }
  }
  return { nodes, groups, edges, meta: { platform: "pulumi" } };
}
export {
  pulumiToIr
};
