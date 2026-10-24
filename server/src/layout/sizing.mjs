// src/layout/sizing.ts
import { LABEL_LINE_HEIGHT, SERVICE_HEIGHT, SERVICE_MAX_WIDTH, SERVICE_WIDTH } from "./constants.mjs";
import { measureText } from "./measure.mjs";
import { nodeMeta } from "../export/meta.mjs";
var LABEL_FONT = 12;
var EDGE_LABEL_FONT = 10;
var NODE_H_PAD = 16;
var ER_HEADER_H = 64;
var ER_ROW_H = 28;
var ER_MIN_W = 210;
var ER_MAX_W = 380;
function tableSize(label, table, hasIcon) {
  const headerW = measureText(label || "", 14.5) * 1.05 + (hasIcon ? 52 : 0) + 30;
  let bodyW = 0;
  for (const c of table.columns) {
    const keys = c.keys.length ? "  " + c.keys.join(" ") : "";
    const line = `${c.type ? c.type + " " : ""}${c.name}${keys}`;
    bodyW = Math.max(bodyW, measureText(line, 13.5) + 30);
  }
  const width = Math.round(Math.min(ER_MAX_W, Math.max(ER_MIN_W, headerW, bodyW)));
  const height = ER_HEADER_H + table.columns.length * ER_ROW_H + (table.columns.length ? 8 : 0);
  return { width, height };
}
var FLOW_H = 46;
var FLOW_PAD_X = {
  rect: 44,
  round: 52,
  stadium: 60,
  subroutine: 66,
  cylinder: 56,
  circle: 64,
  diamond: 130,
  hexagon: 80,
  parallelogram: 80,
  "parallelogram-alt": 80,
  trapezoid: 90,
  "trapezoid-alt": 90,
  state: 46,
  note: 44,
  // Fixed-size shapes: their geometry is the meaning, so they reserve no text room.
  start: 0,
  end: 0,
  fork: 0
};
var FLOW_GLYPH_W = {
  stadium: 25,
  circle: 25,
  diamond: 25,
  hexagon: 25,
  subroutine: 25,
  cylinder: 25,
  parallelogram: 25,
  "parallelogram-alt": 25,
  trapezoid: 25,
  "trapezoid-alt": 25
};
var TERMINAL_D = 26;
var FORK_LONG = 118;
var FORK_THICK = 12;
var CHOICE_D = 44;
function flowNodeSize(label, shape, dir) {
  if (shape === "start" || shape === "end") return { width: TERMINAL_D, height: TERMINAL_D };
  if (shape === "fork") {
    const sideways = dir === "LR" || dir === "RL";
    return sideways ? { width: FORK_THICK, height: FORK_LONG } : { width: FORK_LONG, height: FORK_THICK };
  }
  if (shape === "diamond" && !label) return { width: CHOICE_D, height: CHOICE_D };
  const lines = (label || " ").split("\n");
  const textW = Math.max(24, ...lines.map((l) => measureText(l, 14) * 1.05));
  const minW = shape === "diamond" ? 120 : 110;
  const pad = FLOW_PAD_X[shape] + (FLOW_GLYPH_W[shape] || 0);
  let width = Math.round(Math.min(344, Math.max(minW, textW + pad)));
  let height = FLOW_H + (lines.length - 1) * 18 + (shape === "diamond" ? 28 : 0);
  if (shape === "circle") {
    const d = Math.max(width, height, 96);
    width = d;
    height = d;
  }
  return { width, height };
}
function serviceSize(label, iconRef, style, table) {
  if (table) return tableSize(label, table, Boolean(iconRef));
  if (style === "card") {
    const typeStr = nodeMeta(iconRef).type.toUpperCase();
    const typeW = typeStr.length * 8.5;
    const nameW = measureText(label || "", 14.5) * 1.05;
    const NAME_CAP = 230;
    const textCol = Math.max(typeW, Math.min(nameW, NAME_CAP));
    const width2 = Math.round(Math.min(400, Math.max(186, 82 + textCol + 8)));
    const nameLines = Math.min(2, Math.max(1, Math.ceil(nameW / Math.max(width2 - 82, 1))));
    return { width: width2, height: 78 + (nameLines - 1) * 19 };
  }
  const textWidth = measureText(label || "", LABEL_FONT);
  const width = Math.min(SERVICE_MAX_WIDTH, Math.max(SERVICE_WIDTH, Math.ceil(textWidth) + NODE_H_PAD));
  const usable = Math.max(width - NODE_H_PAD, 1);
  const lines = Math.max(1, Math.min(3, Math.ceil(textWidth / usable)));
  return { width, height: SERVICE_HEIGHT + (lines - 1) * LABEL_LINE_HEIGHT };
}
function nodeSize(s, style, dir) {
  return s.shape ? flowNodeSize(s.label, s.shape, dir) : serviceSize(s.label, s.icon?.raw, style, s.table);
}
export {
  EDGE_LABEL_FONT,
  flowNodeSize,
  nodeSize,
  serviceSize,
  tableSize
};
