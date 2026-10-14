---
name: architecture-beta
description: >-
  Author Mermaid architecture-beta cloud-infrastructure diagrams with valid
  AWS/Azure/GCP icon refs, and render them (or a Terraform/Pulumi/Bicep/CloudFormation export)
  to an interactive HTML diagram. Use when the user wants to draw or diagram
  cloud architecture, sketch an AWS/Azure/GCP system, or turn infrastructure-as-code
  into a picture.
---

# Cloud architecture diagrams (Mermaid architecture-beta)

Help the user produce a cloud-infrastructure diagram. There are two paths:

1. **Author from intent** — write `architecture-beta` source yourself, then render it.
2. **From IaC** — render a Terraform / Pulumi / Bicep (ARM) / CloudFormation (JSON or YAML)
   export directly. To diagram what's **already running** in a cloud, the user exports it
   with the cloud CLI they already use and are signed in to, then you render the file:
   - **Azure CLI:** `az group export --name <rg> > rg.json` (an ARM template).
   - **Google Cloud CLI:** `gcloud beta resource-config bulk-export --project=<id>
     --resource-format=terraform --path=gcp-export` (a folder of `.tf` files; a preview
     feature that needs the Config Connector component and the Cloud Asset API).
   - **AWS CLI:** build a template with the CloudFormation IaC generator, then
     `aws cloudformation get-generated-template --generated-template-name <name>
     --format JSON --query TemplateBody --output text > aws.json`.
   The user runs these themselves; never run a sign-in for them. The plugin only reads
   the file and never calls a cloud.
3. **Scan a codebase** — point the renderer at a **directory** and it recursively scans
   Terraform `.tf` source (skipping `.terraform/`, `node_modules`, etc.), surfacing every
   declared resource — including **third-party** providers (Datadog, Cloudflare, …) a
   state export might miss. Third-party vendor resources render with a distinct
   "Third-party · external" badge, separate from cloud **Marketplace SaaS**.

Both render to a self-contained, interactive React Flow HTML page via the bundled
renderer — React + React Flow are inlined, so it works offline and inside the inline
widget (no CDN). A **unified toolbar** at the top controls everything live: switch
**Group by: Infrastructure / Function**, toggle **dark / light** theme, **view/copy the
Mermaid source**, and **export to PNG/SVG**. A sticky **resource finder** (top-left)
searches/filters all services by name or type; clicking one centers + 2× zooms onto it. Write your groups as the infra containers (VPC / subnet / resource-group /
AZ); the page also offers an auto view grouped by service type (Compute, Database,
Storage, …) — so author the infra grouping and the function view comes free. (Drag,
pan/zoom, and a minimap round it out.)

## Style & theme — ask the user first

Two choices change how the diagram looks. **If the user hasn't already told you
which they want, ask before rendering — do not silently pick a default.** Put it as
one quick question (e.g. a multiple-choice prompt) covering both:

- **Theme** — **dark** or **light**. (`auto` follows the host/OS — use it only if
  the user explicitly wants the diagram to match their system.)
- **Node style** — **simple** (the official icon with a label underneath) or
  **card** (a card showing the icon, a `provider · service` type label, and the name).

Only skip a choice the user already stated (e.g. they said "dark mode" or "use
cards"). If they reply "you choose" / "don't care", use the default: **dark + card**.

Map the answers to:

- **MCP tool** `render_architecture`: `theme: "dark"|"light"`, `style: "icon"|"card"` (simple → `icon`). Omitting either defaults to dark / card.
- **CLI**: `--theme dark|light` (default dark) and `--simple` for simple nodes (default is card).

## Syntax

```
architecture-beta
    group <id>(<icon>)[<Title>]                  group (container); nest with: ... in <parentId>
    service <id>(<icon>)[<Title>] in <groupId>   node with an icon
    service <id>[<Title>]                         no icon → renders as a labeled box
    <id>:<Side> <arrow> <Side>:<id>               edge; Side = L|R|T|B
    <id>:R -[label]-> L:<id>                       edge with a label (label goes inside the dashes)
```

- Arrows — **pick the one that matches the relationship** (the renderer draws each faithfully):
  - `-->` directional flow or dependency — "calls", "writes to", "routes to", "reads from". The common case.
  - `<-->` mutual / bidirectional — replication, two-way sync, network peering, request+response you want shown both ways.
  - `--` a non-directional **association** (membership, trust, co-location) — drawn as a plain line, no arrowheads.
  - `<--` reverses a single arrow (arrowhead at the source).
  Don't default everything to `-->`; use `<-->` and `--` where they're more accurate.
- The `L/R/T/B` side letters control which side a connector attaches to — use them deliberately.
- Ids are short `[A-Za-z0-9_]`. Titles go in `[square brackets]`.

## Icon refs

Every `service`/`group` icon is a `provider:name` ref. Providers: `aws`, `azure`,
`gcp`, `generic`. Use ONLY refs that exist — do not invent names. Casing, aliases,
and near-misses are tolerated, and an unknown/typo ref renders as a labeled box.

Common refs:

- AWS: `aws:amazon-ec2`, `aws:aws-lambda`, `aws:amazon-rds`, `aws:amazon-dynamodb`,
  `aws:amazon-simple-storage-service` (alias `aws:s3`), `aws:amazon-cloudfront`,
  `aws:amazon-api-gateway`, `aws:amazon-route-53`, `aws:elastic-load-balancing`,
  `aws:amazon-virtual-private-cloud` (alias `aws:vpc`), `aws:amazon-elastic-kubernetes-service`.
- Azure: `azure:virtual-machine`, `azure:app-services`, `azure:function-apps`,
  `azure:kubernetes-services` (alias `azure:aks`), `azure:storage-accounts`,
  `azure:azure-cosmos-db`, `azure:azure-sql`, `azure:key-vaults`, `azure:load-balancers`.
- GCP: `gcp:compute-engine`, `gcp:cloud-run`, `gcp:gke`, `gcp:cloud-storage`,
  `gcp:cloud-sql`, `gcp:big-query`.
- Generic fallback: `generic:cloud`, `generic:database`, `generic:server`,
  `generic:disk`, `generic:internet`, `generic:marketplace`.

**External services — two distinct kinds** (both drawn with a dashed "external" badge):

- **Marketplace SaaS** — bought through a *cloud* marketplace. Use `azure:marketplace` /
  `aws:marketplace` / `gcp:marketplace` (or `generic:marketplace`). IaC imports map the
  SaaS namespace (`Microsoft.SaaS/resources`) automatically, with a publisher/offer label.
- **Third-party** — managed via a vendor's own provider (Datadog, Cloudflare, PagerDuty,
  Snowflake, …), not the cloud marketplace. Use `generic:thirdparty`. IaC imports detect
  known vendor prefixes automatically and tag the label with the vendor.

**For the full ~1,500-ref list, read `references/icons.md` in this skill folder**
before emitting refs you're unsure about.

## Rendering — three ways

Pick the one that fits the surface:

1. **Inline interactive widget (preferred in a chat).** Call the
   `render_architecture` MCP tool (from this plugin's bundled server) with the
   `architecture-beta` source — it renders a draggable, zoomable diagram inline in
   the conversation. Best when the user just wants to *see* it.

2. **Artifact (claude.ai / Claude Desktop).** Produce the standalone HTML (below)
   and present its contents as an HTML artifact, so it renders in the artifact pane.
   The page is self-contained React Flow and is artifact-ready.

3. **Standalone HTML file (any surface).** Run the bundled renderer:

   ```bash
   node "${CLAUDE_PLUGIN_ROOT}/server/deezle-infra-diagrams.mjs" <input>          # → ~/Downloads
   node "${CLAUDE_PLUGIN_ROOT}/server/deezle-infra-diagrams.mjs" <input> -o "<location>"
   ```

   `<input>` is a `.mmd` file, a Terraform `terraform show -json` / Pulumi
   `pulumi stack export` / ARM (from `az bicep build`) JSON export, a CloudFormation
   template (JSON or YAML), or omit it to pipe `architecture-beta` on stdin. IaC input is
   auto-detected and converted first.
   **Output saves to the user's Downloads folder by default** (filename from the input
   or `--title`); add `-o "<folder-or-path>"` for a chosen location (parents are
   created), or `-o -` to stream to stdout. Defaults to **dark + card**; add
   `--theme light` and/or `--simple` to change them. The page is fully self-contained
   (no network). The renderer prints the absolute saved path — report it and offer to
   open it.

## Example

```
architecture-beta
    group net(aws:amazon-virtual-private-cloud)[VPC]
    service web(aws:amazon-ec2)[Web] in net
    service db(aws:amazon-rds)[Database] in net
    service files(aws:s3)[Object Store]
    web:R -[queries]-> L:db
    web:R --> L:files
```
