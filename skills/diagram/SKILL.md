---
name: diagram
description: Render a Mermaid architecture-beta, erDiagram, flowchart, or stateDiagram-v2 file, or an IaC export (Terraform/Pulumi/Bicep ARM/CloudFormation), to an interactive HTML diagram.
disable-model-invocation: true
---

Render a cloud-architecture (`architecture-beta`), entity-relationship (`erDiagram`),
process/decision flowchart (`flowchart` / `graph`), or state-machine (`stateDiagram-v2`)
diagram to a self-contained, interactive HTML page using the bundled renderer.

Target: $ARGUMENTS

1. If `$ARGUMENTS` is empty, ask the user what to render — a `.mmd` file (Mermaid
   `architecture-beta`, `erDiagram`, `flowchart`/`graph`, **or** `stateDiagram-v2` — the
   type is auto-detected), an IaC export (Terraform `terraform show -json`, Pulumi
   `pulumi stack export`, ARM JSON from `az bicep build`, or a CloudFormation template in
   JSON or YAML), or a **directory** to scan as
   a codebase (recursively parses Terraform `.tf` source, surfacing third-party providers a
   state export may miss). They can also paste Mermaid to pipe via stdin. Give it a directory
   path the same way as a file. For an ER data model, the user can also just describe it (or
   share a screenshot) — write the `erDiagram` first (see the `er-diagram` skill), then
   render. For a process or decision flow, likewise describe it or share a sketch — write the
   `flowchart` first (see the `flowchart` skill), then render. For a state machine or
   lifecycle, the same — write the `stateDiagram-v2` first (see the `state-diagram` skill),
   then render.
2. Settle the display preferences. **If the user did not state them in their
   request, ask before rendering — do not default silently.** Ask both as one quick
   question: **theme** dark or light, and **node style** simple (icon) or card. (Node
   style has no effect on ER, flowchart, or state diagrams — those always draw their own
   notation — so for those just ask about the theme.)
   Map to flags: `--theme dark|light` (default dark) and `--simple` for simple nodes
   (default is card). If they say "you choose", use the default: dark + card.
3. Decide **where to save**. The default is the user's **Downloads** folder. If the
   user named a folder or a full path, use that instead (missing parent folders are
   created). Don't interrogate them — default to Downloads and mention they can choose
   another location.
4. Run the renderer (IaC JSON is auto-detected and converted first; defaults to
   dark + card, so add `--theme light` / `--simple` only if chosen). Omit `-o` to save
   to Downloads (the renderer names the file from the input, or add `--title "<name>"`);
   add `-o "<folder-or-path>"` for a chosen location:

   ```bash
   # default → ~/Downloads/<name>.html
   node "${CLAUDE_PLUGIN_ROOT}/server/deezle-infra-diagrams.mjs" $ARGUMENTS
   # or a chosen location (folder or full path)
   node "${CLAUDE_PLUGIN_ROOT}/server/deezle-infra-diagrams.mjs" $ARGUMENTS -o "<location>"
   ```

5. The renderer prints `✓ wrote <absolute path>`. Report that exact path and offer to
   open it. The page is interactive and fully self-contained — drag nodes, pan, zoom,
   minimap.
