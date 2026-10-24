// scripts/lib/output.ts
import { homedir } from "node:os";
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { isAbsolute, join, resolve, dirname } from "node:path";
var GENERATOR_META = '<meta name="generator" content="deezle-infra-diagrams" />';
var LEGACY_SIGNATURE = "window.InfraDiagram.mount(";
function downloadsDir() {
  return join(homedir(), "Downloads");
}
function htmlFilename(title) {
  const base = (title || "").trim().replace(/\.html?$/i, "").replace(/[^\w.-]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "architecture-diagram";
  return base + ".html";
}
function expandTilde(p) {
  if (p === "~") return homedir();
  if (p.startsWith("~/") || p.startsWith("~\\")) return join(homedir(), p.slice(2));
  return p;
}
function resolveOutputPath(requested, derivedName) {
  let target;
  if (!requested || !requested.trim() || requested.trim() === "-") {
    target = join(downloadsDir(), derivedName);
  } else {
    const r = expandTilde(requested.trim());
    const isDir = r.endsWith("/") || r.endsWith("\\") || existsSync(r) && statSync(r).isDirectory();
    const hasDir = r.includes("/") || r.includes("\\") || isAbsolute(r);
    if (isDir) target = join(r, derivedName);
    else if (hasDir) target = r;
    else target = join(downloadsDir(), r);
  }
  target = resolve(target);
  if (!/\.html?$/i.test(target)) target += ".html";
  mkdirSync(dirname(target), { recursive: true });
  return target;
}
function writeDiagramFile(target, html) {
  if (existsSync(target)) {
    const existing = statSync(target).isFile() ? readFileSync(target, "utf8") : "";
    if (!existing.includes(GENERATOR_META) && !existing.includes(LEGACY_SIGNATURE)) {
      throw new Error(
        `Refusing to overwrite ${target}: it already exists and was not written by deezle-infra-diagrams. Choose a different file name or folder.`
      );
    }
  }
  writeFileSync(target, html);
}
export {
  GENERATOR_META,
  downloadsDir,
  htmlFilename,
  resolveOutputPath,
  writeDiagramFile
};
