// src/icons/dataMap.ts
var DATA_CATEGORIES = {
  crm: { label: "CRM", accent: "#ff7849", lucide: "contact" },
  erp: { label: "ERP", accent: "#e0a458", lucide: "building-2" },
  warehouse: { label: "Data warehouse", accent: "#34d399", lucide: "warehouse" },
  lakehouse: { label: "Lakehouse", accent: "#22d3ee", lucide: "layers" },
  bi: { label: "BI & analytics", accent: "#a78bfa", lucide: "chart-column" },
  etl: { label: "Data integration", accent: "#5b8cff", lucide: "workflow" },
  database: { label: "Database", accent: "#b07cff", lucide: "database" },
  streaming: { label: "Streaming", accent: "#f472b6", lucide: "radio-tower" },
  observability: { label: "Observability", accent: "#22d3ee", lucide: "activity" },
  vendor: { label: "Third-party", accent: "#f472b6", lucide: "blocks" },
  /** Default for a plain ER entity with no declared system. */
  table: { label: "Entity", accent: "#8a94ad", lucide: "table" }
};
var DATA_SYSTEMS = [
  // ── CRM ──────────────────────────────────────────────────────────────────
  { key: "salesforce", category: "crm", aliases: ["sfdc", "sales-force"] },
  { key: "hubspot", category: "crm", simple: "hubspot" },
  { key: "dynamics365", category: "crm", aliases: ["dynamics", "msdynamics", "microsoft-dynamics-365", "dynamics-365"] },
  { key: "zoho", category: "crm", simple: "zoho" },
  { key: "gong", category: "crm", aliases: ["gongio"] },
  { key: "zendesk", category: "crm", simple: "zendesk" },
  { key: "intercom", category: "crm", simple: "intercom" },
  { key: "pipedrive", category: "crm" },
  { key: "freshworks", category: "crm", aliases: ["freshsales", "freshdesk"] },
  // ── ERP ──────────────────────────────────────────────────────────────────
  { key: "sap", category: "erp", simple: "sap" },
  { key: "netsuite", category: "erp", aliases: ["oracle-netsuite", "oraclenetsuite"] },
  { key: "odoo", category: "erp", simple: "odoo" },
  { key: "workday", category: "erp" },
  { key: "sage", category: "erp", simple: "sage" },
  { key: "infor", category: "erp" },
  // ── Data warehouse ─────────────────────────────────────────────────────────
  { key: "snowflake", category: "warehouse", simple: "snowflake", aliases: ["snowflake-icon"] },
  { key: "bigquery", category: "warehouse", simple: "googlebigquery", aliases: ["google-bigquery", "googlebigquery"] },
  { key: "redshift", category: "warehouse", aliases: ["amazon-redshift", "aws-redshift", "awsredshift", "amazonredshift"] },
  { key: "synapse", category: "warehouse", aliases: ["azure-synapse", "azuresynapse"] },
  // Microsoft Fabric has no CC0 logo (and the `logos:fabric` slug is Twitter's old Fabric
  // SDK), so default to the Azure logo; drop icons/data-overrides/fabric.svg for the real mark.
  { key: "fabric", category: "warehouse", logos: "microsoft-azure", aliases: ["microsoft-fabric", "microsoftfabric"] },
  { key: "teradata", category: "warehouse", simple: "teradata" },
  { key: "clickhouse", category: "warehouse", simple: "clickhouse" },
  { key: "firebolt", category: "warehouse" },
  // ── Lakehouse / table formats ───────────────────────────────────────────────
  { key: "databricks", category: "lakehouse", simple: "databricks" },
  { key: "trino", category: "lakehouse", simple: "trino", aliases: ["presto"] },
  { key: "starburst", category: "lakehouse", aliases: ["starburst-data", "starburstdata"] },
  { key: "iceberg", category: "lakehouse", aliases: ["apache-iceberg", "apacheiceberg"] },
  { key: "delta", category: "lakehouse", aliases: ["delta-lake", "deltalake"] },
  { key: "hudi", category: "lakehouse", aliases: ["apache-hudi", "apachehudi"] },
  { key: "dremio", category: "lakehouse" },
  // ── ETL / ELT / orchestration ────────────────────────────────────────────────
  { key: "dbt", category: "etl", aliases: ["getdbt", "dbt-labs"] },
  { key: "fivetran", category: "etl" },
  { key: "airbyte", category: "etl", simple: "airbyte" },
  { key: "airflow", category: "etl", simple: "apacheairflow", aliases: ["apache-airflow", "apacheairflow"] },
  { key: "dagster", category: "etl" },
  { key: "prefect", category: "etl", simple: "prefect" },
  { key: "matillion", category: "etl", simple: "matillion" },
  { key: "talend", category: "etl", simple: "talend" },
  { key: "informatica", category: "etl" },
  { key: "nifi", category: "etl", simple: "apachenifi", aliases: ["apache-nifi", "apachenifi"] },
  { key: "meltano", category: "etl" },
  // ── BI & analytics ───────────────────────────────────────────────────────────
  { key: "tableau", category: "bi" },
  { key: "powerbi", category: "bi", aliases: ["power-bi", "microsoft-power-bi", "microsoftpowerbi"] },
  { key: "looker", category: "bi", simple: "looker" },
  { key: "qlik", category: "bi", simple: "qlik" },
  { key: "metabase", category: "bi", simple: "metabase" },
  { key: "superset", category: "bi", simple: "apachesuperset", aliases: ["apache-superset", "apachesuperset"] },
  { key: "mode", category: "bi" },
  // ── Databases ────────────────────────────────────────────────────────────────
  { key: "postgres", category: "database", simple: "postgresql", aliases: ["postgresql", "postgre"] },
  { key: "mysql", category: "database", simple: "mysql" },
  { key: "mariadb", category: "database", simple: "mariadb" },
  { key: "mongodb", category: "database", simple: "mongodb", aliases: ["mongo"] },
  { key: "sqlserver", category: "database", aliases: ["mssql", "microsoft-sql-server", "microsoftsqlserver", "sql-server"] },
  { key: "oracle", category: "database", aliases: ["oracledb", "oracle-database"] },
  { key: "sqlite", category: "database", simple: "sqlite" },
  { key: "cassandra", category: "database", simple: "apachecassandra", aliases: ["apache-cassandra", "apachecassandra"] },
  { key: "redis", category: "database", simple: "redis" },
  { key: "neo4j", category: "database", simple: "neo4j" },
  { key: "duckdb", category: "database", simple: "duckdb" },
  { key: "cockroachdb", category: "database", simple: "cockroachlabs", aliases: ["cockroach", "cockroachlabs"] },
  { key: "couchbase", category: "database", simple: "couchbase" },
  { key: "influxdb", category: "database", simple: "influxdb" },
  { key: "supabase", category: "database", simple: "supabase" },
  { key: "dynamodb", category: "database", aliases: ["amazon-dynamodb", "aws-dynamodb", "amazondynamodb"] },
  { key: "cosmosdb", category: "database", aliases: ["azure-cosmos-db", "cosmos", "azurecosmosdb"] },
  { key: "planetscale", category: "database", simple: "planetscale" },
  // ── Streaming ────────────────────────────────────────────────────────────────
  { key: "kafka", category: "streaming", simple: "apachekafka", aliases: ["apache-kafka", "apachekafka"] },
  { key: "pulsar", category: "streaming", simple: "apachepulsar", aliases: ["apache-pulsar", "apachepulsar"] },
  { key: "flink", category: "streaming", simple: "apacheflink", aliases: ["apache-flink", "apacheflink"] },
  { key: "confluent", category: "streaming" },
  { key: "kinesis", category: "streaming", aliases: ["aws-kinesis", "amazon-kinesis", "amazonkinesis"] },
  { key: "redpanda", category: "streaming" },
  // ── Third-party vendors (also used to upgrade infra diagrams' external nodes) ──
  { key: "datadog", category: "observability", simple: "datadog" },
  { key: "newrelic", category: "observability", simple: "newrelic", aliases: ["new-relic"] },
  { key: "grafana", category: "observability", simple: "grafana" },
  { key: "pagerduty", category: "observability", simple: "pagerduty" },
  { key: "sentry", category: "observability", simple: "sentry" },
  { key: "cloudflare", category: "vendor", simple: "cloudflare" },
  { key: "fastly", category: "vendor", simple: "fastly" },
  { key: "auth0", category: "vendor", simple: "auth0" },
  { key: "okta", category: "vendor", simple: "okta" },
  { key: "stripe", category: "vendor", simple: "stripe" },
  { key: "twilio", category: "vendor", simple: "twilio" },
  { key: "sendgrid", category: "vendor", simple: "sendgrid" },
  { key: "github", category: "vendor", simple: "github" },
  { key: "gitlab", category: "vendor", simple: "gitlab" },
  { key: "vercel", category: "vendor", simple: "vercel" },
  { key: "netlify", category: "vendor", simple: "netlify" },
  { key: "algolia", category: "vendor", simple: "algolia" },
  { key: "elastic", category: "observability", simple: "elastic", aliases: ["elasticsearch", "elasticstack"] },
  { key: "terraform", category: "vendor", simple: "terraform", aliases: ["tfe"] }
];
var norm = (s) => (s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
var BY_KEY = new Map(DATA_SYSTEMS.map((s) => [s.key, s]));
var LOOKUP = /* @__PURE__ */ new Map();
for (const s of DATA_SYSTEMS) if (!LOOKUP.has(norm(s.key))) LOOKUP.set(norm(s.key), s.key);
for (const s of DATA_SYSTEMS) for (const a of s.aliases ?? []) if (!LOOKUP.has(norm(a))) LOOKUP.set(norm(a), s.key);
function dataKeyFor(name) {
  if (!name) return void 0;
  return LOOKUP.get(norm(name));
}
function categoryForKey(key) {
  const sys = key ? BY_KEY.get(key) : void 0;
  return DATA_CATEGORIES[sys?.category ?? "table"];
}
function dataAccentForName(name) {
  const key = dataKeyFor(name);
  return categoryForKey(key).accent;
}
function allDataKeys() {
  return DATA_SYSTEMS.map((s) => s.key);
}
export {
  DATA_CATEGORIES,
  DATA_SYSTEMS,
  allDataKeys,
  categoryForKey,
  dataAccentForName,
  dataKeyFor
};
