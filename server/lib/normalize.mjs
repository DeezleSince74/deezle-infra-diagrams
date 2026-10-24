// scripts/lib/normalize.ts
function slugify(input) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function canonKey(input) {
  return input.toLowerCase().replace(/[^a-z0-9]/g, "");
}
var VENDOR_PREFIXES = {
  aws: ["amazon-", "aws-"],
  azure: ["azure-", "microsoft-"],
  gcp: ["google-cloud-", "google-", "gcp-", "cloud-"]
};
function stripVendorPrefix(slug, provider) {
  for (const p of VENDOR_PREFIXES[provider]) {
    if (slug.startsWith(p) && slug.length > p.length) return slug.slice(p.length);
  }
  return slug;
}
var SIZE = "(16|32|48|64)";
function parseAwsFile(filename) {
  const base = filename.replace(/\.svg$/i, "");
  if (base === filename) return null;
  let m;
  if (m = base.match(new RegExp(`^Arch_(.+)_${SIZE}$`))) {
    return { slug: slugify(m[1]), kind: "service", size: Number(m[2]) };
  }
  if (m = base.match(new RegExp(`^Arch-Category_(.+)_${SIZE}$`))) {
    return { slug: slugify(m[1]), kind: "category", size: Number(m[2]) };
  }
  if (m = base.match(new RegExp(`^Res_(.+)_${SIZE}(?:_(Light|Dark))?$`))) {
    return {
      slug: slugify(m[1]),
      kind: "resource",
      size: Number(m[2]),
      variant: m[3] ? m[3].toLowerCase() : void 0
    };
  }
  if (m = base.match(new RegExp(`^(.+)_${SIZE}(?:_(Light|Dark))?$`))) {
    return {
      slug: slugify(m[1]),
      kind: "group",
      size: Number(m[2]),
      variant: m[3] ? m[3].toLowerCase() : void 0
    };
  }
  return { slug: slugify(base), kind: "group", size: 0 };
}
function parseAzureFile(filename) {
  const base = filename.replace(/\.svg$/i, "");
  if (base === filename) return null;
  let m;
  if (m = base.match(/^\d+\s*-icon-service-(.+)$/i)) return { slug: slugify(m[1]) };
  if (m = base.match(/^\d+\s*-icon-[a-z]+-(.+)$/i)) return { slug: slugify(m[1]) };
  if (m = base.match(/^\d+\s*-(.+)$/)) return { slug: slugify(m[1]) };
  return { slug: slugify(base) };
}
function parseGcpFile(filename) {
  const base = filename.replace(/\.svg$/i, "");
  if (base === filename) return null;
  const name = base.replace(/-\d+-color(-rgb)?$/i, "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2");
  return { slug: slugify(name) };
}
export {
  canonKey,
  parseAwsFile,
  parseAzureFile,
  parseGcpFile,
  slugify,
  stripVendorPrefix
};
