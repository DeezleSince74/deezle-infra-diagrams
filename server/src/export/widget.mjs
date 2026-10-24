// src/export/widget.ts
import { buildDiagramData } from "./payload.mjs";
import { scriptJson } from "./scriptJson.mjs";
var EXT_APPS_PLACEHOLDER = "/*__EXT_APPS_BUNDLE__*/";
var RF_BUNDLE_PLACEHOLDER = "/*__RF_BUNDLE__*/";
function buildWidgetPayload(views, opts = {}) {
  return buildDiagramData(views, opts);
}
function widgetHtml(opts = {}) {
  const embedded = opts.payload ? scriptJson(opts.payload) : "null";
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>html, body, #root { height: 100%; margin: 0; }</style>
</head>
<body>
<div id="root"></div>
<script type="module">
${EXT_APPS_PLACEHOLDER}
${RF_BUNDLE_PLACEHOLDER}
(function () {
  var root = document.getElementById('root');
  var PAYLOAD = ${embedded};
  var hostTheme = null, last = null;
  function render(p) {
    if (!p || !p.views) return;
    last = p;
    var d = p;
    if ((!p.theme || p.theme === 'auto') && hostTheme) d = Object.assign({}, p, { theme: hostTheme });
    window.InfraDiagram.mount(root, d);
  }
  if (PAYLOAD) { render(PAYLOAD); return; }
  try {
    var App = (globalThis.ExtApps || {}).App;
    if (!App) return;
    // No size reports: the page fills the frame (height 100%), so it has no natural height
    // to report, and the host's own frame height is what the widget has always used.
    var app = new App({ name: 'InfraDiagram', version: '1.0.0' }, {}, { autoResize: false });
    app.ontoolresult = function (res) {
      var c = (res && res.content) || [];
      for (var i = 0; i < c.length; i++) {
        try { var p = JSON.parse(c[i].text); if (p && p.views) { render(p); return; } } catch (err) {}
      }
    };
    app.onhostcontextchanged = function (ctx) { hostTheme = ctx && ctx.theme === 'light' ? 'light' : 'dark'; if (last) render(last); };
    app.connect().then(function () {
      var ctx = app.getHostContext && app.getHostContext();
      if (ctx) { hostTheme = ctx.theme === 'light' ? 'light' : 'dark'; if (last) render(last); }
    });
  } catch (err) {}
})();
</script>
</body>
</html>
`;
}
export {
  EXT_APPS_PLACEHOLDER,
  RF_BUNDLE_PLACEHOLDER,
  buildWidgetPayload,
  widgetHtml
};
