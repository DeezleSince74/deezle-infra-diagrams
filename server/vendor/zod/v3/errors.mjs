import defaultErrorMap from "./locales/en.mjs";
let overrideErrorMap = defaultErrorMap;
export { defaultErrorMap };
export function setErrorMap(map) {
    overrideErrorMap = map;
}
export function getErrorMap() {
    return overrideErrorMap;
}
