// src/icons/dataPack.ts
import { dataKeyFor, categoryForKey } from "./dataMap.mjs";
import dataPack from "../../icons/data.json" with { type: "json" };
var DATA = dataPack;
function wrap(body, w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`;
}
function dataSvg(name, fallbackCat = "table") {
  if (!name) return void 0;
  const key = dataKeyFor(name);
  const icon = (key ? DATA.icons[key] : void 0) ?? DATA.icons[`kind-${fallbackCat}`] ?? DATA.icons["kind-table"];
  if (!icon) return void 0;
  return wrap(icon.body, icon.width ?? DATA.width ?? 24, icon.height ?? DATA.height ?? 24);
}
function vendorLogo(vendor) {
  if (!vendor || !dataKeyFor(vendor)) return void 0;
  return dataSvg(vendor, "vendor");
}
export {
  categoryForKey,
  dataSvg,
  vendorLogo
};
