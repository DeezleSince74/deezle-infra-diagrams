// scripts/plugin-entry.ts
import { runCli } from "./lib/cli.mjs";
import { runServer } from "./lib/mcp.mjs";
import { runImportIcons } from "./lib/importIconsCli.mjs";
import { loadLocalIcons } from "./lib/localIcons.mjs";
var argv = process.argv.slice(2);
if (true) loadLocalIcons();
var run = argv[0] === "mcp" ? runServer() : argv[0] === "import-icons" ? runImportIcons(argv.slice(1)) : runCli(argv);
run.catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
