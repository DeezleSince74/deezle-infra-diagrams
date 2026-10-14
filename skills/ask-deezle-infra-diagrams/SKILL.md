---
name: ask-deezle-infra-diagrams
description: Help & usage for the deezle-infra-diagrams plugin — author or import cloud architecture (incl. live Azure), ER data models, process/decision flowcharts, or state machines, and render interactive diagrams.
disable-model-invocation: true
---

The user wants help using the **deezle-infra-diagrams** plugin. Give a clear, friendly
answer in plain language. If they asked something specific below, focus on that; otherwise
give the short overview and then offer a next step.

Their question (optional): $ARGUMENTS

Use the reference below — it is accurate for this plugin; do not invent features. Keep the
reply concise and skimmable (headings or short bullets), not a wall of text.

## What it does

Turns a description or code into an **interactive, self-contained HTML diagram**. Three
diagram families, **auto-detected** from the input:

### Cloud architecture — Mermaid `architecture-beta`, AWS / Azure / GCP icons

Three ways to get architecture in:

1. **Author** — write Mermaid `architecture-beta` from the user's intent. The
   `architecture-beta` skill has the syntax, arrow semantics (`-->`, `<-->`, `--`), and
   the ~1,500 valid icon refs (read its `references/icons.md` before guessing a ref).
2. **Import IaC** — a Terraform (`terraform show -json`), Pulumi (`pulumi stack export`),
   Bicep/ARM (`az bicep build` → ARM JSON) export, or a CloudFormation template (JSON or
   YAML). Auto-detected and converted.
3. **Scan a codebase** — pass a **directory**; it recursively scans Terraform `.tf`
   source, surfacing third-party providers a state export might miss.

Resources are classified **first-party cloud** / **Marketplace SaaS** (cloud-billed,
publisher-hosted) / **third-party** (vendor providers like Datadog, Cloudflare) — the
last two get a distinct dashed "external" badge.

**Official vendor icons.** If this plugin has an `/import-icons` skill, it ships open
icons, and the user can switch to the official ones: they download a set from
[AWS](https://aws.amazon.com/architecture/icons/),
[Azure](https://learn.microsoft.com/en-us/azure/architecture/icons/) or
[Google Cloud](https://cloud.google.com/icons), unzip it, and run `/import-icons <folder>`.
The icons stay on their computer under the vendor's own terms. Without that skill, the
official icons are already built in.

### Entity-Relationship / data models — Mermaid `erDiagram`

Database **tables** — columns with **PK / FK / UK** key badges and **crow's-foot**
cardinality relationships — or data-platform **systems** badged with real **CRM / ERP /
warehouse / lakehouse / BI** logos (Salesforce, Snowflake, dbt, HubSpot, BigQuery, …).
Input can be `erDiagram` syntax **or prose or a screenshot**: describe the model or share
an image and Claude writes the `erDiagram`, guided by the **`er-diagram` skill** (its
`references/systems.md` lists the system-icon keys). Rendered by the same `/diagram`
command and MCP tool — the diagram type is detected automatically.

### Process & decision flows — Mermaid `flowchart` / `graph`

Flowcharts with **shaped nodes** — process boxes, decision diamonds, start/end
terminators, datastore cylinders, I/O parallelograms, hexagons, subroutines — joined by
**directional, dotted, and thick** links with edge labels, and optional **subgraph**
groupings. Supports all Mermaid flow directions (`TD`/`TB`/`BT`/`LR`/`RL`). Input can be
`flowchart` syntax **or prose, pseudocode, or a screenshot**: describe the process or share
a sketch and Claude writes the `flowchart`, guided by the **`flowchart` skill** (its
`references/shapes.md` lists every node shape and its meaning). Rendered by the same
`/diagram` command and MCP tool — the diagram type is detected automatically.

### State machines & lifecycles — Mermaid `stateDiagram-v2`

The states a thing can be in and the transitions between them: rounded **state boxes**, a
filled **start** dot and a **bullseye end**, **choice** diamonds for branches, **fork/join**
bars for parallel work, **composite states** that nest a whole phase inside one container,
and **notes**. Transition labels name the event that causes the move. Supports all flow
directions (`TB`/`BT`/`LR`/`RL`). Input can be `stateDiagram-v2` syntax **or prose, a status
enum, or a screenshot**: describe the lifecycle or share a sketch and Claude writes the
`stateDiagram-v2`, guided by the **`state-diagram` skill**. Rendered by the same `/diagram`
command and MCP tool — the diagram type is detected automatically.

## Render it

- **`/diagram <file>`** — render a `.mmd` file or an IaC JSON export.
- **`render_architecture` MCP tool** — renders an interactive widget inline in chat; pass
  `outputPath` to also write a self-contained HTML file (e.g. for GitHub Copilot, which
  has no inline-widget surface).
- **CLI** — `node "${CLAUDE_PLUGIN_ROOT}/server/deezle-infra-diagrams.mjs" <input>`.

**Where files go:** by default the saved page lands in the user's **Downloads** folder.
Choose another spot with `-o "<folder-or-path>"` (CLI) or by passing a directory/full
path as `outputPath` (MCP); missing parent folders are created. `-o -` streams to stdout.
Every output is fully self-contained (no network) and opens in any browser.

## In the rendered page

A top toolbar: **Group by** Infrastructure / Function, a **dark / light** toggle, a
**view/copy Mermaid source** button, and **PNG / SVG** export. A sticky **resource
finder** (top-left) searches/filters every
service by name or type; clicking a result centers + 2× zooms onto it and lights it up.
Grab anywhere on the canvas to **pan**; move a group only by its **⠿ label**; drag
individual nodes, resize groups by their edges, and hover a node or a connector to
**trace its flow**.

**Right-click menus:** right-click a **relationship line** (ER) to switch its notation
between **crow's-foot** and a **directional arrow** — for that one line or all of them;
right-click the **empty canvas** to **select all nodes** (then drag to move them together)
or **toggle all connectors** (ER). Notation choices survive dark ↔ light toggles.

## Look — ask the user if they haven't said

- **Theme:** dark or light. **Node style:** simple (icon + label) or card
  (icon · provider·service · name).
- Map to: MCP `theme` / `style`; CLI `--theme dark|light` / `--simple`. Default: dark + card.

## Diagram what's running in your cloud

If the user works with a cloud's CLI, the plugin can draw what's actually deployed, not just
template files. The user exports it with the CLI they already use and are signed in to; the
plugin only reads the file it produces and never calls a cloud. The user runs these commands
themselves. Never run a sign-in for them.

| Cloud | Export command | Then |
| --- | --- | --- |
| Azure | `az group export --name <RESOURCE_GROUP> > azure-rg.json` (needs at least the Reader role on that group) | `/diagram azure-rg.json` |
| Google Cloud | `gcloud beta resource-config bulk-export --project=<PROJECT_ID> --resource-format=terraform --path=gcp-export` | `/diagram gcp-export` |
| AWS | Build a template with the CloudFormation IaC generator, then `aws cloudformation get-generated-template --generated-template-name <NAME> --format JSON --query TemplateBody --output text > aws.json` | `/diagram aws.json` |

Notes: Azure exports one resource group at a time. The Google Cloud export is a preview
feature: it needs the Config Connector component (`gcloud components install
config-connector`) and the Cloud Asset API, and doesn't run on Windows. AWS users who manage
infrastructure with Terraform, Pulumi or CloudFormation templates can also render those
directly (`terraform show -json`, `pulumi stack export`, or the template file).

---

After the relevant help, offer to do the next concrete thing for them — author a diagram
from a description, render a file they name, or walk through exporting from their cloud's CLI.
