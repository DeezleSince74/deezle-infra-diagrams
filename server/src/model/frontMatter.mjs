// src/model/frontMatter.ts
var FRONT_MATTER = /^\uFEFF?[ \t]*---[ \t]*\r?\n([\s\S]*?)\r?\n[ \t]*---[ \t]*(?:\r?\n|$)/;
function splitFrontMatter(src) {
  const m = src.match(FRONT_MATTER);
  if (!m) return { body: src };
  const tm = m[1].match(/^title:[ \t]*(.+?)[ \t]*$/m);
  const title = tm?.[1].replace(/^(["'])(.*)\1$/, "$2").trim();
  return { body: src.slice(m[0].length), ...title ? { title } : {} };
}
export {
  splitFrontMatter
};
