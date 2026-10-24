// src/export/scriptJson.ts
function scriptJson(value) {
  return JSON.stringify(value).replace(/[<>&\u2028\u2029]/g, (c) => `\\u${c.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
export {
  scriptJson
};
