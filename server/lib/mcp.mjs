// scripts/lib/mcp.ts
import { McpServer } from "../vendor/@modelcontextprotocol/sdk/dist/esm/server/mcp.mjs";
import { StdioServerTransport } from "../vendor/@modelcontextprotocol/sdk/dist/esm/server/stdio.mjs";
import { registerAppResource, registerAppTool, RESOURCE_MIME_TYPE } from "./appRegistration.mjs";
import { z } from "../vendor/zod/index.mjs";
import { EXT_APPS_PLACEHOLDER, RF_BUNDLE_PLACEHOLDER, buildWidgetPayload, widgetHtml } from "../src/export/widget.mjs";
import { renderDiagramHtml } from "../src/export/html.mjs";
import { resolveOutputPath, htmlFilename, writeDiagramFile } from "./output.mjs";
import { VERSION } from "./version.mjs";
import { VENDOR_PAGES, describeImport, describeStatus, importIcons, loadLocalIcons, localIconsStatus, refreshLocalIcons, removeLocalIcons } from "./localIcons.mjs";
import { toViews } from "./cli.mjs";
import { EXT_APPS_BUNDLE } from "./extapps-bundle.generated.mjs";
import { RF_BUNDLE } from "./rf-bundle.generated.mjs";
var WIDGET_URI = "ui://widgets/architecture.html";
var WIDGET_HTML = widgetHtml({}).replace(EXT_APPS_PLACEHOLDER, () => EXT_APPS_BUNDLE).replace(RF_BUNDLE_PLACEHOLDER, () => RF_BUNDLE);
async function runServer() {
  const serverName = true ? "deezle-infra-diagrams-generic" : "deezle-infra-diagrams";
  const server = new McpServer({ name: serverName, version: VERSION });
  registerAppTool(
    server,
    "render_architecture",
    {
      title: "Render diagram",
      // One sentence per line keeps the shipped file free of very long lines.
      description: [
        "Render an interactive diagram widget (draggable nodes, real icons, pan/zoom).",
        "Input is auto-detected: Mermaid architecture-beta (cloud architecture),",
        "a Mermaid erDiagram (entity-relationship / data model \u2014 rendered as tables with crow's-foot relationships and CRM/ERP/warehouse/lakehouse system logos),",
        "a Mermaid flowchart/graph (process & decision flow \u2014 rendered with shaped nodes: process boxes, decision diamonds, datastores, terminators, plus directional/dotted/thick links),",
        "a Mermaid stateDiagram-v2 (state machine / lifecycle \u2014 rendered with state boxes, start and end terminals, choice diamonds, fork/join bars, composite states, and notes),",
        "or a Terraform/Pulumi/Bicep(ARM) JSON export or AWS CloudFormation template (JSON or YAML).",
        "For prose or a screenshot, first author the appropriate Mermaid source, then call this.",
        "Before calling, if the user has not specified the theme (dark/light) or node style (simple/card), ASK them \u2014 do not silently default.",
        "On hosts that cannot render the inline widget (e.g. GitHub Copilot), pass `outputPath` to get a self-contained interactive HTML file written to the workspace instead."
      ].join(" "),
      inputSchema: {
        source: z.string().describe("Mermaid architecture-beta text, a Mermaid erDiagram, a Mermaid flowchart/graph, a Mermaid stateDiagram-v2, an IaC JSON export, or a CloudFormation template (JSON or YAML)"),
        style: z.enum(["icon", "card"]).optional().describe('Node style: "icon" (simple: icon + label) or "card" (icon \xB7 provider\xB7service \xB7 name). Architecture diagrams only \u2014 ER, flowchart, and state diagrams always draw their own notation. Ask the user if they have not said which they want.'),
        theme: z.enum(["dark", "light", "auto"]).optional().describe('Color theme: "dark" or "light". Ask the user if they have not said which they want; "auto" follows the host.'),
        outputPath: z.string().optional().describe(`If set, ALSO write the diagram as a self-contained, fully offline interactive HTML file and return the saved path. A bare filename (e.g. "architecture.html") is saved to the user's Downloads folder by default; pass a directory or full path to drop it elsewhere (parent folders are created). The file always ends in .html, and an existing file is only replaced if this tool wrote it. Use this on hosts without an inline-widget surface (e.g. GitHub Copilot); the user opens the file in a browser.`)
      },
      // Writes a file only when outputPath is set, and never replaces a file it did not write.
      annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: true, openWorldHint: false },
      _meta: { ui: { resourceUri: WIDGET_URI } }
    },
    async ({ source, style, theme, outputPath }) => {
      if (true) refreshLocalIcons();
      const cards = style !== "icon";
      const { views, mmd, kind, title } = await toViews(source, cards ? "card" : "icon");
      const opts = { theme: theme ?? "dark", style: cards ? "card" : "simple", source: mmd, kind };
      const payload = buildWidgetPayload(views, opts);
      const nEdges = payload.views.infra.edges.length;
      let summary = kind === "er" ? `Rendered ER diagram: ${views.infra.services.length} entities, ${nEdges} relationships.` : kind === "flowchart" ? `Rendered flowchart: ${views.infra.services.length} nodes, ${views.infra.groups.length} subgraphs, ${nEdges} links.` : kind === "state" ? `Rendered state diagram: ${views.infra.services.length} states, ${views.infra.groups.length} composite states, ${nEdges} transitions.` : `Rendered diagram: ${views.infra.services.length} services, ${views.infra.groups.length} groups, ${nEdges} connectors.`;
      if (outputPath) {
        const html = renderDiagramHtml(views, { ...opts, title }).replace(RF_BUNDLE_PLACEHOLDER, () => RF_BUNDLE);
        const target = resolveOutputPath(outputPath, htmlFilename(title ?? "architecture-diagram"));
        writeDiagramFile(target, html);
        summary += ` Wrote a self-contained, offline-interactive HTML page to ${target} \u2014 open it in a browser.`;
      }
      return {
        // Summary first (graceful degradation); the widget scans for the JSON payload.
        content: [
          { type: "text", text: summary },
          { type: "text", text: JSON.stringify(payload) }
        ]
      };
    }
  );
  if (true) {
    server.registerTool(
      "import_icons",
      {
        title: "Import vendor icons",
        description: `Use the official AWS, Azure or Google Cloud icons in diagrams ("fancy mode"). The user downloads a set from the vendor (AWS: ${VENDOR_PAGES.aws.url} \xB7 Azure: ${VENDOR_PAGES.azure.url} \xB7 Google Cloud: ${VENDOR_PAGES.gcp.url}), unzips it, and gives you the folder. This tool reads only that folder and saves the icons under ~/.deezle-infra-diagrams/icons on this computer; it makes no network requests. action "status" (default) reports what is imported, "import" needs folder, "remove" deletes only the files this tool wrote.`,
        inputSchema: {
          action: z.enum(["status", "import", "remove"]).optional().describe('"status" (default), "import" (needs folder), or "remove".'),
          folder: z.string().optional().describe('The unzipped vendor icon folder, e.g. ~/Downloads/Azure_Public_Service_Icons. Required for "import".'),
          provider: z.enum(["aws", "azure", "gcp"]).optional().describe("Which vendor the icons are from. Only needed when the folder names do not say AWS, Azure or Google.")
        },
        annotations: { readOnlyHint: false, destructiveHint: true, idempotentHint: true, openWorldHint: false }
      },
      async ({ action, folder, provider }) => {
        let text;
        try {
          if (action === "remove") {
            const removed = removeLocalIcons();
            text = removed.length ? "Removed the imported icons. Diagrams use the open icons again." : "No imported icons to remove.";
          } else if (action === "import") {
            if (!folder) throw new Error("Pass the unzipped vendor icon folder as `folder`.");
            text = describeImport(importIcons(folder, void 0, provider));
          } else {
            text = describeStatus(loadLocalIcons() ?? localIconsStatus());
          }
        } catch (err) {
          return { isError: true, content: [{ type: "text", text: err instanceof Error ? err.message : String(err) }] };
        }
        return { content: [{ type: "text", text }] };
      }
    );
  }
  registerAppResource(server, "Architecture diagram", WIDGET_URI, {}, async () => ({
    contents: [{ uri: WIDGET_URI, mimeType: RESOURCE_MIME_TYPE, text: WIDGET_HTML }]
  }));
  await server.connect(new StdioServerTransport());
}
export {
  runServer
};
