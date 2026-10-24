// scripts/lib/iconIngest.ts
import { readFileSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";
import {
  canonKey,
  parseAwsFile,
  parseAzureFile,
  parseGcpFile,
  slugify,
  stripVendorPrefix
} from "./normalize.mjs";
var SHORT_ALIASES = {
  aws: {
    s3: "amazon-simple-storage-service",
    sns: "amazon-simple-notification-service",
    sqs: "amazon-simple-queue-service",
    ddb: "amazon-dynamodb",
    dynamo: "amazon-dynamodb",
    apigw: "amazon-api-gateway",
    r53: "amazon-route-53",
    elb: "aws-elastic-load-balancing",
    iam: "aws-identity-and-access-management",
    vpc: "amazon-virtual-private-cloud",
    ecr: "amazon-elastic-container-registry",
    ecs: "amazon-elastic-container-service",
    eks: "amazon-elastic-kubernetes-service"
  },
  azure: {
    aks: "kubernetes-services",
    vm: "virtual-machine",
    cosmos: "azure-cosmos-db",
    cosmosdb: "azure-cosmos-db",
    sql: "azure-sql",
    storage: "storage-accounts",
    keyvault: "key-vaults",
    functions: "function-apps",
    lb: "load-balancers"
  },
  gcp: {}
};
var KIND_PRIORITY = {
  service: 3,
  resource: 2,
  category: 1,
  group: 0
};
function sanitizeSvgBody(body) {
  return body.replace(/<script[\s\S]*?<\/script\s*>/gi, "").replace(/<script[^>]*\/>/gi, "").replace(/<foreignObject[\s\S]*?<\/foreignObject\s*>/gi, "").replace(/\s+on[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(/\s+(xlink:)?href\s*=\s*("(?!#)[^"]*"|'(?!#)[^']*')/gi, "");
}
function svgToIcon(svg, fallbackSize) {
  const viewBox = svg.match(/viewBox\s*=\s*"([\d.\s-]+)"/i)?.[1];
  let width;
  let height;
  if (viewBox) {
    const [, , w, h] = viewBox.trim().split(/\s+/).map(Number);
    width = w;
    height = h;
  } else {
    width = Number(svg.match(/width\s*=\s*"(\d+)/i)?.[1]) || void 0;
    height = Number(svg.match(/height\s*=\s*"(\d+)/i)?.[1]) || void 0;
  }
  const body = svg.replace(/<\?xml[\s\S]*?\?>/gi, "").replace(/<!--[\s\S]*?-->/g, "").replace(/<svg[^>]*>/i, "").replace(/<\/svg>\s*$/i, "").trim();
  return { body, width: width || fallbackSize || 24, height: height || fallbackSize || 24 };
}
function walkSvgs(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isSymbolicLink()) continue;
    if (entry.isDirectory()) walkSvgs(full, acc);
    else if (entry.isFile() && entry.name.toLowerCase().endsWith(".svg")) acc.push(full);
  }
  return acc;
}
function classify(name) {
  const n = name.toLowerCase();
  if (n.includes("aws") || n.includes("amazon")) return "aws";
  if (n.includes("azure") || n.includes("microsoft")) return "azure";
  if (n.includes("gcp") || n.includes("google")) return "gcp";
  return null;
}
function indexNames(names, provider) {
  const byCanon = /* @__PURE__ */ new Map();
  const byStripped = /* @__PURE__ */ new Map();
  for (const k of names) {
    const ck = canonKey(k);
    if (!byCanon.has(ck)) byCanon.set(ck, k);
    const sk = canonKey(stripVendorPrefix(k, provider));
    if (!byStripped.has(sk)) byStripped.set(sk, k);
  }
  return { keys: names, byExact: new Set(names), byCanon, byStripped };
}
function matchCanonical(slug, idx, provider) {
  if (idx.byExact.has(slug)) return slug;
  const ck = canonKey(slug);
  if (idx.byCanon.has(ck)) return idx.byCanon.get(ck);
  const sk = canonKey(stripVendorPrefix(slug, provider));
  if (idx.byStripped.has(sk)) return idx.byStripped.get(sk);
  if (idx.byCanon.has(sk)) return idx.byCanon.get(sk);
  return null;
}
function better(a, b) {
  if (KIND_PRIORITY[a.kind] !== KIND_PRIORITY[b.kind]) {
    return KIND_PRIORITY[a.kind] > KIND_PRIORITY[b.kind];
  }
  if (a.size !== b.size) return a.size > b.size;
  const light = (c) => c.variant === "dark" ? 0 : 1;
  return light(a) > light(b);
}
function candidatesFor(provider, files) {
  const out = [];
  for (const file of files) {
    const name = basename(file);
    if (provider === "aws") {
      const p = parseAwsFile(name);
      if (p) out.push({ slug: p.slug, file, size: p.size, variant: p.variant, kind: p.kind });
    } else if (provider === "azure") {
      const p = parseAzureFile(name);
      if (p) out.push({ slug: p.slug, file, size: 0, kind: "service" });
    } else {
      const p = parseGcpFile(name);
      if (p) out.push({ slug: p.slug, file, size: 0, kind: "service" });
    }
  }
  return out;
}
function ingestProvider(provider, src, canonNames, opts = {}) {
  const files = typeof src === "string" ? walkSvgs(src) : src;
  const cands = candidatesFor(provider, files);
  const candFiles = new Set(cands.map((c) => c.file));
  const unmatchedFiles = files.filter((f) => !candFiles.has(f)).map((f) => basename(f));
  const bySlug = /* @__PURE__ */ new Map();
  for (const c of cands) {
    const cur = bySlug.get(c.slug);
    if (!cur || better(c, cur)) bySlug.set(c.slug, c);
  }
  const idx = canonNames ? indexNames(canonNames, provider) : null;
  const icons = {};
  const aliases = {};
  const used = /* @__PURE__ */ new Set();
  const matched = /* @__PURE__ */ new Set();
  const nonCanonical = [];
  let maxW = 24;
  let maxH = 24;
  const addAlias = (alias, canonical) => {
    const a = slugify(alias);
    if (!a || a === canonical) return;
    const ref = `${provider}:${a}`;
    if (aliases[ref]) return;
    aliases[ref] = `${provider}:${canonical}`;
  };
  for (const [slug, cand] of [...bySlug.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    let hit = idx ? matchCanonical(slug, idx, provider) : null;
    if (!hit && idx && provider === "aws" && cand.kind === "category") {
      hit = matchCanonical(`aws-arch-category-${slug}`, idx, provider);
    }
    let name = hit ?? slug;
    if (used.has(name)) {
      if (used.has(slug)) continue;
      name = slug;
    }
    used.add(name);
    const icon = svgToIcon(readFileSync(cand.file, "utf8"), cand.size);
    if (opts.sanitize) icon.body = sanitizeSvgBody(icon.body);
    icons[name] = icon;
    maxW = Math.max(maxW, icon.width ?? 24);
    maxH = Math.max(maxH, icon.height ?? 24);
    if (hit) matched.add(hit);
    else nonCanonical.push(name);
    if (name !== slug) addAlias(slug, name);
    const stripped = stripVendorPrefix(name, provider);
    if (stripped !== name) addAlias(stripped, name);
    if (provider === "gcp") addAlias(canonKey(name), name);
  }
  for (const [short, target] of Object.entries(SHORT_ALIASES[provider])) {
    if (used.has(target)) addAlias(short, target);
  }
  return {
    pack: { prefix: provider, width: maxW, height: maxH, info: opts.info, icons },
    aliases,
    matched,
    used,
    report: {
      provider,
      filesDiscovered: files.length,
      uniqueSlugs: bySlug.size,
      canonicalMatches: matched.size,
      nonCanonical,
      unmatchedFiles
    }
  };
}
export {
  classify,
  indexNames,
  ingestProvider,
  matchCanonical,
  sanitizeSvgBody,
  svgToIcon,
  walkSvgs
};
