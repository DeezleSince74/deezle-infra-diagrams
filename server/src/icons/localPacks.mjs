// src/icons/localPacks.ts
import { createPackResolver } from "./packResolver.mjs";
var LOCAL;
function setLocalPacks(packs, aliases = {}) {
  LOCAL = packs && Object.keys(packs).length ? createPackResolver(packs, aliases) : void 0;
}
function localIconSvg(provider, name) {
  if (!LOCAL || !provider) return void 0;
  const p = provider.toLowerCase();
  if (p !== "aws" && p !== "azure" && p !== "gcp") return void 0;
  return LOCAL(p, name);
}
export {
  localIconSvg,
  setLocalPacks
};
