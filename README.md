# deezle-infra-diagrams

Turn a description of a system into a diagram you can drag around. Ask Claude for a cloud
architecture, a data model, a flowchart or a state machine. Claude writes it in
[Mermaid](https://mermaid.js.org) and this plugin draws it as an interactive diagram: drag
nodes and line ends, pan and zoom, switch dark and light themes, search for a node, and export PNG or SVG.

## What you get

- **Skills** that teach Claude to write correct Mermaid for four kinds of diagram:
  - `architecture-beta` — cloud architecture, with about 1,500 icon names for AWS, Azure
    and Google Cloud services plus common third-party tools.
  - `er-diagram` — data models with tables, keys and crow's-foot relationships.
  - `flowchart` — process and decision flows with shaped nodes.
  - `state-diagram` — state machines and lifecycles.
- **A tool, `render_architecture`,** that draws the diagram inline in the conversation and
  can also save it as one self-contained `.html` file that works offline.
- **`/diagram <file>`** to render a `.mmd` file, a Terraform, Pulumi or Bicep (ARM) export,
  or a folder of Terraform files.
- **`/import-icons <folder>`** to use the official AWS, Azure or Google Cloud icons you
  downloaded yourself (see [Official cloud icons](#official-cloud-icons)).
- **`/ask-deezle-infra-diagrams`** for help and examples.

## Install

Find **deezle-infra-diagrams** in the plugin directory, or run:

```
/plugin marketplace add DeezleSince74/deezle-infra-diagrams
/plugin install deezle-infra-diagrams@deezle-infra-diagrams
```

You need Node.js 22 or newer on your `PATH`. Nothing else installs: the renderer ships as
one file in `server/`.

## Try these prompts

1. "Draw the architecture of a web app on AWS: CloudFront in front of an S3 site, API
   Gateway calling Lambda, and DynamoDB for storage."
2. "Make an ER diagram for a library: members, books, copies and loans, with keys."
3. "Flowchart our refund process: request, check the order date, approve or send to a
   manager, then pay out."
4. "Draw the states of a support ticket from open to closed, including reopen."
5. "/diagram ./infra" — render a folder of Terraform files.

In Claude Code, add "save it to ./diagrams/" to get an `.html` file you can open in a browser.

## What it does on your computer

- **Runs locally, offline.** The server makes no network requests and sends no telemetry.
- **Writes only when asked.** A diagram file is written only when you ask to save one. It
  always ends in `.html`, and the plugin never replaces a file it did not write. Importing
  icons writes only to `~/.deezle-infra-diagrams/icons`.
- **Reads only what you name.** `/diagram` and `/import-icons` read the file or folder you
  give them.
- **No sign-in.** It asks for no accounts and reads no environment variables.
- To diagram live Azure resources, Claude may suggest you run `az group export` yourself.
  That uses your own Azure sign-in; the plugin never runs it.

See [PRIVACY.md](PRIVACY.md) and [SECURITY.md](SECURITY.md).

## Where it works

Claude Code, and Cowork sessions running on your computer. The diagram appears inline
where the app can show interactive tool results. Where it can't (for example the Claude
Code terminal), ask Claude to save the diagram and open the `.html` file.

## Troubleshooting

- **No diagram appears in the chat.** Your app may not show interactive results yet. Ask
  Claude to save the diagram to a file, then open it in a browser.
- **"Refusing to overwrite …".** A file with that name already exists and this plugin
  didn't make it. Pick another name or folder.
- **The server doesn't start.** Run `node --version`. You need 22 or newer.
- **A service has the wrong icon or a generic one.** The icon name wasn't recognized. Ask Claude to check
  the name against the `architecture-beta` skill's icon list.
- **The layout looks crowded.** Ask for groups (`group`) around related services, or split
  a big diagram into two.

## Official cloud icons

The plugin ships open icons only. To draw AWS, Azure and Google Cloud services with their
official icons, download a set from the vendor and import it:

1. Download a set: [AWS](https://aws.amazon.com/architecture/icons/),
   [Azure](https://learn.microsoft.com/en-us/azure/architecture/icons/) or
   [Google Cloud](https://cloud.google.com/icons).
2. Unzip it.
3. Run `/import-icons ~/Downloads/<unzipped folder>`.

New diagrams then use those icons for matching services; everything else keeps the open
icons. The icons stay on your computer, and each vendor's own terms cover how you use them.
`/import-icons status` shows what is imported, and `/import-icons remove` removes it. If the
importer can't tell which vendor a folder is from, Claude asks and passes `--provider`.

## Icons and licenses

The plugin code is MIT licensed ([LICENSE](LICENSE)). Icons come from
[Simple Icons](https://simpleicons.org) (CC0), the Iconify `logos` set (CC0) and
[Lucide](https://lucide.dev) (ISC). AWS, Azure and Google Cloud services are drawn with
these open icons, not the vendors' official packs, unless you import those yourself. Brand names and logos belong to their
owners and are used only to name the services. See [ATTRIBUTION.md](ATTRIBUTION.md).

## Support

Open an issue at
[github.com/DeezleSince74/deezle-infra-diagrams/issues](https://github.com/DeezleSince74/deezle-infra-diagrams/issues).
Changes are listed in [CHANGELOG.md](CHANGELOG.md).
