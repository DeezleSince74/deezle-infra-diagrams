// The diagram widget's rf-app code, kept unminified in ../widget/ and joined here.
// Built from src/widget-app by scripts/build-server.mjs (settings in scripts/lib/widget-build.mjs).
import { readFileSync } from 'node:fs';

const parts = ["rf-app.1.js","rf-app.2.js","rf-app.3.js","rf-app.4.js"];
export const RF_BUNDLE = parts.map((f) => readFileSync(new URL("../widget/" + f, import.meta.url), 'utf8')).join('');
