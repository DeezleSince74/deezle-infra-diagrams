// src/export/html.ts
import { buildDiagramData } from "./payload.mjs";
import { scriptJson } from "./scriptJson.mjs";
var RF_BUNDLE_PLACEHOLDER = "/*__RF_BUNDLE__*/";
var FAVICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#5b8cff"/><path d="M11 11H21M11 11V21H21" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/><g fill="#fff"><circle cx="11" cy="11" r="3.2"/><circle cx="21" cy="11" r="3.2"/><circle cx="21" cy="21" r="3.2"/></g></svg>';
var FAVICON = "data:image/svg+xml," + encodeURIComponent(FAVICON_SVG);
function renderDiagramHtml(views, opts = {}) {
  const title = (opts.title || "Architecture diagram").replace(/[<&]/g, " ");
  const data = scriptJson(buildDiagramData(views, opts));
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="generator" content="deezle-infra-diagrams" />
<link rel="icon" href="${FAVICON}" />
<title>${title}</title>
<style>html, body, #root { height: 100%; margin: 0; }</style>
</head>
<body>
<div id="root"></div>
<script>
${RF_BUNDLE_PLACEHOLDER}
window.InfraDiagram.mount(document.getElementById('root'), ${data});
</script>
</body>
</html>
`;
}
export {
  RF_BUNDLE_PLACEHOLDER,
  renderDiagramHtml
};
