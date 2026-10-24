// src/icons/simpleMap.ts
import { categoryOf, accentFor } from "../model/category.mjs";
var SIMPLE_MAP = {
  "gcp:cloud-storage": "googlecloudstorage",
  "gcp:big-query": "googlebigquery"
};
var THIRD_PARTY_SLUGS = {
  datadog: "datadog",
  cloudflare: "cloudflare",
  pagerduty: "pagerduty",
  auth0: "auth0",
  okta: "okta",
  snowflake: "snowflake",
  mongodbatlas: "mongodb",
  newrelic: "newrelic",
  fastly: "fastly",
  github: "github",
  gitlab: "gitlab",
  stripe: "stripe",
  vercel: "vercel",
  netlify: "netlify",
  grafana: "grafana",
  sentry: "sentry",
  algolia: "algolia",
  databricks: "databricks",
  elastic: "elastic",
  elasticstack: "elastic",
  ec: "elastic",
  tfe: "terraform"
};
var ENGINE_SLUGS = {
  kubernetes: "kubernetes",
  postgres: "postgresql",
  postgresql: "postgresql",
  mariadb: "mariadb",
  mysql: "mysql",
  redis: "redis",
  mongo: "mongodb",
  kafka: "apachekafka",
  rabbitmq: "rabbitmq",
  elasticsearch: "elasticsearch",
  nginx: "nginx",
  terraform: "terraform"
};
var KINDS = [
  { kind: "compute", lucide: "server", accent: accentFor("compute") },
  { kind: "database", lucide: "database", accent: accentFor("database") },
  { kind: "storage", lucide: "hard-drive", accent: accentFor("storage") },
  { kind: "network", lucide: "network", accent: accentFor("network") },
  { kind: "security", lucide: "shield", accent: accentFor("security") },
  { kind: "analytics", lucide: "chart-bar", accent: accentFor("analytics") },
  { kind: "marketplace", lucide: "shopping-bag", accent: accentFor("marketplace") },
  { kind: "thirdparty", lucide: "blocks", accent: accentFor("thirdparty") },
  { kind: "other", lucide: "box", accent: accentFor("other") }
];
function brandSlugs() {
  return [.../* @__PURE__ */ new Set([...Object.values(SIMPLE_MAP), ...Object.values(THIRD_PARTY_SLUGS), ...Object.values(ENGINE_SLUGS), "googlecloud"])];
}
function openKeyFor(ref, name) {
  const lower = (name || "").toLowerCase();
  if (SIMPLE_MAP[ref]) return SIMPLE_MAP[ref];
  const tp = ref.match(/^generic:thirdparty:(.+)$/);
  if (tp) return THIRD_PARTY_SLUGS[tp[1]] ?? "kind-thirdparty";
  for (const kw of Object.keys(ENGINE_SLUGS)) if (lower.includes(kw)) return ENGINE_SLUGS[kw];
  if (ref.startsWith("gcp:")) return "googlecloud";
  return "kind-" + categoryOf(ref).key;
}
export {
  ENGINE_SLUGS,
  KINDS,
  SIMPLE_MAP,
  THIRD_PARTY_SLUGS,
  brandSlugs,
  openKeyFor
};
