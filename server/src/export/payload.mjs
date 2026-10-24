// src/export/payload.ts
import { resolveIconSvg } from "../icons/iconRegistry.mjs";
import { categoryForKey, dataAccentForName, dataKeyFor } from "../icons/dataMap.mjs";
import { parseIconRef } from "../model/model.mjs";
import { nodeMeta } from "./meta.mjs";
var FLOW_ACCENT = {
  rect: "#6366f1",
  round: "#6366f1",
  stadium: "#14b8a6",
  subroutine: "#8b5cf6",
  cylinder: "#a855f7",
  circle: "#14b8a6",
  diamond: "#f59e0b",
  hexagon: "#ec4899",
  parallelogram: "#0ea5e9",
  "parallelogram-alt": "#0ea5e9",
  trapezoid: "#f97316",
  "trapezoid-alt": "#f97316",
  // State-diagram shapes. Terminals share the teal that already marks start/end in a
  // flowchart; a note is slate so an annotation recedes behind the machine itself.
  state: "#6366f1",
  start: "#14b8a6",
  end: "#14b8a6",
  fork: "#8b5cf6",
  note: "#94a3b8"
};
var svgToDataUri = (svg) => "data:image/svg+xml;utf8," + encodeURIComponent(svg);
function viewData(model) {
  const abs = /* @__PURE__ */ new Map();
  const nodes = [];
  for (const g of model.groups) {
    abs.set(g.id, { x: g.x, y: g.y });
    nodes.push({ id: g.id, label: g.label, x: g.x, y: g.y, w: g.width, h: g.height, parent: g.parent, isGroup: true });
  }
  const serviceIds = /* @__PURE__ */ new Set();
  const dataSlug = (ref) => ref && ref.startsWith("data:") ? ref.slice(5) : void 0;
  for (const s of model.services) {
    abs.set(s.id, { x: s.x, y: s.y });
    serviceIds.add(s.id);
    if (s.table) {
      const key = dataKeyFor(dataSlug(s.iconRef));
      nodes.push({ id: s.id, label: s.label, x: s.x, y: s.y, w: s.width, h: s.height, parent: s.parent, table: s.table, accent: dataAccentForName(dataSlug(s.iconRef)), type: key ? categoryForKey(key).label : void 0 });
      continue;
    }
    if (s.shape) {
      nodes.push({ id: s.id, label: s.label, x: s.x, y: s.y, w: s.width, h: s.height, parent: s.parent, shape: s.shape, accent: FLOW_ACCENT[s.shape] });
      continue;
    }
    const meta = nodeMeta(s.iconRef);
    nodes.push({ id: s.id, label: s.label, x: s.x, y: s.y, w: s.width, h: s.height, parent: s.parent, type: meta.type, accent: meta.accent, annotation: meta.note, external: meta.external });
  }
  const depth = (id) => {
    let d = 0;
    for (let cur = id; cur; cur = model.groups.find((g) => g.id === cur)?.parent) d++;
    return d;
  };
  nodes.sort((a, b) => (a.isGroup ? 0 : 1) - (b.isGroup ? 0 : 1) || depth(a.id) - depth(b.id));
  for (const n of nodes) {
    const p = n.parent ? abs.get(n.parent) : void 0;
    if (p) {
      n.x -= p.x;
      n.y -= p.y;
    } else {
      n.parent = void 0;
    }
  }
  const edges = model.edges.filter((e) => serviceIds.has(e.sourceId) && serviceIds.has(e.targetId)).map((e, i) => ({
    id: `e${i}`,
    source: e.sourceId,
    target: e.targetId,
    sourceSide: e.sourceSide,
    targetSide: e.targetSide,
    label: e.label,
    sourceArrow: e.sourceArrow,
    targetArrow: e.targetArrow,
    sourceCard: e.sourceCard,
    targetCard: e.targetCard,
    identifying: e.identifying,
    dashed: e.dashed,
    thick: e.thick
  }));
  return { nodes, edges };
}
function buildDiagramData(views, opts = {}) {
  const icons = {};
  for (const s of views.infra.services) {
    const svg = s.iconRef ? resolveIconSvg(parseIconRef(s.iconRef)) : void 0;
    if (svg) icons[s.id] = svgToDataUri(svg);
  }
  const v = { infra: viewData(views.infra) };
  if (views.function) v.function = viewData(views.function);
  return {
    views: v,
    icons,
    theme: opts.theme ?? "auto",
    grouping: opts.grouping ?? "infra",
    style: opts.style ?? "card",
    source: opts.source,
    kind: opts.kind ?? "architecture"
  };
}
export {
  buildDiagramData
};
