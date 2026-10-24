// src/icons/iconRegistry.ts
import { resolveIconSvg as genericResolve } from "./iconRegistry.generic.mjs";
var resolveIconSvg = true ? genericResolve : brandResolve;
export {
  resolveIconSvg
};
