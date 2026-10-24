import * as z from "./external.mjs";
export * from "./external.mjs";
// See the note in `src/index.ts` — aliasing keeps the default export shakable.
export { z, z as default };
