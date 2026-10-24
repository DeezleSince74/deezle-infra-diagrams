// src/model/parseEr.ts
import { ParseError, parseIconRef } from "./model.mjs";
var LEFT_CARD = {
  "|o": "zero-or-one",
  "||": "exactly-one",
  "}o": "zero-or-many",
  "}|": "one-or-many"
};
var RIGHT_CARD = {
  "o|": "zero-or-one",
  "||": "exactly-one",
  "o{": "zero-or-many",
  "|{": "one-or-many"
};
var REL = /(\|o|\|\||\}o|\}\|)(--|\.\.)(o\||\|\||o\{|\|\{)/;
function unquote(s) {
  const t = s.trim();
  if (t.startsWith('"') && t.endsWith('"') || t.startsWith("'") && t.endsWith("'")) {
    return t.slice(1, -1);
  }
  return t;
}
function entityRef(token) {
  const t = token.trim();
  const bracket = t.indexOf("[");
  if (bracket !== -1 && t.endsWith("]")) {
    const id = t.slice(0, bracket).trim();
    const label = unquote(t.slice(bracket + 1, -1));
    return { id, label: label || void 0 };
  }
  return { id: unquote(t) };
}
function parseColumn(line) {
  let rest = line.trim();
  if (!rest) return void 0;
  let comment;
  const cm = rest.match(/\s"([^"]*)"\s*$/);
  if (cm) {
    comment = cm[1];
    rest = rest.slice(0, cm.index).trim();
  }
  const tokens = rest.split(/[\s,]+/).filter(Boolean);
  if (tokens.length === 0) return void 0;
  const keys = [];
  while (tokens.length) {
    const last = tokens[tokens.length - 1].toUpperCase();
    if (last === "PK" || last === "FK" || last === "UK") {
      keys.unshift(last);
      tokens.pop();
    } else {
      break;
    }
  }
  let type;
  let name;
  if (tokens.length >= 2) {
    type = tokens[0];
    name = tokens.slice(1).join(" ");
  } else if (tokens.length === 1) {
    name = tokens[0];
  } else {
    return void 0;
  }
  return { name, type, keys, comment };
}
function parseErDiagram(text) {
  const rawLines = text.split(/\r?\n/);
  let start = -1;
  for (let i = 0; i < rawLines.length; i++) {
    const t = rawLines[i].trim();
    if (!t || t.startsWith("%%")) continue;
    if (/^erDiagram\b/.test(t)) {
      start = i;
      break;
    }
    break;
  }
  if (start === -1) throw new ParseError("Not an erDiagram (missing `erDiagram` header).");
  const systemTags = {};
  let systemAll;
  for (const line of rawLines) {
    const m = line.match(/^\s*%%\s*system:\s*(\S+)\s+(\S+)\s*$/i);
    if (m) {
      if (m[1] === "*") systemAll = m[2];
      else systemTags[m[1]] = m[2];
    }
  }
  const order = [];
  const byId = /* @__PURE__ */ new Map();
  const edges = [];
  const ensure = (id, label) => {
    let s = byId.get(id);
    if (!s) {
      s = { id, label: label ?? id, table: { columns: [] } };
      byId.set(id, s);
      order.push(id);
    } else if (label && s.label === s.id) {
      s.label = label;
    }
    return s;
  };
  let currentEntity;
  for (let i = start + 1; i < rawLines.length; i++) {
    let line = rawLines[i];
    const cIdx = line.indexOf("%%");
    if (cIdx !== -1) line = line.slice(0, cIdx);
    const t = line.trim();
    if (!t) continue;
    if (currentEntity) {
      if (t === "}" || t.startsWith("}")) {
        currentEntity = void 0;
        continue;
      }
      const col = parseColumn(t);
      if (col) currentEntity.table.columns.push(col);
      continue;
    }
    const rel = t.match(REL);
    if (rel) {
      const op = rel[0];
      const idx = rel.index ?? t.indexOf(op);
      const left = entityRef(t.slice(0, idx));
      const afterOp = t.slice(idx + op.length).trim();
      const colon = afterOp.indexOf(":");
      const rightTok = colon === -1 ? afterOp : afterOp.slice(0, colon);
      const label = colon === -1 ? void 0 : unquote(afterOp.slice(colon + 1)) || void 0;
      const right = entityRef(rightTok);
      if (!left.id || !right.id) continue;
      ensure(left.id, left.label);
      ensure(right.id, right.label);
      edges.push({
        sourceId: left.id,
        sourceSide: "R",
        sourceArrow: false,
        targetId: right.id,
        targetSide: "L",
        targetArrow: false,
        label,
        sourceCard: LEFT_CARD[rel[1]],
        targetCard: RIGHT_CARD[rel[3]],
        identifying: rel[2] === "--"
      });
      continue;
    }
    const braceIdx = t.indexOf("{");
    if (braceIdx !== -1) {
      const head = t.slice(0, braceIdx).trim().match(/^([A-Za-z0-9_$-]+)(\[[^\]]*\]|"[^"]*")?$/);
      if (head) {
        const ref = entityRef(head[1] + (head[2] ?? ""));
        const svc = ensure(ref.id, ref.label);
        const after = t.slice(braceIdx + 1);
        const closeIdx = after.indexOf("}");
        if (closeIdx === -1) {
          currentEntity = svc;
        } else {
          const inner = after.slice(0, closeIdx).trim();
          if (inner) {
            const col = parseColumn(inner);
            if (col) svc.table.columns.push(col);
          }
        }
        continue;
      }
    }
    const bare = t.match(/^([A-Za-z0-9_$-]+)(\[[^\]]*\]|"[^"]*")?$/);
    if (bare) {
      const ref = entityRef(bare[1] + (bare[2] ?? ""));
      ensure(ref.id, ref.label);
      continue;
    }
  }
  if (order.length === 0) throw new ParseError("erDiagram contains no entities.");
  const services = order.map((id) => {
    const s = byId.get(id);
    const slug = systemTags[id] ?? systemAll;
    if (slug) s.icon = parseIconRef(`data:${slug}`);
    return s;
  });
  return { services, groups: [], junctions: [], edges, kind: "er" };
}
export {
  parseErDiagram
};
