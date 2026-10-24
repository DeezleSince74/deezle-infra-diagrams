// src/export/grouping.ts
import { categoryOf } from "./meta.mjs";
function toFunctionModel(model) {
  const order = [];
  const cats = /* @__PURE__ */ new Map();
  const services = model.services.map((s) => {
    const c = categoryOf(s.icon?.raw);
    if (!cats.has(c.key)) {
      cats.set(c.key, { id: `__fn_${c.key}`, label: c.label });
      order.push(c.key);
    }
    return { ...s, parent: cats.get(c.key).id };
  });
  const groups = order.map((k) => ({ id: cats.get(k).id, label: cats.get(k).label }));
  const junctions = model.junctions.map((j) => ({ ...j, parent: void 0 }));
  return { services, groups, junctions, edges: model.edges };
}
export {
  toFunctionModel
};
