// src/icons/packResolver.ts
import { VENDOR_PREFIXES, canonKey, normName } from "./refMatch.mjs";
function createPackResolver(packs, aliases) {
  let canon;
  const canonIndex = (provider) => {
    canon ??= {};
    let idx = canon[provider];
    if (!idx) {
      idx = /* @__PURE__ */ new Map();
      for (const name of Object.keys(packs[provider]?.icons ?? {})) {
        const ck = canonKey(name);
        if (!idx.has(ck)) idx.set(ck, name);
      }
      canon[provider] = idx;
    }
    return idx;
  };
  const resolveName = (provider, rawName) => {
    const pack = packs[provider];
    if (!pack) return void 0;
    const base = rawName.includes(":") ? rawName.slice(0, rawName.indexOf(":")) : rawName;
    const name = normName(base);
    if (pack.icons[name]) return name;
    const aliased = aliases[`${provider}:${name}`];
    if (aliased) {
      const n = aliased.slice(aliased.indexOf(":") + 1);
      if (pack.icons[n]) return n;
    }
    const direct = canonIndex(provider).get(canonKey(name));
    if (direct) return direct;
    for (const pre of VENDOR_PREFIXES[provider]) {
      if (pack.icons[pre + name]) return pre + name;
      if (name.startsWith(pre)) {
        const stripped = name.slice(pre.length);
        if (pack.icons[stripped]) return stripped;
        const hit = canonIndex(provider).get(canonKey(stripped));
        if (hit) return hit;
      }
    }
    return void 0;
  };
  return (provider, name) => {
    const key = resolveName(provider, name);
    if (!key) return void 0;
    const pack = packs[provider];
    const icon = pack.icons[key];
    return wrapSvg(icon.body, icon.width ?? pack.width ?? 24, icon.height ?? pack.height ?? 24);
  };
}
function wrapSvg(body, width, height) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${body}</svg>`;
}
export {
  createPackResolver,
  wrapSvg
};
