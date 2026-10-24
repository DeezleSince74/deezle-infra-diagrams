// src/infra/index.ts
import { emitArchitecture } from "./emit.mjs";
import { IacParseError } from "./ir.mjs";
import { armToIr } from "./parsers/arm.mjs";
import { cfnToIr } from "./parsers/cfn.mjs";
import { looksLikeCfnYaml, parseCfnYaml } from "./parsers/cfnYaml.mjs";
import { pulumiToIr } from "./parsers/pulumi.mjs";
import { terraformToIr } from "./parsers/terraform.mjs";
var ADAPTERS = {
  terraform: (json, opts) => terraformToIr(json, { includeData: opts.includeData }),
  pulumi: (json) => pulumiToIr(json),
  arm: (json) => armToIr(json),
  cfn: (json) => cfnToIr(json)
};
function detectPlatform(json) {
  if (!json || typeof json !== "object") return void 0;
  const o = json;
  const values = o.values;
  const planned = o.planned_values;
  if (o.terraform_version || values?.root_module || planned?.root_module) return "terraform";
  const deployment = o.deployment;
  if (deployment?.resources) return "pulumi";
  if (typeof o.$schema === "string" && /deploymentTemplate/i.test(o.$schema)) return "arm";
  if (o.resources && o.contentVersion) return "arm";
  if (o.Resources && typeof o.Resources === "object") return "cfn";
  return void 0;
}
function convert(jsonText, opts = {}) {
  let json;
  if (looksLikeCfnYaml(jsonText)) {
    try {
      json = parseCfnYaml(jsonText);
    } catch (err) {
      throw new IacParseError(`Input is not valid CloudFormation YAML: ${err.message}`);
    }
  } else {
    try {
      json = JSON.parse(jsonText);
    } catch {
      throw new IacParseError("Input is not valid JSON.");
    }
  }
  const platform = opts.platform ?? detectPlatform(json);
  if (!platform) {
    throw new IacParseError(
      "Could not detect the IaC type (expected Terraform / Pulumi / ARM JSON, or a CloudFormation template). Pass an explicit platform."
    );
  }
  const adapter = ADAPTERS[platform];
  if (!adapter) {
    throw new IacParseError(`${platform} is recognized but not supported yet.`);
  }
  const ir = adapter(json, opts);
  if (opts.title) ir.meta.title = opts.title;
  if (opts.noEdges) ir.edges = [];
  if (ir.nodes.length === 0 && ir.groups.length === 0) {
    throw new IacParseError("No resources found in the input.");
  }
  const { mmd, unmappedTypes } = emitArchitecture(ir);
  return {
    mmd,
    platform,
    counts: { nodes: ir.nodes.length, groups: ir.groups.length, edges: ir.edges.length },
    unmappedTypes
  };
}
export {
  IacParseError,
  convert,
  detectPlatform,
  looksLikeCfnYaml
};
