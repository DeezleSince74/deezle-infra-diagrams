// scripts/lib/version.ts
import pkg from "../version.json" with { type: "json" };
var VERSION = pkg.version;
export {
  VERSION
};
