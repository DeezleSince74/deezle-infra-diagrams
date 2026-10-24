// src/infra/parsers/cfn.ts
import { IacParseError, makeIdFactory, providerFromType } from "../ir.mjs";
import { displayLabel } from "../marketplace.mjs";
var SKIP_TYPES = /* @__PURE__ */ new Set(["AWS::CDK::Metadata"]);
function collectRefs(value, out) {
  if (Array.isArray(value)) {
    for (const v of value) collectRefs(v, out);
    return;
  }
  if (!value || typeof value !== "object") return;
  for (const [key, v] of Object.entries(value)) {
    if (key === "Ref" && typeof v === "string") {
      out.push(v);
    } else if (key === "Fn::GetAtt") {
      if (typeof v === "string") out.push(v.split(".")[0]);
      else if (Array.isArray(v) && typeof v[0] === "string") out.push(v[0]);
    } else if (key === "Fn::Sub") {
      const text = typeof v === "string" ? v : Array.isArray(v) && typeof v[0] === "string" ? v[0] : "";
      for (const m of text.matchAll(/\$\{([^!}][^}]*)\}/g)) out.push(m[1].split(".")[0]);
      if (Array.isArray(v)) collectRefs(v[1], out);
    } else {
      collectRefs(v, out);
    }
  }
}
function cfnToIr(json) {
  const resources = json.Resources;
  if (!resources || typeof resources !== "object" || Array.isArray(resources)) {
    throw new IacParseError("Not a CloudFormation template (no Resources).");
  }
  const entries = Object.entries(resources).filter(
    ([, r]) => r && typeof r === "object" && typeof r.Type === "string" && !SKIP_TYPES.has(r.Type)
  );
  const id = makeIdFactory();
  const nodes = [];
  const logicalToId = /* @__PURE__ */ new Map();
  for (const [logical, r] of entries) {
    const nid = id(logical);
    logicalToId.set(logical, nid);
    nodes.push({
      id: nid,
      resourceType: r.Type,
      provider: providerFromType(r.Type),
      label: displayLabel(r.Type, logical, r.Properties)
    });
  }
  const edges = [];
  const seen = /* @__PURE__ */ new Set();
  for (const [logical, r] of entries) {
    const fromId = logicalToId.get(logical);
    const refs = [];
    if (typeof r.DependsOn === "string") refs.push(r.DependsOn);
    else if (Array.isArray(r.DependsOn)) refs.push(...r.DependsOn.filter((d) => typeof d === "string"));
    collectRefs(r.Properties, refs);
    for (const ref of refs) {
      const to = logicalToId.get(ref);
      if (!to || to === fromId || seen.has(`${fromId} ${to}`)) continue;
      seen.add(`${fromId} ${to}`);
      edges.push({ sourceId: fromId, targetId: to });
    }
  }
  return { nodes, groups: [], edges, meta: { platform: "cfn" } };
}
export {
  cfnToIr
};
