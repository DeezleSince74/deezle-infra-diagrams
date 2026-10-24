// src/model/parseState.ts
import { ParseError } from "./model.mjs";
var DIR_SIDES = {
  TB: ["B", "T"],
  BT: ["T", "B"],
  LR: ["R", "L"],
  RL: ["L", "R"]
};
var SKIP_KW = /^(classDef|class|style|linkStyle|click|accTitle|accDescr)\b/;
var ID = "[A-Za-z0-9_.-]+";
var ID_RE = new RegExp(`^${ID}$`);
var TRANSITION_RE = new RegExp(`^(\\[\\*\\]|${ID})\\s*-{1,2}>\\s*(\\[\\*\\]|${ID})\\s*(?::\\s*(.*))?$`);
var STATE_AS_RE = new RegExp(`^state\\s+"([^"]*)"\\s+as\\s+(${ID})\\s*(\\{)?\\s*$`);
var STEREOTYPE_RE = new RegExp(`^state\\s+(${ID})\\s*<<\\s*(choice|fork|join)\\s*>>\\s*$`);
var STATE_DECL_RE = new RegExp(`^state\\s+(${ID})\\s*(\\{)?\\s*$`);
var DESC_RE = new RegExp(`^(${ID})\\s*:\\s*(.*)$`);
var NOTE_RE = new RegExp(`^note\\s+(?:right|left)\\s+of\\s+(${ID})\\s*(?::\\s*(.*))?$`);
var STEREOTYPE_SHAPE = { choice: "diamond", fork: "fork", join: "fork" };
function unquote(s) {
  const t = s.trim();
  if (t.startsWith('"') && t.endsWith('"') || t.startsWith("'") && t.endsWith("'")) return t.slice(1, -1);
  return t;
}
function cleanLabel(s) {
  return unquote(s).replace(/<br\s*\/?>/gi, "\n").trim();
}
var terminalId = (kind, scope) => scope ? `__${kind}__${scope}` : `__${kind}`;
function touch(id, ctx, parent, shape = "state") {
  let svc = ctx.byId.get(id);
  if (!svc) {
    svc = { id, label: id, shape };
    ctx.byId.set(id, svc);
    ctx.order.push(id);
    ctx.nodeParent.set(id, parent);
  }
  return svc;
}
function endpoint(token, ctx, scope, role) {
  if (token !== "[*]") {
    if (!ctx.groupIds.has(token)) touch(token, ctx, scope);
    return token;
  }
  const kind = role === "source" ? "start" : "end";
  const id = terminalId(kind, scope);
  touch(id, ctx, scope, kind);
  ctx.byId.get(id).label = "";
  return id;
}
function addNote(target, text, ctx, scope) {
  const id = `__note_${++ctx.notes}`;
  touch(id, ctx, scope, "note");
  ctx.byId.get(id).label = cleanLabel(text);
  ctx.edges.push({
    sourceId: id,
    sourceSide: ctx.sides[0],
    sourceArrow: false,
    targetId: target,
    targetSide: ctx.sides[1],
    targetArrow: false,
    dashed: true
  });
}
function parseStateDiagram(text) {
  const rawLines = text.split(/\r?\n/);
  let start = -1;
  for (let idx = 0; idx < rawLines.length; idx++) {
    const t = rawLines[idx].trim();
    if (!t || t.startsWith("%%")) continue;
    if (/^stateDiagram(-v2)?\b/.test(t)) start = idx;
    break;
  }
  if (start === -1) throw new ParseError("Not a state diagram (missing `stateDiagram` / `stateDiagram-v2` header).");
  let direction = "TB";
  const ctx = { order: [], byId: /* @__PURE__ */ new Map(), nodeParent: /* @__PURE__ */ new Map(), edges: [], sides: DIR_SIDES.TB, groupIds: /* @__PURE__ */ new Set(), notes: 0 };
  const groups = [];
  const declared = /* @__PURE__ */ new Set();
  const stack = [];
  const scope = () => stack[stack.length - 1];
  for (let idx = start + 1; idx < rawLines.length; idx++) {
    const t = rawLines[idx].replace(/%%.*$/, "").trim();
    const named = t.match(STATE_AS_RE);
    if (named?.[3] === "{") {
      ctx.groupIds.add(named[2]);
      continue;
    }
    const plain = t.match(STATE_DECL_RE);
    if (plain?.[2] === "{") ctx.groupIds.add(plain[1]);
  }
  for (let idx = start + 1; idx < rawLines.length; idx++) {
    const d = rawLines[idx].trim().match(/^direction\s+(TB|TD|BT|LR|RL)\b/);
    if (d) {
      direction = d[1] === "TD" ? "TB" : d[1];
      break;
    }
  }
  ctx.sides = DIR_SIDES[direction];
  const openGroup = (id, label) => {
    if (!declared.has(id)) {
      declared.add(id);
      ctx.groupIds.add(id);
      groups.push({ id, label, parent: scope() });
    }
    stack.push(id);
  };
  let noteFor = null;
  for (let idx = start + 1; idx < rawLines.length; idx++) {
    let line = rawLines[idx];
    const cIdx = line.indexOf("%%");
    if (cIdx !== -1) line = line.slice(0, cIdx);
    const t = line.trim();
    if (noteFor) {
      if (/^end\s+note$/.test(t)) {
        addNote(noteFor.target, noteFor.lines.join("\n"), ctx, scope());
        noteFor = null;
      } else if (t) {
        noteFor.lines.push(t);
      }
      continue;
    }
    if (!t || t === "--" || SKIP_KW.test(t) || /^direction\b/.test(t)) continue;
    if (t === "}") {
      stack.pop();
      continue;
    }
    const note = t.match(NOTE_RE);
    if (note) {
      if (note[2]) addNote(note[1], note[2], ctx, scope());
      else noteFor = { target: note[1], lines: [] };
      continue;
    }
    const tr = t.match(TRANSITION_RE);
    if (tr) {
      const sourceId = endpoint(tr[1], ctx, scope(), "source");
      const targetId = endpoint(tr[2], ctx, scope(), "target");
      ctx.edges.push({
        sourceId,
        sourceSide: ctx.sides[0],
        sourceArrow: false,
        targetId,
        targetSide: ctx.sides[1],
        targetArrow: true,
        label: tr[3]?.trim() ? cleanLabel(tr[3]) : void 0
      });
      continue;
    }
    const stereo = t.match(STEREOTYPE_RE);
    if (stereo) {
      const svc = touch(stereo[1], ctx, scope());
      svc.shape = STEREOTYPE_SHAPE[stereo[2]];
      if (svc.label === svc.id) svc.label = "";
      continue;
    }
    const asDecl = t.match(STATE_AS_RE);
    if (asDecl) {
      if (asDecl[3]) openGroup(asDecl[2], cleanLabel(asDecl[1]));
      else touch(asDecl[2], ctx, scope()).label = cleanLabel(asDecl[1]);
      continue;
    }
    const decl = t.match(STATE_DECL_RE);
    if (decl) {
      if (decl[2]) openGroup(decl[1], decl[1]);
      else touch(decl[1], ctx, scope());
      continue;
    }
    const desc = t.match(DESC_RE);
    if (desc) {
      if (ctx.groupIds.has(desc[1])) {
        const g = groups.find((x) => x.id === desc[1]);
        if (g) g.label = cleanLabel(desc[2]);
      } else {
        touch(desc[1], ctx, scope()).label = cleanLabel(desc[2]);
      }
      continue;
    }
    if (ID_RE.test(t) && !ctx.groupIds.has(t)) touch(t, ctx, scope());
  }
  if (ctx.order.length === 0 && groups.length === 0) throw new ParseError("state diagram contains no states.");
  const services = ctx.order.map((id) => ({ ...ctx.byId.get(id), parent: ctx.nodeParent.get(id) }));
  return { services, groups, junctions: [], edges: ctx.edges, kind: "state", direction };
}
export {
  parseStateDiagram
};
