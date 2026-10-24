// src/layout/dagreLayout.ts
import { graphlib, layout as runDagre } from "../../vendor/@dagrejs/dagre/dist/dagre.cjs";
import { CANVAS_PADDING, GROUP_LABEL_HEIGHT, GROUP_PADDING, NODE_SPACING } from "./constants.mjs";
import {
  sideAnchor,
  unionBounds
} from "./geometry.mjs";
import { measureText } from "./measure.mjs";
import { EDGE_LABEL_FONT, nodeSize } from "./sizing.mjs";
var FORWARD = { LR: "R", RL: "L", TB: "B", BT: "T" };
var OPPOSITE = { L: "R", R: "L", T: "B", B: "T" };
var RANK_SEP = 80;
var STACK_GAP = NODE_SPACING;
var GROUP_MIN_W = 160;
var GROUP_ICON_W = 28;
var CONTENT_TOP = GROUP_PADDING + GROUP_LABEL_HEIGHT;
var DagreLayoutEngine = class {
  constructor() {
    this.name = "dagre";
  }
  async layout(model, opts) {
    return new Placer(model, opts?.nodeStyle ?? "icon").run();
  }
};
var Placer = class {
  constructor(model, style) {
    this.model = model;
    this.parentOf = /* @__PURE__ */ new Map();
    this.declared = /* @__PURE__ */ new Map();
    /** Sizes of nodes and finished groups. */
    this.sizes = /* @__PURE__ */ new Map();
    /** Each child's top-left, relative to its container's content area. */
    this.local = /* @__PURE__ */ new Map();
    /** Offset from a group's top-left corner to where its contents start. */
    this.contentOffset = /* @__PURE__ */ new Map();
    /** Where each container's content area starts, absolute (filled in by `run`). */
    this.origin = /* @__PURE__ */ new Map();
    this.laid = [];
    this.dir = model.direction ?? "LR";
    this.groupById = new Map(model.groups.map((g) => [g.id, g]));
    for (const g of model.groups) this.parentOf.set(g.id, g.parent);
    model.services.forEach((s, i) => {
      this.parentOf.set(s.id, s.parent);
      this.declared.set(s.id, i);
      this.sizes.set(s.id, nodeSize(s, style, model.direction));
    });
    model.junctions.forEach((j, i) => {
      this.parentOf.set(j.id, j.parent);
      this.declared.set(j.id, model.services.length + i);
      this.sizes.set(j.id, { width: 1, height: 1 });
    });
  }
  run() {
    this.layoutContainer(void 0);
    const abs = /* @__PURE__ */ new Map();
    const place = (container, ox, oy) => {
      this.origin.set(container, { x: ox, y: oy });
      for (const id of this.childrenOf(container)) {
        const p = this.local.get(id);
        const box = { x: ox + p.x, y: oy + p.y, ...this.sizes.get(id) };
        abs.set(id, box);
        const c = this.contentOffset.get(id);
        if (c) place(id, box.x + c.x, box.y + c.y);
      }
    };
    place(void 0, CANVAS_PADDING, CANVAS_PADDING);
    const services = this.model.services.map((s) => ({
      id: s.id,
      label: s.label,
      parent: s.parent,
      ...abs.get(s.id)
    }));
    const groups = [...this.model.groups].sort((a, b) => this.depth(a.id) - this.depth(b.id)).map((g) => ({ id: g.id, label: g.label, parent: g.parent, ...abs.get(g.id) }));
    const byIndex = new Map(this.laid.map((l) => [l.index, l]));
    const edges = this.model.edges.map((e, i) => {
      const l = byIndex.get(i);
      const src = abs.get(e.sourceId);
      const tgt = abs.get(e.targetId);
      if (l && (l.viaGroup || !l.points) && src && tgt) {
        const a = sideAnchor(src, e.sourceSide);
        const b = sideAnchor(tgt, e.targetSide);
        const out2 = { ...e, points: [a, b] };
        if (l.label) out2.labelPos = { x: (a.x + b.x) / 2 - this.labelW(e) / 2, y: (a.y + b.y) / 2 - 8 };
        return out2;
      }
      if (!l?.points || l.points.length < 2) return { ...e };
      const o = this.origin.get(l.container);
      const shift = (p) => ({ x: p.x + o.x, y: p.y + o.y });
      const out = { ...e, points: l.points.map(shift) };
      if (l.label) out.labelPos = shift(l.label);
      return out;
    });
    const bounds = unionBounds([...services, ...groups], CANVAS_PADDING);
    return { services, groups, edges, bounds };
  }
  /** Direct children (groups, nodes and junctions) of a container; `undefined` is the top. */
  childrenOf(container) {
    const ids = [];
    for (const g of this.model.groups) if (g.parent === container) ids.push(g.id);
    for (const s of this.model.services) if (s.parent === container) ids.push(s.id);
    for (const j of this.model.junctions) if (j.parent === container) ids.push(j.id);
    return ids;
  }
  depth(id) {
    let d = 0;
    for (let p = this.parentOf.get(id); p; p = this.parentOf.get(p)) d++;
    return d;
  }
  /** The child of `container` that holds `id` (itself, or the group it sits in), if any. */
  childUnder(container, id) {
    for (let cur = id; cur; cur = this.parentOf.get(cur)) {
      if (this.parentOf.get(cur) === container) return cur;
    }
    return void 0;
  }
  /** Earliest declaration index of any node inside `id` (for groups), else its own. */
  firstDeclared(id) {
    if (!this.groupById.has(id)) return this.declared.get(id) ?? Infinity;
    let min = Infinity;
    for (const c of this.childrenOf(id)) min = Math.min(min, this.firstDeclared(c));
    return min;
  }
  labelW(e) {
    return Math.ceil(measureText(e.label ?? "", EDGE_LABEL_FONT)) + 8;
  }
  isArchitecture() {
    return !this.model.kind || this.model.kind === "architecture";
  }
  /** True when "across the flow" is horizontal (a top-to-bottom diagram). */
  acrossIsX() {
    return this.dir === "TB" || this.dir === "BT";
  }
  /**
   * Lay out one container's direct children and record their positions relative to
   * its content area. Child groups are finished first, so each is a fixed box here.
   * Returns the size of the content area.
   */
  layoutContainer(container) {
    const children = this.childrenOf(container);
    if (!children.length) return { width: 0, height: 0 };
    for (const id of children) if (this.groupById.has(id)) this.finishGroup(id);
    const between = [];
    this.model.edges.forEach((e, i) => {
      const v = this.childUnder(container, e.sourceId);
      const w = this.childUnder(container, e.targetId);
      if (!v || !w) return;
      if (v === w && this.groupById.has(v)) return;
      between.push({ e, i, v, w });
    });
    const units = this.stack(children, between);
    const unitOf = /* @__PURE__ */ new Map();
    for (const u of units) for (const m of u.members) unitOf.set(m, u);
    const g = new graphlib.Graph({ multigraph: true });
    g.setGraph({ rankdir: this.dir, nodesep: NODE_SPACING, ranksep: RANK_SEP, edgesep: 16, marginx: 0, marginy: 0 });
    g.setDefaultEdgeLabel(() => ({}));
    for (const u of [...units].sort((a, b2) => a.order - b2.order)) g.setNode(u.id, { ...u.size });
    const flipped = /* @__PURE__ */ new Set();
    const named = [];
    for (const { e, i, v, w } of between) {
      let a = unitOf.get(v).id;
      let b2 = unitOf.get(w).id;
      if (a === b2 && v !== w) {
        this.laid.push({ index: i, container, label: e.label ? { x: 0, y: 0 } : void 0 });
        continue;
      }
      if (this.isArchitecture() && e.sourceSide === OPPOSITE[FORWARD[this.dir]]) {
        [a, b2] = [b2, a];
        flipped.add(i);
      }
      const label = e.label ? { width: this.labelW(e), height: 16, labelpos: "c" } : {};
      g.setEdge(a, b2, { minlen: 1, weight: 1, ...label }, `e${i}`);
      named.push({ i, v: a, w: b2 });
    }
    runDagre(g);
    const boxes = [];
    for (const u of units) {
      const n = g.node(u.id);
      const x0 = n.x - u.size.width / 2;
      const y0 = n.y - u.size.height / 2;
      let along = 0;
      for (const m of u.members) {
        const s = this.sizes.get(m);
        const p = this.acrossIsX() ? { x: x0 + along, y: y0 + (u.size.height - s.height) / 2 } : { x: x0 + (u.size.width - s.width) / 2, y: y0 + along };
        along += (this.acrossIsX() ? s.width : s.height) + STACK_GAP;
        this.local.set(m, p);
        boxes.push({ ...p, ...s });
      }
    }
    const b = unionBounds(boxes);
    for (const id of children) {
      const p = this.local.get(id);
      this.local.set(id, { x: p.x - b.x, y: p.y - b.y });
    }
    const shift = (p) => ({ x: p.x - b.x, y: p.y - b.y });
    for (const { i, v, w } of named) {
      const laid = g.edge({ v, w, name: `e${i}` });
      const points = laid?.points?.map(shift);
      if (points && flipped.has(i)) points.reverse();
      const label = laid?.x != null && laid.y != null ? shift({ x: laid.x - (laid.width ?? 0) / 2, y: laid.y - (laid.height ?? 0) / 2 }) : void 0;
      const e = this.model.edges[i];
      const viaGroup = this.groupById.has(this.childUnder(container, e.sourceId)) || this.groupById.has(this.childUnder(container, e.targetId));
      this.laid.push({ index: i, container, points, label, viaGroup });
    }
    return { width: b.width, height: b.height };
  }
  /** Lay out a group's contents and size its box: padding, a label strip, then contents. */
  finishGroup(id) {
    const grp = this.groupById.get(id);
    const content = this.layoutContainer(id);
    const labelW = measureText(grp.label, 12) + (grp.icon ? GROUP_ICON_W : 0) + GROUP_PADDING * 2;
    const width = Math.max(content.width + GROUP_PADDING * 2, GROUP_MIN_W, Math.ceil(labelW));
    const height = Math.max(content.height, 1) + CONTENT_TOP + GROUP_PADDING;
    this.sizes.set(id, { width, height });
    this.contentOffset.set(id, { x: (width - content.width) / 2, y: CONTENT_TOP });
  }
  /**
   * Merge nodes joined by an across-the-flow line into one stack, so they share a
   * layer: `cdn:B --> T:alb` in a left-to-right diagram puts alb right below cdn.
   *
   * dagre can't keep two linked nodes in one layer, so a stack goes in as a single
   * tall (or wide) box and is split apart afterward. Only plain nodes in the same
   * container stack, and each stack is a simple chain (one neighbor before, one
   * after), so a line between neighbors never passes through a third node. When two
   * hints disagree, the first one declared wins.
   */
  stack(children, between) {
    const before = /* @__PURE__ */ new Map();
    const after = /* @__PURE__ */ new Map();
    const head = (id) => {
      let cur = id;
      while (before.has(cur)) cur = before.get(cur);
      return cur;
    };
    if (this.isArchitecture()) {
      const later = this.acrossIsX() ? "R" : "B";
      const earlier = OPPOSITE[later];
      for (const { e, v, w } of between) {
        if (v !== e.sourceId || w !== e.targetId || v === w) continue;
        if (this.groupById.has(v) || this.groupById.has(w)) continue;
        let first;
        let second;
        if (e.sourceSide === later && e.targetSide === earlier) [first, second] = [v, w];
        else if (e.sourceSide === earlier && e.targetSide === later) [first, second] = [w, v];
        else continue;
        if (after.has(first) || before.has(second)) continue;
        if (head(first) === head(second)) continue;
        after.set(first, second);
        before.set(second, first);
      }
    }
    const units = [];
    const seen = /* @__PURE__ */ new Set();
    for (const id of children) {
      if (seen.has(id)) continue;
      const members = [];
      for (let cur = head(id); cur; cur = after.get(cur)) {
        members.push(cur);
        seen.add(cur);
      }
      const sizes = members.map((m) => this.sizes.get(m));
      const gaps = STACK_GAP * (members.length - 1);
      const size = this.acrossIsX() ? { width: sizes.reduce((t, s) => t + s.width, 0) + gaps, height: Math.max(...sizes.map((s) => s.height)) } : { width: Math.max(...sizes.map((s) => s.width)), height: sizes.reduce((t, s) => t + s.height, 0) + gaps };
      units.push({
        id: members.length > 1 ? `\0stack:${members[0]}` : members[0],
        size,
        members,
        order: Math.min(...members.map((m) => this.firstDeclared(m)))
      });
    }
    return units;
  }
};
export {
  DagreLayoutEngine
};
