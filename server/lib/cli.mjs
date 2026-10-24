// scripts/lib/cli.ts
import { readFileSync, statSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";
import { parseArchitecture } from "../src/model/parse.mjs";
import { parseErDiagram } from "../src/model/parseEr.mjs";
import { parseFlowchart } from "../src/model/parseFlow.mjs";
import { parseStateDiagram } from "../src/model/parseState.mjs";
import { splitFrontMatter } from "../src/model/frontMatter.mjs";
import { layoutDiagram } from "../src/layout/layout.mjs";
import { renderDiagramHtml, RF_BUNDLE_PLACEHOLDER } from "../src/export/html.mjs";
import { toFunctionModel } from "../src/export/grouping.mjs";
import { convert, looksLikeCfnYaml } from "../src/infra/index.mjs";
import { emitArchitecture } from "../src/infra/emit.mjs";
import { hclToIr } from "../src/infra/parsers/hcl.mjs";
import { isMarketplaceSaaS, isThirdParty } from "../src/infra/marketplace.mjs";
import { resolveOutputPath, htmlFilename, writeDiagramFile } from "./output.mjs";
import { RF_BUNDLE } from "./rf-bundle.generated.mjs";
async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}
var looksLikeJson = (s) => /^[[{]/.test(s.trimStart());
var looksLikeIac = (s) => looksLikeJson(s) || looksLikeCfnYaml(s);
var stripLeadComments = (s) => s.replace(/^\s*(%%.*\n)+/, "");
var looksLikeEr = (s) => /^\s*erDiagram\b/m.test(stripLeadComments(s));
var looksLikeFlow = (s) => /^\s*(flowchart|graph)\b/.test(stripLeadComments(s).trimStart());
var looksLikeState = (s) => /^\s*stateDiagram(-v2)?\b/.test(stripLeadComments(s).trimStart());
var isDir = (p) => {
  try {
    return statSync(p).isDirectory();
  } catch {
    return false;
  }
};
var SCAN_SKIP = /* @__PURE__ */ new Set([".git", ".terraform", "node_modules", ".idea", ".vscode", "dist", "build", ".next", "vendor", ".cache"]);
function scanCodebase(dir) {
  const files = [];
  const walk = (d) => {
    for (const ent of readdirSync(d, { withFileTypes: true })) {
      if (ent.isDirectory()) {
        if (!SCAN_SKIP.has(ent.name)) walk(join(d, ent.name));
      } else if (ent.isFile() && ent.name.endsWith(".tf")) {
        files.push({ name: join(d, ent.name), content: readFileSync(join(d, ent.name), "utf8") });
      }
    }
  };
  walk(dir);
  if (files.length === 0) throw new Error(`No .tf files found under ${dir} (nothing to scan).`);
  const ir = hclToIr(files);
  return {
    mmd: emitArchitecture(ir).mmd,
    files: files.length,
    resources: ir.nodes.length,
    thirdParty: ir.nodes.filter((n) => isThirdParty(n.resourceType)).length,
    marketplace: ir.nodes.filter((n) => isMarketplaceSaaS(n.resourceType)).length
  };
}
async function toViews(raw, nodeStyle = "card") {
  if (looksLikeIac(raw)) return toArchitectureViews(convert(raw).mmd, nodeStyle);
  const { body, title } = splitFrontMatter(raw);
  if (looksLikeEr(body)) {
    const model = parseErDiagram(body);
    const infra = (await layoutDiagram(model, { nodeStyle })).model;
    return { views: { infra, function: null }, mmd: raw, kind: "er", title };
  }
  if (looksLikeFlow(body)) {
    const model = parseFlowchart(body);
    const infra = (await layoutDiagram(model, { nodeStyle })).model;
    return { views: { infra, function: null }, mmd: raw, kind: "flowchart", title };
  }
  if (looksLikeState(body)) {
    const model = parseStateDiagram(body);
    const infra = (await layoutDiagram(model, { nodeStyle })).model;
    return { views: { infra, function: null }, mmd: raw, kind: "state", title };
  }
  return { ...await toArchitectureViews(body, nodeStyle), mmd: raw, title };
}
async function toArchitectureViews(mmd, nodeStyle) {
  const model = await parseArchitecture(mmd);
  const infra = (await layoutDiagram(model, { nodeStyle })).model;
  const fn = toFunctionModel(model);
  const func = fn.services.length >= 2 ? (await layoutDiagram(fn, { nodeStyle })).model : null;
  return { views: { infra, function: func }, mmd, kind: "architecture" };
}
async function runCli(argv) {
  const opt = (name) => {
    const i = argv.indexOf(name);
    return i >= 0 ? argv[i + 1] : void 0;
  };
  const out = opt("-o") ?? opt("--out");
  const titleOpt = opt("--title");
  const themeOpt = opt("--theme");
  const cards = !(argv.includes("--simple") || argv.includes("--icon"));
  const theme = themeOpt === "light" ? "light" : themeOpt === "auto" ? "auto" : "dark";
  const flagValues = new Set([out, titleOpt, themeOpt].filter(Boolean));
  const input = argv.find((a, i) => !a.startsWith("-") && !flagValues.has(a) && !argv[i - 1]?.startsWith("-"));
  let raw;
  let scanTitle;
  if (input && isDir(input)) {
    const scan = scanCodebase(input);
    raw = scan.mmd;
    scanTitle = basename(input.replace(/[/\\]+$/, "")) || "Architecture diagram";
    console.error(`\u2713 scanned ${scan.files} .tf file(s): ${scan.resources} resources (${scan.thirdParty} third-party, ${scan.marketplace} marketplace)`);
  } else {
    raw = input ? readFileSync(input, "utf8") : await readStdin();
    if (!raw.trim()) throw new Error("No input (pass a .mmd/IaC file, a directory to scan, or pipe via stdin).");
    if (looksLikeIac(raw)) {
      const unmapped = convert(raw).unmappedTypes;
      if (unmapped.length) console.error(`note: ${unmapped.length} unmapped type(s) rendered as labeled boxes`);
    }
  }
  const { views, mmd, kind, title: sourceTitle } = await toViews(raw, cards ? "card" : "icon");
  const title = titleOpt ?? sourceTitle ?? scanTitle ?? (input ? basename(input).replace(/\.[^.]+$/, "") : kind === "er" ? "ER diagram" : kind === "flowchart" ? "Flowchart" : kind === "state" ? "State diagram" : "Architecture diagram");
  const html = renderDiagramHtml(views, { title, theme, style: cards ? "card" : "simple", source: mmd, kind }).replace(RF_BUNDLE_PLACEHOLDER, () => RF_BUNDLE);
  if (out === "-") {
    process.stdout.write(html);
  } else {
    const target = resolveOutputPath(out, htmlFilename(title));
    writeDiagramFile(target, html);
    console.error(`\u2713 wrote ${target} (${views.infra.services.length} services, ${views.infra.groups.length} groups)`);
  }
}
export {
  runCli,
  toViews
};
