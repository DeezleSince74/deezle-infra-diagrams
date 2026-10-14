# Data-platform system keys

Use these slugs in a `%% system: <ENTITY> <slug>` directive to badge an ER entity with a
logo. Matching is case-insensitive and accepts the aliases shown. Systems without a
redistributable logo fall back to their category glyph (never blank).

## CRM

- `salesforce` — also: `sfdc`, `sales-force`
- `hubspot`
- `dynamics365` — also: `dynamics`, `msdynamics`, `dynamics-365`
- `zoho`
- `gong` — also: `gongio`
- `zendesk`
- `intercom`
- `pipedrive`
- `freshworks` — also: `freshsales`, `freshdesk`

## ERP

- `sap`
- `netsuite`
- `odoo`
- `workday`
- `sage`
- `infor`

## Data warehouse

- `snowflake`
- `bigquery`
- `redshift` — also: `aws-redshift`, `awsredshift`
- `synapse` — also: `azure-synapse`, `azuresynapse`
- `fabric`
- `teradata`
- `clickhouse`
- `firebolt`

## Lakehouse

- `databricks`
- `trino` — also: `presto`
- `starburst` — also: `starburstdata`
- `iceberg` — also: `apacheiceberg`
- `delta` — also: `delta-lake`, `deltalake`
- `hudi` — also: `apache-hudi`, `apachehudi`
- `dremio`

## Data integration

- `dbt` — also: `getdbt`, `dbt-labs`
- `fivetran`
- `airbyte`
- `airflow` — also: `apacheairflow`
- `dagster`
- `prefect`
- `matillion`
- `talend`
- `informatica`
- `nifi` — also: `apache-nifi`, `apachenifi`
- `meltano`

## BI & analytics

- `tableau`
- `powerbi` — also: `power-bi`
- `looker`
- `qlik`
- `metabase`
- `superset`
- `mode`

## Database

- `postgres` — also: `postgresql`, `postgre`
- `mysql`
- `mariadb`
- `mongodb` — also: `mongo`
- `sqlserver` — also: `mssql`, `sql-server`
- `oracle` — also: `oracledb`
- `sqlite`
- `cassandra`
- `redis`
- `neo4j`
- `duckdb`
- `cockroachdb` — also: `cockroach`, `cockroachlabs`
- `couchbase`
- `influxdb`
- `supabase`
- `dynamodb` — also: `aws-dynamodb`
- `cosmosdb` — also: `cosmos`, `azurecosmosdb`
- `planetscale`

## Streaming

- `kafka` — also: `apache-kafka`, `apachekafka`
- `pulsar` — also: `apache-pulsar`, `apachepulsar`
- `flink` — also: `apache-flink`, `apacheflink`
- `confluent`
- `kinesis` — also: `aws-kinesis`, `amazonkinesis`
- `redpanda`

## Observability

- `datadog`
- `newrelic` — also: `new-relic`
- `grafana`
- `pagerduty`
- `sentry`
- `elastic` — also: `elasticsearch`, `elasticstack`

## Third-party

- `cloudflare`
- `fastly`
- `auth0`
- `okta`
- `stripe`
- `twilio`
- `sendgrid`
- `github`
- `gitlab`
- `vercel`
- `netlify`
- `algolia`
- `terraform` — also: `tfe`

> Have an official logo you hold the rights to? Drop `icons/data-overrides/<slug>.svg`
> into the repo and re-run `npm run build:data-icons` — it takes precedence over the
> bundled CC0 sources.
