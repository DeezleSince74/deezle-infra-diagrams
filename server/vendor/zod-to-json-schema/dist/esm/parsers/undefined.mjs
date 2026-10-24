import { parseAnyDef } from "./any.mjs";
export function parseUndefinedDef(refs) {
    return {
        not: parseAnyDef(refs),
    };
}
