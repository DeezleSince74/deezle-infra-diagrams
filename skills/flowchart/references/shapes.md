# Flowchart node shapes

The full shape catalog the renderer supports. Each row is the Mermaid wrapper you put
around a node's label, the shape it draws, the flowcharting convention it signals, and the
semantic accent color and icon the renderer gives it (you don't set colors or icons
yourself — they come from the shape).

| Wrapper | Shape | Use for | Accent | Icon |
|---|---|---|---|---|
| `A[label]` | Rectangle | Process / action step | Indigo | — |
| `A(label)` | Rounded rectangle | Process / action step (softer) | Indigo | — |
| `A([label])` | Stadium (pill) | Start / end terminator | Teal | Play |
| `A[[label]]` | Subroutine (framed box) | Predefined process, subroutine, function call | Violet | Layers |
| `A[(label)]` | Cylinder | Datastore — database, queue, cache | Purple | Database |
| `A((label))` | Circle | Terminal end / connector | Teal | Flag |
| `A{label}` | Diamond | Decision / branch | Amber | Fork |
| `A{{label}}` | Hexagon | Preparation / setup | Pink | Sliders |
| `A[/label/]` | Parallelogram | Input / output | Sky | File in |
| `A[\label\]` | Parallelogram (mirrored) | Input / output (alt slant) | Sky | File out |
| `A[/label\]` | Trapezoid | Manual operation | Orange | Hand |
| `A[\label/]` | Trapezoid (inverted) | Manual operation (alt) | Orange | Hand |

Notes:

- **Bare / undefined nodes.** A node written as a bare `id` (no wrapper), or one that only
  ever appears in a link, renders as a **rectangle** labeled with its id. Give it a wrapper
  the first time you want a label or a non-rectangle shape; later references can stay bare.
- **The `>label]` "asymmetric" form** is accepted and renders as a rectangle.
- **Color and icon are semantic, not manual.** Both are derived from the shape, so
  decisions are always amber with a fork, datastores purple with a database, terminators
  teal, and so on — consistent across every diagram. The two process shapes carry no icon,
  which is what makes the marked steps stand out. `style` / `classDef` lines are ignored.
- **Labels.** Wrap long text with `<br>`. Quote a label that contains brackets or link
  characters so the parser doesn't mistake them for shape/link syntax:
  `A["retry (max 3) --> stop"]`.

## Link styles (recap)

Links carry their own style, independent of node shape:

| Link | Renders as |
|---|---|
| `-->` | Solid arrow |
| `---` | Solid line, no arrowhead |
| `-.->` | Dashed (dotted) arrow |
| `-.-` | Dashed line, no arrowhead |
| `==>` | Thick arrow |
| `===` | Thick line, no arrowhead |
| `<-->` | Bidirectional arrow (prefix any arrow form with `<`) |

Label a link with the pipe form `A -->|text| B` or the inline form `A -- text --> B`.
