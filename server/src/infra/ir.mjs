// src/infra/ir.ts
var IacParseError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "IacParseError";
  }
};
function makeIdFactory() {
  const byRaw = /* @__PURE__ */ new Map();
  const counts = /* @__PURE__ */ new Map();
  return (raw) => {
    const cached = byRaw.get(raw);
    if (cached) return cached;
    let base = raw.replace(/[^A-Za-z0-9_]+/g, "_").replace(/^_+|_+$/g, "");
    if (!base) base = "r";
    if (/^[0-9]/.test(base)) base = `r_${base}`;
    const n = counts.get(base) ?? 0;
    counts.set(base, n + 1);
    const id = n === 0 ? base : `${base}_${n}`;
    byRaw.set(raw, id);
    return id;
  };
}
function providerFromType(type) {
  const t = type.toLowerCase();
  if (t.startsWith("aws_") || t.startsWith("aws:") || t.startsWith("aws::")) return "aws";
  if (t.startsWith("azurerm_") || t.startsWith("azuread_") || t.startsWith("azapi_") || t.startsWith("azure-native:") || t.startsWith("azure:") || t.startsWith("microsoft.")) {
    return "azure";
  }
  if (t.startsWith("google_") || t.startsWith("gcp:") || t.startsWith("google-native:")) return "gcp";
  return "generic";
}
export {
  IacParseError,
  makeIdFactory,
  providerFromType
};
