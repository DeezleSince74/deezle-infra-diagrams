// scripts/lib/localIcons.ts
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, rmdirSync, statSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { basename, isAbsolute, join, relative, resolve, sep } from "node:path";
import { setLocalPacks } from "../src/icons/localPacks.mjs";
import namesJson from "../icons/names.json" with { type: "json" };
import { classify, ingestProvider, walkSvgs } from "./iconIngest.mjs";
import { VERSION } from "./version.mjs";
var GENERATOR = "deezle-infra-diagrams";
var PROVIDERS = ["aws", "azure", "gcp"];
var NAMES = namesJson;
var MAX_SVG_BYTES = 512 * 1024;
var MAX_SVG_FILES = 2e4;
var VENDOR_PAGES = {
  aws: { name: "AWS Architecture Icons", url: "https://aws.amazon.com/architecture/icons/" },
  azure: { name: "Azure architecture icons", url: "https://learn.microsoft.com/en-us/azure/architecture/icons/" },
  gcp: { name: "Google Cloud icons", url: "https://cloud.google.com/icons" }
};
function localIconsDir() {
  return join(homedir(), ".deezle-infra-diagrams", "icons");
}
var expandTilde = (p) => p === "~" ? homedir() : p.startsWith("~/") || p.startsWith("~\\") ? join(homedir(), p.slice(2)) : p;
function readManifest(dir) {
  const file = join(dir, "manifest.json");
  if (!existsSync(file)) return void 0;
  try {
    const m = JSON.parse(readFileSync(file, "utf8"));
    return m.generator === GENERATOR && Array.isArray(m.files) ? m : void 0;
  } catch {
    return void 0;
  }
}
function loadLocalIcons(dir = localIconsDir()) {
  const manifest = readManifest(dir);
  if (!manifest) {
    setLocalPacks(void 0);
    return void 0;
  }
  try {
    const packs = {};
    for (const p of PROVIDERS) {
      if (!manifest.providers[p]) continue;
      const file = join(dir, `${p}.json`);
      if (existsSync(file)) packs[p] = JSON.parse(readFileSync(file, "utf8"));
    }
    const aliasFile = join(dir, "aliases.json");
    const aliases = existsSync(aliasFile) ? JSON.parse(readFileSync(aliasFile, "utf8")) : {};
    setLocalPacks(packs, aliases);
    return manifest;
  } catch {
    setLocalPacks(void 0);
    return void 0;
  }
}
var seenStamp;
function refreshLocalIcons(dir = localIconsDir()) {
  let stamp = "none";
  try {
    stamp = String(statSync(join(dir, "manifest.json")).mtimeMs);
  } catch {
  }
  if (stamp === seenStamp) return;
  seenStamp = stamp;
  loadLocalIcons(dir);
}
function providerOf(file, root) {
  for (const seg of [basename(root), ...relative(root, file).split(sep).slice(0, -1)]) {
    const p = classify(seg);
    if (p) return p;
  }
  const name = basename(file);
  if (/^(Arch|Arch-Category|Res)_/.test(name)) return "aws";
  if (/^\d+\s*-icon-/i.test(name)) return "azure";
  return null;
}
function importIcons(src, dir = localIconsDir(), provider) {
  const root = resolve(expandTilde(src.trim()));
  if (!existsSync(root) || !statSync(root).isDirectory()) {
    throw new Error(`Not a folder: ${root}. Unzip the vendor download first, then pass the folder.`);
  }
  const target = resolve(dir);
  const rel = relative(target, root);
  if (rel === "" || !rel.startsWith("..") && !isAbsolute(rel)) {
    throw new Error(`Pick the folder you downloaded, not ${target}.`);
  }
  const all = walkSvgs(root);
  if (all.length > MAX_SVG_FILES) {
    throw new Error(`Found ${all.length} SVG files; that is more than any vendor set. Pass the unzipped icon folder itself.`);
  }
  const byProvider = /* @__PURE__ */ new Map();
  let skipped = 0;
  for (const f of all) {
    const p = statSync(f).size <= MAX_SVG_BYTES ? provider ?? providerOf(f, root) : null;
    if (!p) {
      skipped++;
      continue;
    }
    byProvider.set(p, [...byProvider.get(p) ?? [], f]);
  }
  if (!byProvider.size) {
    throw new Error(
      `No AWS, Azure or Google Cloud icons found in ${root}. Keep the vendor's folder names (they say AWS, Azure or Google), or say which vendor the icons are from.`
    );
  }
  const prior = readManifest(target);
  if (existsSync(target)) {
    const ours = new Set(prior?.files ?? []);
    const foreign = readdirSync(target).filter((f) => f !== "manifest.json" && !ours.has(f));
    const clash = foreign.filter((f) => f === "aliases.json" || PROVIDERS.some((p) => f === `${p}.json`));
    if (clash.length || existsSync(join(target, "manifest.json")) && !prior) {
      throw new Error(`Refusing to overwrite files this plugin did not write in ${target}.`);
    }
  }
  const priorAliasFile = join(target, "aliases.json");
  const aliases = prior && existsSync(priorAliasFile) ? JSON.parse(readFileSync(priorAliasFile, "utf8")) : {};
  const manifest = {
    generator: GENERATOR,
    version: VERSION,
    importedAt: (/* @__PURE__ */ new Date()).toISOString(),
    files: [...prior?.files ?? []],
    providers: { ...prior?.providers ?? {} }
  };
  const packs = [];
  const summary = { dir: target, providers: [], skipped };
  for (const [provider2, files] of byProvider) {
    const known = NAMES[provider2] ?? [];
    const r = ingestProvider(provider2, files, known.length ? known : null, {
      sanitize: true,
      info: { name: `${VENDOR_PAGES[provider2].name} (imported from your download)`, license: VENDOR_PAGES[provider2] }
    });
    for (const k of Object.keys(aliases)) if (k.startsWith(`${provider2}:`)) delete aliases[k];
    Object.assign(aliases, r.aliases);
    packs.push([provider2, r.pack]);
    const row = { icons: Object.keys(r.pack.icons).length, matched: r.report.canonicalMatches, known: known.length };
    manifest.providers[provider2] = { source: root, ...row };
    summary.providers.push({ provider: provider2, ...row });
  }
  mkdirSync(target, { recursive: true });
  for (const [provider2, pack] of packs) {
    writeFileSync(join(target, `${provider2}.json`), JSON.stringify(pack));
    if (!manifest.files.includes(`${provider2}.json`)) manifest.files.push(`${provider2}.json`);
  }
  writeFileSync(join(target, "aliases.json"), JSON.stringify(aliases));
  if (!manifest.files.includes("aliases.json")) manifest.files.push("aliases.json");
  writeFileSync(join(target, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
  loadLocalIcons(target);
  return summary;
}
function removeLocalIcons(dir = localIconsDir()) {
  const target = resolve(dir);
  const manifest = readManifest(target);
  const removed = [];
  if (manifest) {
    for (const f of [...manifest.files, "manifest.json"]) {
      if (f !== basename(f) || !existsSync(join(target, f))) continue;
      rmSync(join(target, f));
      removed.push(f);
    }
    try {
      if (!readdirSync(target).length) rmdirSync(target);
    } catch {
    }
  }
  setLocalPacks(void 0);
  return removed;
}
function localIconsStatus(dir = localIconsDir()) {
  return readManifest(resolve(dir));
}
var plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
function describeImport(s) {
  const lines = s.providers.map((p) => {
    const pct = p.known ? ` \u2014 ${p.matched} of the ${p.known} names Claude uses` : "";
    return `- ${VENDOR_PAGES[p.provider].name}: ${plural(p.icons, "icon")}${pct}`;
  });
  return [
    `Imported your icons into ${s.dir}:`,
    ...lines,
    s.skipped ? `Skipped ${s.skipped} SVG file(s) that were not AWS, Azure or Google Cloud icons.` : "",
    "New diagrams now use these icons for matching services. Your use of them is covered by each vendor's own terms."
  ].filter(Boolean).join("\n");
}
function describeStatus(m, dir = localIconsDir()) {
  if (!m) {
    return [
      "No vendor icons imported. Diagrams use the built-in open icons.",
      "To use the official icons, download a set and run import-icons on the unzipped folder:",
      ...PROVIDERS.map((p) => `- ${VENDOR_PAGES[p].name}: ${VENDOR_PAGES[p].url}`)
    ].join("\n");
  }
  const rows = PROVIDERS.filter((p) => m.providers[p]).map((p) => {
    const r = m.providers[p];
    return `- ${VENDOR_PAGES[p].name}: ${plural(r.icons, "icon")} (${r.matched} of ${r.known} known names)`;
  });
  return [`Imported vendor icons in ${resolve(dir)} (${m.importedAt.slice(0, 10)}):`, ...rows].join("\n");
}
export {
  VENDOR_PAGES,
  describeImport,
  describeStatus,
  importIcons,
  loadLocalIcons,
  localIconsDir,
  localIconsStatus,
  refreshLocalIcons,
  removeLocalIcons
};
