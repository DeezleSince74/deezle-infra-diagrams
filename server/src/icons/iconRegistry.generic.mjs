// src/icons/iconRegistry.generic.ts
import { categoryOf } from "../model/category.mjs";
import { openKeyFor } from "./simpleMap.mjs";
import { dataSvg, vendorLogo } from "./dataPack.mjs";
import { localIconSvg } from "./localPacks.mjs";
import openPack from "../../icons/open.json" with { type: "json" };
var OPEN = openPack;
function resolveIconSvg(ref) {
  if (!ref) return void 0;
  if (ref.provider === "data") return dataSvg(ref.name);
  const tp = ref.raw.match(/^generic:thirdparty:(.+)$/);
  if (tp) {
    const logo = vendorLogo(tp[1]);
    if (logo) return logo;
  }
  const local = localIconSvg(ref.provider, ref.name);
  if (local) return local;
  const key = openKeyFor(ref.raw, ref.name);
  const icon = OPEN.icons[key] ?? OPEN.icons["kind-" + categoryOf(ref.raw).key] ?? OPEN.icons["kind-other"];
  if (!icon) return void 0;
  const width = icon.width ?? OPEN.width ?? 24;
  const height = icon.height ?? OPEN.height ?? 24;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${icon.body}</svg>`;
}
export {
  resolveIconSvg
};
