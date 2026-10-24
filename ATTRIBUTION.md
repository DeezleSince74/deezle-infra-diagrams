# Attribution — generic (redistributable) icon build

This build renders diagram icons from open-source, redistributable sources only —
it does **not** bundle the proprietary AWS / Azure / GCP architecture icon packs.

- **Brand logos** — [Simple Icons](https://simpleicons.org), licensed **CC0-1.0**.
- **Semantic glyphs** — [Lucide](https://lucide.dev), licensed **ISC**.

**Trademark notice:** all product names, logos, and brands shown are trademarks or
registered trademarks of their respective owners. Their use here is nominative — to
identify services within an architecture diagram — and does not imply any affiliation
with or endorsement by the trademark holders. (CC0 covers copyright, not trademark.)
# Attribution — data-platform & vendor icons

The ER-diagram system badges and the architecture diagrams' third-party vendor logos are
drawn from open-source, redistributable sources only:

- **Full-color brand logos** — the [Iconify `logos`](https://github.com/gilbarbara/logos) set
  (SVG Logos by Gil Barbara), licensed **CC0-1.0**.
- **Monochrome brand marks** — [Simple Icons](https://simpleicons.org), licensed **CC0-1.0**.
- **Category glyphs** — [Lucide](https://lucide.dev), licensed **ISC**.

**Trademark notice:** all product names, logos, and brands are trademarks or registered
trademarks of their respective owners. Their use here is nominative — to identify a system
within a diagram — and does not imply affiliation with or endorsement by the trademark
holders. (CC0 covers copyright, not trademark.)

**Brands without a CC0 source** (e.g. Gong, NetSuite, Starburst) fall back to a category
glyph. To use an official logo you have the rights to, drop `icons/data-overrides/<key>.svg`
in and re-run `npm run build:data-icons` (see the README).

# Attribution — open-source software

The plugin's server, its diagram widget and its icon data include open-source packages
(among them React, React Flow, dagre, zod, ajv, yaml and the MCP SDK).
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) lists every one with its version, its
license, where it is used, and its full license text.
