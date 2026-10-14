# Changelog

All notable changes to deezle-infra-diagrams. Versions follow [Semantic Versioning](https://semver.org).

## 1.0.1 — 2026-10

- **CloudFormation.** Render AWS CloudFormation templates in JSON or YAML, including CDK output and templates from the CloudFormation IaC generator. `DependsOn`, `Ref`, `Fn::GetAtt` and `Fn::Sub` references become lines; short-form YAML tags such as `!Ref` are read.
- **Diagram what's running in your cloud.** The docs and skills now show how to export from the Azure, Google Cloud or AWS command-line tool you already use, then render the file. You run the export with your own sign-in; the plugin only reads the file and never calls a cloud.

## 1.0.0 — 2026-10

First public release, and the first listed in the Anthropic plugin directory.

- **Directory build.** The public plugin ships the redistributable icon set (Simple Icons and Lucide) under the name `deezle-infra-diagrams`. The official AWS, Azure and Google Cloud packs stay out of the public build until their licenses allow it.
- **Bring your own vendor icons ("fancy mode").** Download the official AWS, Azure or Google Cloud icon set from the vendor, then run `/import-icons <folder>` (or the `import_icons` tool). The plugin maps the icons to the names Claude writes and uses them in new diagrams. It reads only the folder you name, saves to `~/.deezle-infra-diagrams/icons`, and never downloads anything itself. `/import-icons remove` undoes it.
- **Safer file output.** `render_architecture` and the CLI always write a file ending in `.html`, and refuse to replace an existing file they did not write. Re-rendering into one of their own pages still works.
- **Move a line's ends.** Drag either end of a line onto another side of a node, or onto a different node. Right-click a moved line to reset it, or the background to reset them all.
- **Tool annotations.** `render_architecture` now declares a title and read/write hints.
- **One version number.** The server, manifests and package all report 1.0.0, and a test fails if they drift.
- **Docs.** Added privacy, security and troubleshooting notes, and example prompts.

## 0.20.2

- The two slash commands became skills (`/diagram`, `/ask-deezle-infra-diagrams`).

## 0.20.1

- Moved the Claude plugin bundles from `bin/` to `server/`.

## 0.20.0

- State diagrams (Mermaid `stateDiagram-v2`).

## 0.19.0

- Card style for flowchart nodes.

## 0.18.0 – 0.18.1

- Flowcharts (Mermaid `flowchart` / `graph`), then fixes to front-matter titles and loop layout.
