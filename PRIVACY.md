# Privacy

deezle-infra-diagrams does not collect, store or send any personal data.

- Everything runs on your computer. The plugin's server makes no network requests and
  has no analytics or telemetry.
- The diagram text you or Claude give it is turned into a picture and returned to Claude
  in the same conversation. Nothing is kept after the call ends.
- When asked to save a diagram, it writes one `.html` file where you ask (your Downloads
  folder by default). That file stays on your computer.
- If you import vendor icons you downloaded (`/import-icons`), the plugin reads only the
  folder you name and saves the icons in `~/.deezle-infra-diagrams/icons` on your computer.
  `/import-icons remove` deletes them.
- The saved page works offline. Its PNG and SVG export runs in your browser.

Questions: open an issue on this plugin's GitHub repository.
