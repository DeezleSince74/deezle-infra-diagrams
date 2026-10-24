// scripts/lib/importIconsCli.ts
import { describeImport, describeStatus, importIcons, localIconsStatus, removeLocalIcons } from "./localIcons.mjs";
async function runImportIcons(argv) {
  if (false) {
    console.log("This build already includes the official AWS, Azure and Google Cloud icons.");
    return;
  }
  if (argv.includes("--remove")) {
    const removed = removeLocalIcons();
    console.log(removed.length ? `Removed your imported icons (${removed.join(", ")}). Diagrams use the open icons again.` : "No imported icons to remove.");
    return;
  }
  const pi = argv.indexOf("--provider");
  const provider = pi >= 0 ? argv[pi + 1] : void 0;
  if (provider && provider !== "aws" && provider !== "azure" && provider !== "gcp") {
    throw new Error("--provider must be aws, azure or gcp.");
  }
  const folder = argv.find((a, i) => !a.startsWith("-") && argv[i - 1] !== "--provider");
  if (!folder || argv.includes("--status")) {
    console.log(describeStatus(localIconsStatus()));
    if (!folder) console.log("\nUsage: import-icons <unzipped folder> [--provider aws|azure|gcp] | --status | --remove");
    return;
  }
  console.log(describeImport(importIcons(folder, void 0, provider)));
}
export {
  runImportIcons
};
