// src/icons/iconIndex.ts
import genericIndex from "../../icons/index/generic.json" with { type: "json" };
import awsIndex from "../../icons/index/aws.json" with { type: "json" };
import azureIndex from "../../icons/index/azure.json" with { type: "json" };
import gcpIndex from "../../icons/index/gcp.json" with { type: "json" };
import { PROVIDERS } from "./providers.mjs";
import { candidateCanonKeys, canonKey } from "./refMatch.mjs";
var ICON_INDEX = [...genericIndex, ...awsIndex, ...azureIndex, ...gcpIndex];
var REF_BY_KEY = {
  aws: /* @__PURE__ */ new Map(),
  azure: /* @__PURE__ */ new Map(),
  gcp: /* @__PURE__ */ new Map(),
  generic: /* @__PURE__ */ new Map()
};
for (const entry of ICON_INDEX) {
  const map = REF_BY_KEY[entry.provider];
  if (!map) continue;
  const add = (n) => {
    const k = canonKey(n);
    if (!map.has(k)) map.set(k, entry.ref);
  };
  add(entry.name);
  for (const alias of entry.aliases) add(alias);
}
function findRef(provider, name) {
  const known = (provider || "generic").toLowerCase();
  const p = known in REF_BY_KEY ? known : "generic";
  const maps = p === "generic" ? [REF_BY_KEY.generic] : [REF_BY_KEY[p], REF_BY_KEY.generic];
  for (const map of maps) {
    for (const key of candidateCanonKeys(p, name)) {
      const hit = map.get(key);
      if (hit) return hit;
    }
  }
  return void 0;
}
function isKnownRef(provider, name) {
  return findRef(provider, name) !== void 0;
}
export {
  ICON_INDEX,
  PROVIDERS,
  findRef,
  isKnownRef
};
