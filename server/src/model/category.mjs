// src/model/category.ts
import { parseIconRef } from "./model.mjs";
var CATEGORY = [
  // External signals first — specific, shouldn't be shadowed by the broad categories.
  { key: "marketplace", label: "Marketplace SaaS", accent: "#ff7849", re: /marketplace|(^|[-_])saas([-_]|$)/ },
  { key: "thirdparty", label: "Third-party", accent: "#f472b6", re: /thirdparty|third-party/ },
  { key: "compute", label: "Compute", accent: "#5b8cff", re: /ec2|instance|compute|lambda|function|fargate|container|ecs|eks|kubernetes|aks|gke|run|app-?service|app-?runner|vm|virtual-?machine|server|batch|nitro|outpost|beanstalk|pod|node/ },
  { key: "database", label: "Database", accent: "#b07cff", re: /rds|aurora|dynamo|database|sql|cosmos|spanner|bigtable|firestore|datastore|redis|elasticache|memcache|documentdb|neptune|timestream|table|db\b/ },
  { key: "storage", label: "Storage", accent: "#2dd4a7", re: /s3|storage|bucket|disk|volume|ebs|efs|fsx|glacier|blob|backup|file|hyperdisk/ },
  { key: "network", label: "Network", accent: "#ffb02e", re: /vpc|subnet|route|cloudfront|cdn|dns|gateway|load-?balanc|elb|alb|nlb|network|firewall|waf|api-?gateway|appmesh|transit|directconnect|vpn|peering|endpoint/ },
  { key: "security", label: "Security", accent: "#ff6b6b", re: /iam|security|kms|secret|cognito|guardduty|inspector|shield|certificate|acm|vault|identity|key|defender|sentinel/ },
  { key: "analytics", label: "Analytics", accent: "#34d399", re: /athena|emr|kinesis|glue|quicksight|redshift|analytics|bigquery|lake|firehose|msk|kafka|pubsub|dataflow|looker/ }
];
var NEUTRAL = "#8a94ad";
function accentFor(key) {
  return CATEGORY.find((c) => c.key === key)?.accent ?? NEUTRAL;
}
function categoryOf(iconRef) {
  const name = (parseIconRef(iconRef)?.name ?? "").toLowerCase();
  const hit = name ? CATEGORY.find((c) => c.re.test(name)) : void 0;
  return hit ? { key: hit.key, label: hit.label, accent: hit.accent } : { key: "other", label: "Other", accent: NEUTRAL };
}
export {
  CATEGORY,
  NEUTRAL,
  accentFor,
  categoryOf
};
