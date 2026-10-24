import { parseAnyDef } from "./any.mjs";
export function parseNeverDef(refs) {
    return refs.target === "openAi"
        ? undefined
        : {
            not: parseAnyDef({
                ...refs,
                currentPath: [...refs.currentPath, "not"],
            }),
        };
}
