---
name: import-icons
description: Use the official AWS, Azure or Google Cloud icons in diagrams ("fancy mode") by importing a vendor icon set the user downloaded. Also reports or removes imported icons.
disable-model-invocation: true
---

The user wants diagrams drawn with the official cloud icons. This plugin ships open icons
only. The user downloads each vendor's set themselves, and this command turns it into icons
the plugin uses. Everything stays on their computer: the command reads the folder they name
and writes to `~/.deezle-infra-diagrams/icons`. It makes no network requests.

Request: $ARGUMENTS

1. If `$ARGUMENTS` says "status", or is empty, run:

   ```bash
   node "${CLAUDE_PLUGIN_ROOT}/server/deezle-infra-diagrams.mjs" import-icons --status
   ```

   Show the result. If nothing is imported, give the download pages below and stop.

2. If `$ARGUMENTS` says "remove", run it with `--remove` and show the result. This deletes
   only the files the plugin wrote.

3. Otherwise `$ARGUMENTS` is a folder. Help the user get it ready if they haven't:
   - **AWS:** https://aws.amazon.com/architecture/icons/ (the icon package zip)
   - **Azure:** https://learn.microsoft.com/en-us/azure/architecture/icons/ (accept the
     icon terms, then "Download SVG icons")
   - **Google Cloud:** https://cloud.google.com/icons

   They unzip the download and give you the folder. Several vendors can sit in one parent
   folder. Then run:

   ```bash
   node "${CLAUDE_PLUGIN_ROOT}/server/deezle-infra-diagrams.mjs" import-icons "<folder>"
   ```

   If it reports no icons found because the folder names don't say AWS, Azure or Google,
   ask which vendor the icons are from and run it again with `--provider aws|azure|gcp`.

4. Report what was imported in a sentence or two, using the command's own numbers. Say that
   new diagrams use these icons, and that each vendor's own terms cover how the icons are
   used. Do not summarize or restate those terms; point to the vendor page instead.

Re-importing a vendor replaces that vendor's icons and keeps the others. If the user changes
their mind, `/import-icons remove` puts the open icons back.
