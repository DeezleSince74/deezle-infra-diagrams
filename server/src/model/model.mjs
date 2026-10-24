// src/model/model.ts
var ParseError = class extends Error {
  constructor(message, line) {
    super(message);
    this.line = line;
    this.name = "ParseError";
  }
};
function parseIconRef(raw) {
  if (!raw) return void 0;
  const trimmed = raw.trim();
  const idx = trimmed.indexOf(":");
  if (idx === -1) {
    return { provider: "", name: trimmed, raw: trimmed };
  }
  return {
    provider: trimmed.slice(0, idx),
    name: trimmed.slice(idx + 1),
    raw: trimmed
  };
}
export {
  ParseError,
  parseIconRef
};
