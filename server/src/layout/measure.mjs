// src/layout/measure.ts
var cachedCtx;
function context() {
  if (cachedCtx !== void 0) return cachedCtx;
  try {
    cachedCtx = typeof document !== "undefined" ? document.createElement("canvas").getContext("2d") : null;
  } catch {
    cachedCtx = null;
  }
  return cachedCtx;
}
function measureText(text, fontSize) {
  const ctx = context();
  if (ctx) {
    ctx.font = `${fontSize}px Inter, "Helvetica Neue", Arial, sans-serif`;
    return ctx.measureText(text).width;
  }
  return text.length * fontSize * 0.58;
}
export {
  measureText
};
