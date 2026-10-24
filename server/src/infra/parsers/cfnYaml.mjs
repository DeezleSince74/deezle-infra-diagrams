// src/infra/parsers/cfnYaml.ts
import { parse, Scalar } from "../../../vendor/yaml/browser/index.mjs";
var INTRINSICS = [
  "Base64",
  "Cidr",
  "FindInMap",
  "GetAtt",
  "GetAZs",
  "ImportValue",
  "Join",
  "Select",
  "Split",
  "Sub",
  "Transform",
  "And",
  "Equals",
  "If",
  "Not",
  "Or"
];
function intrinsicTags() {
  const tags = [{ tag: "!Ref", resolve: (s) => ({ Ref: s }) }];
  tags.push({ tag: "!Condition", resolve: (s) => ({ Condition: s }) });
  for (const name of INTRINSICS) {
    const key = `Fn::${name}`;
    tags.push(
      { tag: `!${name}`, resolve: (s) => ({ [key]: s }) },
      { tag: `!${name}`, collection: "seq", resolve: (seq) => new Scalar({ [key]: seq.toJSON() }) },
      { tag: `!${name}`, collection: "map", resolve: (map) => new Scalar({ [key]: map.toJSON() }) }
    );
  }
  return tags;
}
var TAGS = intrinsicTags();
function looksLikeCfnYaml(text) {
  if (/^\s*[[{]/.test(text)) return false;
  return /^AWSTemplateFormatVersion\s*:/m.test(text) || /^Resources\s*:/m.test(text) && /\bType\s*:\s*['"]?AWS::/.test(text);
}
function parseCfnYaml(text) {
  return parse(text, { customTags: TAGS, maxAliasCount: 100 });
}
export {
  looksLikeCfnYaml,
  parseCfnYaml
};
