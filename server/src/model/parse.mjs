// src/model/parse.ts
import { ParseError, parseIconRef } from "./model.mjs";
var ID = /[\w](?:[-\w]*\w)?/y;
var ICON = /\([\w\-:]+\)/y;
var TITLE = /\[(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|[\w ]+)\]/y;
var STRING = /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/y;
var SPACE = /[\t ]+/y;
var NEWLINE = /\r?\n/y;
var YAML = /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/y;
var DIRECTIVE = /%%\{[\S\s]*?\}%%(?:\r?\n|(?!\S))/y;
var COMMENT = /%%[^\n\r]*/y;
var META = [
  /accDescr(?:[\t ]*:[^\n\r]*|\s*\{[^}]*\})/y,
  /accTitle[\t ]*:[^\n\r]*/y,
  /title(?:[\t ][^\n\r]*)?(?=\r?\n|$)/y
];
var iconValue = (raw) => raw.replace(/[()]/g, "").trim();
function titleValue(raw) {
  let v = raw.replace(/^\[|]$/g, "").trim();
  if (v.startsWith('"') && v.endsWith('"') || v.startsWith("'") && v.endsWith("'")) {
    v = v.slice(1, -1).replace(/\\"/g, '"').replace(/\\'/g, "'");
  }
  return v.trim();
}
function stringValue(raw) {
  const ESC = { b: "\b", f: "\f", n: "\n", r: "\r", t: "	", v: "\v", "0": "\0" };
  let out = "";
  for (let i = 1; i < raw.length - 1; i++) {
    const c = raw[i];
    out += c === "\\" ? ESC[raw[++i]] ?? raw[i] : c;
  }
  return out;
}
var Reader = class {
  constructor(src) {
    this.src = src;
    this.pos = 0;
  }
  /** Try a sticky regex at the cursor; on a match, move past it and return the text. */
  take(re) {
    re.lastIndex = this.pos;
    const m = re.exec(this.src);
    if (!m || m.index !== this.pos) return void 0;
    this.pos += m[0].length;
    return m[0];
  }
  /** Skip spaces, tabs, comments, directives and front matter (never a bare newline). */
  skip() {
    for (; ; ) {
      const before = this.pos;
      this.take(SPACE);
      this.take(YAML);
      this.take(DIRECTIVE);
      this.take(COMMENT);
      if (this.pos === before) return;
    }
  }
  atEnd() {
    this.skip();
    return this.pos >= this.src.length;
  }
  newline() {
    this.skip();
    return this.take(NEWLINE) !== void 0;
  }
  /** A whole word: `group` matches, but not the start of `groups` or `group-a`. */
  keyword(word) {
    this.skip();
    ID.lastIndex = this.pos;
    const m = ID.exec(this.src);
    if (m?.index === this.pos && m[0] === word) {
      this.pos += word.length;
      return true;
    }
    return false;
  }
  /** Like {@link keyword}, for `architecture-beta`, which itself contains a dash. */
  header() {
    this.skip();
    ID.lastIndex = this.pos;
    const m = ID.exec(this.src);
    if (m?.index === this.pos && m[0] === "architecture-beta") {
      this.pos += m[0].length;
      return true;
    }
    return false;
  }
  literal(text) {
    this.skip();
    if (!this.src.startsWith(text, this.pos)) return false;
    this.pos += text.length;
    return true;
  }
  token(re) {
    this.skip();
    return this.take(re);
  }
  meta() {
    this.skip();
    return META.some((re) => this.take(re) !== void 0);
  }
  /** Line and column of the cursor (1-based), for error messages. */
  where() {
    const before = this.src.slice(0, this.pos);
    const line = before.split("\n").length;
    return { line, col: this.pos - before.lastIndexOf("\n") };
  }
  fail(expected) {
    this.skip();
    const { line, col } = this.where();
    const found = this.src.slice(this.pos).match(/^[^\r\n]{0,20}/)?.[0];
    const what = found ? `"${found}"` : this.pos >= this.src.length ? "the end of the diagram" : "a line break";
    throw new ParseError(`Line ${line}, column ${col}: expected ${expected}, found ${what}.`, line);
  }
  id(expected = "a name") {
    return this.token(ID) ?? this.fail(expected);
  }
  side() {
    this.skip();
    const c = this.src[this.pos];
    if (c === "L" || c === "R" || c === "T" || c === "B") {
      this.pos++;
      return c;
    }
    return this.fail("a side (L, R, T or B)");
  }
  /** End of a statement: one or more line breaks, or the end of the text. */
  endOfLine() {
    if (this.atEnd()) return;
    if (!this.newline()) this.fail("the end of the line");
    while (this.newline()) ;
  }
};
async function parseArchitecture(text) {
  const r = new Reader(text);
  const groups = [];
  const services = [];
  const junctions = [];
  const edges = [];
  while (r.newline()) ;
  if (!r.header()) r.fail('the "architecture-beta" header');
  const parent = () => r.keyword("in") ? r.id('a group name after "in"') : void 0;
  for (; ; ) {
    if (r.atEnd()) break;
    if (r.newline()) continue;
    if (r.meta()) {
      r.endOfLine();
      continue;
    }
    if (r.keyword("group")) {
      const id = r.id("a group name");
      const icon = r.token(ICON);
      const title = r.token(TITLE);
      groups.push({
        id,
        label: title ? titleValue(title) : id,
        icon: parseIconRef(icon && iconValue(icon)),
        parent: parent()
      });
    } else if (r.keyword("service")) {
      const id = r.id("a service name");
      const textIcon = r.token(STRING);
      const icon = textIcon === void 0 ? r.token(ICON) : void 0;
      const title = r.token(TITLE);
      services.push({
        id,
        label: title ? titleValue(title) : id,
        icon: parseIconRef(textIcon !== void 0 ? stringValue(textIcon) : icon && iconValue(icon)),
        parent: parent()
      });
    } else if (r.keyword("junction")) {
      junctions.push({ id: r.id("a junction name"), parent: parent() });
    } else {
      const sourceId = r.id("group, service, junction or an edge");
      r.literal("{group}");
      if (!r.literal(":")) r.fail('":" and a side after the name');
      const sourceSide = r.side();
      const sourceArrow = r.literal("<") || r.literal(">");
      let label;
      if (!r.literal("--")) {
        if (!r.literal("-")) r.fail('"--" or "-[label]-"');
        const title = r.token(TITLE) ?? r.fail("a [label] between the dashes");
        label = titleValue(title);
        if (!r.literal("-")) r.fail('"-" after the label');
      }
      const targetArrow = r.literal("<") || r.literal(">");
      const targetSide = r.side();
      if (!r.literal(":")) r.fail('":" after the side');
      const targetId = r.id("a name after the side");
      r.literal("{group}");
      edges.push({ sourceId, sourceSide, sourceArrow, targetId, targetSide, targetArrow, label });
    }
    r.endOfLine();
  }
  if (services.length === 0 && groups.length === 0) {
    throw new ParseError("Diagram contains no services or groups.");
  }
  return { groups, services, junctions, edges };
}
export {
  parseArchitecture
};
