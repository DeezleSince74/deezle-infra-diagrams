# Security

## Reporting a problem

Please report security problems privately through GitHub's
[private vulnerability reporting](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability)
on this repository (Security tab → Report a vulnerability). Please don't open a public issue
for a security problem. You can expect a first reply within 7 days.

## What the plugin can do on your computer

- **It runs locally.** The MCP (Model Context Protocol) server is one JavaScript file,
  started with `node`. It makes no network requests and sends no telemetry.
- **It writes files only when asked.** `render_architecture` writes a file only when it is
  given `outputPath`, and the CLI writes one per run. Every file ends in `.html`. An
  existing file is replaced only if this plugin wrote it; anything else is left alone and
  the call fails with an error.
- **It reads only what you point it at.** The CLI reads the diagram or Infrastructure-as-Code
  file (or folder of Terraform files) named on its command line.
- **Imported icons stay inert.** `import_icons` (and `/import-icons`) reads the vendor icon
  folder you name, removes scripts, embedded web content, event handlers and outside links
  from each SVG, and writes the result only to `~/.deezle-infra-diagrams/icons`. It never
  replaces a file there it did not write, and removing the icons deletes only its own files.
  Icons are drawn as images, so SVG code would not run in any case.
- **It needs no sign-in.** It reads no environment variables and asks for no account details.

The skills may suggest commands you run yourself, such as `az group export` to export
Azure resources. Those commands use your own Azure sign-in and are never run by the server.
