import { parseDef } from "../parseDef.mjs";
import { parseAnyDef } from "./any.mjs";
export function parseEffectsDef(_def, refs) {
    return refs.effectStrategy === "input"
        ? parseDef(_def.schema._def, refs)
        : parseAnyDef(refs);
}
