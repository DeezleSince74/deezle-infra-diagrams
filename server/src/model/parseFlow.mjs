// src/model/parseFlow.ts
import { ParseError } from "./model.mjs";
var DIR_SIDES = {
  TB: ["B", "T"],
  BT: ["T", "B"],
  LR: ["R", "L"],
  RL: ["L", "R"]
};
var SKIP_KW = /^(classDef|class|style|linkStyle|click|direction|accTitle|accDescr)\b/;
var OPENS = [
  { open: "([", closes: [{ close: "])", shape: "stadium" }] },
  { open: "[[", closes: [{ close: "]]", shape: "subroutine" }] },
  { open: "[(", closes: [{ close: ")]", shape: "cylinder" }] },
  { open: "((", closes: [{ close: "))", shape: "circle" }] },
  { open: "{{", closes: [{ close: "}}", shape: "hexagon" }] },
  { open: "[/", closes: [{ close: "/]", shape: "parallelogram" }, { close: "\\]", shape: "trapezoid" }] },
  { open: "[\\", closes: [{ close: "\\]", shape: "parallelogram-alt" }, { close: "/]", shape: "trapezoid-alt" }] },
  { open: "[", closes: [{ close: "]", shape: "rect" }] },
  { open: "(", closes: [{ close: ")", shape: "round" }] },
  { open: "{", closes: [{ close: "}", shape: "diamond" }] },
  { open: ">", closes: [{ close: "]", shape: "rect" }] }
  // asymmetric flag → rect
];
var CONN_RE = /^\s*(<)?(?:(--|-\.|==)\s+([^|]*?)\s+(-\.->|\.->|-->|==>|===|---|-\.-|\.-|--[ox])|(-\.->|-\.-|-->|---|--[ox]|==>|===))(?:\|([^|]*)\|)?/;
var ID_RE = /^[A-Za-z0-9_]+/;
function unquote(s) {
  const t = s.trim();
  if (t.startsWith('"') && t.endsWith('"') || t.startsWith("'") && t.endsWith("'")) return t.slice(1, -1);
  return t;
}
function cleanLabel(s) {
  return unquote(s).replace(/<br\s*\/?>/gi, "\n").trim();
}
function findClose(s, from, closes) {
  let j = from;
  while (j < s.length) {
    if (s[j] === '"') {
      j++;
      while (j < s.length && s[j] !== '"') j++;
      j++;
      continue;
    }
    for (const close of closes) if (s.startsWith(close, j)) return { idx: j, close };
    j++;
  }
  return null;
}
function matchNode(s, i) {
  while (i < s.length && /\s/.test(s[i])) i++;
  const idm = s.slice(i).match(ID_RE);
  if (!idm) return null;
  const id = idm[0];
  const j = i + id.length;
  const rest = s.slice(j);
  for (const o of OPENS) {
    if (!rest.startsWith(o.open)) continue;
    const bodyStart = j + o.open.length;
    const found = findClose(s, bodyStart, o.closes.map((c) => c.close));
    if (found) {
      const shape = o.closes.find((c) => c.close === found.close).shape;
      return { end: found.idx + found.close.length, id, label: cleanLabel(s.slice(bodyStart, found.idx)), shape };
    }
    break;
  }
  return { end: j, id };
}
function readGroup(s, i) {
  const first = matchNode(s, i);
  if (!first) return null;
  const nodes = [first];
  let end = first.end;
  for (; ; ) {
    let k = end;
    while (k < s.length && /\s/.test(s[k])) k++;
    if (s[k] !== "&") break;
    const next = matchNode(s, k + 1);
    if (!next) break;
    nodes.push(next);
    end = next.end;
  }
  return { end, nodes };
}
function classifyConn(m) {
  const openOp = m[2];
  const closeOp = m[4];
  const plainOp = m[5];
  const opStr = plainOp ?? (openOp ?? "") + (closeOp ?? "");
  const endPart = plainOp ?? closeOp ?? "";
  const label = m[3] ?? m[6];
  return {
    dashed: opStr.includes("."),
    thick: opStr.includes("="),
    sourceArrow: m[1] === "<",
    targetArrow: /[>ox]$/.test(endPart),
    label: label != null && label.trim() ? cleanLabel(label) : void 0
  };
}
function registerNodes(nodes, ctx, parent) {
  for (const n of nodes) {
    let svc = ctx.byId.get(n.id);
    if (!svc) {
      svc = { id: n.id, label: n.id, shape: "rect" };
      ctx.byId.set(n.id, svc);
      ctx.order.push(n.id);
      ctx.nodeParent.set(n.id, parent);
    }
    if (n.label != null) svc.label = n.label;
    if (n.shape) svc.shape = n.shape;
  }
}
function parseFlowStatement(s, ctx, parent) {
  const first = readGroup(s, 0);
  if (!first) return;
  registerNodes(first.nodes, ctx, parent);
  let prev = first.nodes;
  let i = first.end;
  for (; ; ) {
    const m = s.slice(i).match(CONN_RE);
    if (!m) break;
    const conn = classifyConn(m);
    i += m[0].length;
    const next = readGroup(s, i);
    if (!next) break;
    registerNodes(next.nodes, ctx, parent);
    for (const a of prev) {
      for (const b of next.nodes) {
        ctx.edges.push({
          sourceId: a.id,
          sourceSide: ctx.sides[0],
          sourceArrow: conn.sourceArrow,
          targetId: b.id,
          targetSide: ctx.sides[1],
          targetArrow: conn.targetArrow,
          label: conn.label,
          dashed: conn.dashed,
          thick: conn.thick
        });
      }
    }
    prev = next.nodes;
    i = next.end;
  }
}
function parseSubgraph(body) {
  const t = body.trim();
  const br = t.match(/^(\S+)\s*\[(.+)\]$/);
  if (br) return { id: br[1], label: cleanLabel(br[2]) };
  if (t.startsWith('"') || t.startsWith("'")) {
    const label = unquote(t);
    return { id: label, label };
  }
  return { id: t, label: t };
}
function parseFlowchart(text) {
  const rawLines = text.split(/\r?\n/);
  let start = -1;
  let direction = "TB";
  for (let idx = 0; idx < rawLines.length; idx++) {
    const t = rawLines[idx].trim();
    if (!t || t.startsWith("%%")) continue;
    const hm = t.match(/^(?:flowchart|graph)(?:\s+(TB|TD|BT|RL|LR))?\b/);
    if (hm) {
      const d = hm[1];
      direction = d === "TD" || d === void 0 ? "TB" : d;
      start = idx;
    }
    break;
  }
  if (start === -1) throw new ParseError("Not a flowchart (missing `flowchart` / `graph` header).");
  const ctx = { order: [], byId: /* @__PURE__ */ new Map(), nodeParent: /* @__PURE__ */ new Map(), edges: [], sides: DIR_SIDES[direction] };
  const groups = [];
  const seenGroup = /* @__PURE__ */ new Set();
  const stack = [];
  for (let idx = start + 1; idx < rawLines.length; idx++) {
    let line = rawLines[idx];
    const cIdx = line.indexOf("%%");
    if (cIdx !== -1) line = line.slice(0, cIdx);
    for (const rawStmt of line.split(";")) {
      const t = rawStmt.trim();
      if (!t) continue;
      const sub = t.match(/^subgraph\b(.*)$/);
      if (sub) {
        const { id, label } = parseSubgraph(sub[1]);
        if (!seenGroup.has(id)) {
          seenGroup.add(id);
          groups.push({ id, label, parent: stack[stack.length - 1] });
        }
        stack.push(id);
        continue;
      }
      if (t === "end") {
        stack.pop();
        continue;
      }
      if (SKIP_KW.test(t)) continue;
      parseFlowStatement(t, ctx, stack[stack.length - 1]);
    }
  }
  if (ctx.order.length === 0) throw new ParseError("flowchart contains no nodes.");
  const services = ctx.order.map((id) => {
    const s = ctx.byId.get(id);
    return { ...s, parent: ctx.nodeParent.get(id) };
  });
  return { services, groups, junctions: [], edges: ctx.edges, kind: "flowchart", direction };
}
export {
  parseFlowchart
};
