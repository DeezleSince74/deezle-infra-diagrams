// src/export/meta.ts
import { parseIconRef } from "../model/model.mjs";
import { categoryOf } from "../model/category.mjs";
var PROVIDER_LABEL = { aws: "AWS", azure: "Azure", gcp: "GCP" };
var VENDOR_PREFIX = /^(amazon|aws|azure|microsoft|google|gcp)[-_]/;
function humanize(slug) {
  return slug.split(/[-_]/).filter(Boolean).map((w) => w.length <= 3 || /\d/.test(w) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
function nodeMeta(iconRef) {
  const ref = parseIconRef(iconRef);
  const provider = ref?.provider && ref.provider in PROVIDER_LABEL ? PROVIDER_LABEL[ref.provider] : "";
  const name = ref?.name ?? "";
  const cat = categoryOf(iconRef);
  if (cat.key === "marketplace") {
    return {
      provider,
      type: provider ? `${provider} \xB7 Marketplace` : "Marketplace",
      accent: cat.accent,
      note: "Marketplace SaaS \xB7 hosted off-platform",
      external: true
    };
  }
  if (cat.key === "thirdparty") {
    return { provider, type: "Third-party", accent: cat.accent, note: "Third-party \xB7 external service", external: true };
  }
  const service = humanize(name.replace(VENDOR_PREFIX, ""));
  const type = provider ? service ? `${provider} \xB7 ${service}` : provider : service;
  return { provider, type, accent: cat.accent };
}
export {
  categoryOf,
  nodeMeta
};
