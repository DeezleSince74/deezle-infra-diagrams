// The diagram widget's mcp-apps-client code, kept unminified in ../widget/ and joined here.
// Built from src/widget-app by scripts/build-server.mjs (settings in scripts/lib/widget-build.mjs).
import { readFileSync } from 'node:fs';

const parts = ["mcp-apps-client.1.js"];
export const EXT_APPS_BUNDLE = parts.map((f) => readFileSync(new URL("../widget/" + f, import.meta.url), 'utf8')).join('');
