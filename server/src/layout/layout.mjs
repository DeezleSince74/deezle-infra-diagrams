// src/layout/layout.ts
import { DagreLayoutEngine } from "./dagreLayout.mjs";
async function layoutDiagram(model, opts) {
  const engine = new DagreLayoutEngine();
  const positioned = await engine.layout(model, opts);
  if (positioned.services.length === 0 && positioned.groups.length === 0) {
    throw new Error("Layout produced no positioned nodes");
  }
  attachRefs(positioned, model);
  normalizeToOrigin(positioned);
  return { model: positioned, engine: engine.name };
}
function attachRefs(positioned, model) {
  const svcById = new Map(model.services.map((s) => [s.id, s]));
  const grpIcon = new Map(model.groups.map((g) => [g.id, g.icon]));
  for (const s of positioned.services) {
    const src = svcById.get(s.id);
    s.iconRef = src?.icon?.raw;
    s.provider = src?.icon?.provider || void 0;
    s.table = src?.table;
    s.shape = src?.shape;
  }
  for (const g of positioned.groups) {
    g.iconRef = grpIcon.get(g.id)?.raw;
  }
}
function normalizeToOrigin(positioned) {
  const { x: dx, y: dy } = positioned.bounds;
  if (dx === 0 && dy === 0) return;
  for (const s of positioned.services) {
    s.x -= dx;
    s.y -= dy;
  }
  for (const g of positioned.groups) {
    g.x -= dx;
    g.y -= dy;
  }
  for (const e of positioned.edges) {
    if (e.points) e.points = e.points.map((p) => ({ x: p.x - dx, y: p.y - dy }));
    if (e.labelPos) e.labelPos = { x: e.labelPos.x - dx, y: e.labelPos.y - dy };
  }
  positioned.bounds = { ...positioned.bounds, x: 0, y: 0 };
}
export {
  layoutDiagram
};
