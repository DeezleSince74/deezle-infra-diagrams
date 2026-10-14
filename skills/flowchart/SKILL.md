---
name: flowchart
description: >-
  Author Mermaid flowchart / graph diagrams (process & decision flows, pipelines,
  algorithms, org/workflow steps) and render them to an interactive HTML diagram with
  shaped nodes — process boxes, decision diamonds, terminators, datastores, I/O
  parallelograms — plus directional, dotted, and thick links. Use when the user wants a
  flowchart, a process flow, a decision tree, a workflow or pipeline diagram, or an
  algorithm flow — from a description, a screenshot, or existing pseudocode/steps.
---

# Flowcharts (Mermaid flowchart / graph)

Help the user produce a **flowchart** — a process or decision flow: shaped nodes (steps,
decisions, start/end, datastores, I/O) joined by directional links. It renders through the
**same** interactive renderer as the architecture and ER diagrams (drag, pan/zoom,
dark/light, PNG/SVG export, view-source) — just author Mermaid **`flowchart`** source and
render it.

Three ways in — all end with you writing `flowchart` source, then rendering it:

1. **From a description** — the user describes a process ("user submits an order, we
   validate it, if valid we charge the card and ship, otherwise show errors…"); you write
   the `flowchart`, choosing a shape per step (decision → diamond, start/end → stadium,
   datastore → cylinder, …).
2. **From a screenshot / image** — the user pastes a picture of a flowchart or a whiteboard
   sketch; read the boxes, diamonds, arrows, and labels from it and transcribe them into
   `flowchart`.
3. **From pseudocode / a step list** — the user has numbered steps, an algorithm, or an
   `if/else` outline; map each step to a node, each branch to a labeled edge, and each
   `if` to a decision diamond with `-->|yes|` / `-->|no|` edges.

Rendering is auto-detected — a source that begins with `flowchart` or `graph` is rendered
as a flowchart automatically; there is no separate command or flag.

## Style & theme — ask the user first

As with the other diagrams, **if the user hasn't said, ask before rendering**: **dark** or
**light** theme. (Node style doesn't apply to flowcharts — nodes always render as their
declared shapes.) Default if they don't care: **dark**.

## Syntax

```
flowchart TD                             header: flowchart|graph + direction TB|TD|BT|LR|RL
    A([Start]) --> B{Valid?}             a terminator, a decision, a directional link
    B -->|yes| C[Charge card]            pipe-style edge label
    B -- no --> D[/Show errors/]         inline edge label; parallelogram (I/O)
    C ==> E[(Save order)]                thick link; cylinder (datastore)
    E -.-> F((Done))                     dotted link; circle (end)
    G & H --> I                          fan-in / fan-out with &
    A --> B --> C                        chained links on one line
    subgraph fulfil [Fulfilment]         grouping (nestable)
        C --> E
    end
```

- **Direction** follows the header: `TD`/`TB` top-to-bottom, `BT` bottom-to-top, `LR`
  left-to-right, `RL` right-to-left. `graph` is an accepted alias for `flowchart`. The
  layout engine routes links to match the flow direction.
- **Nodes** are `id` plus a shape wrapper that also carries the label:
  `A[Process]` (rectangle), `A(Rounded)`, `A([Terminator])` (stadium — start/end),
  `A[[Subroutine]]`, `A[(Datastore)]` (cylinder), `A((End))` (circle),
  `A{Decision}` (diamond), `A{{Preparation}}` (hexagon), `A[/Input/]` &
  `A[\Output\]` (parallelograms — I/O), `A[/Manual\]` & `A[\Manual/]` (trapezoids).
  A bare `id` with no wrapper (or an id referenced only in a link) becomes a **rectangle**
  labeled with its id. See **[references/shapes.md](references/shapes.md)** for the full
  shape catalog with the flowcharting meaning and accent color of each.
- **Links** connect two nodes. The base forms:

  | Link | Meaning |
  |---|---|
  | `-->` | arrow |
  | `---` | line, no arrowhead |
  | `-.->` | dotted arrow (dashed line) |
  | `-.-` | dotted line, no arrowhead |
  | `==>` | thick arrow |
  | `===` | thick line, no arrowhead |

  Prefix with `<` for a **bidirectional** arrow (`<-->`). `--o` / `--x` render as a plain
  arrow. **Edge labels** attach two ways: pipe form `A -->|yes| B`, or inline
  `A -- yes --> B` — both produce the same labeled edge.
- **Chains & fan-out** keep source compact: `A --> B --> C` creates two edges; `X & Y --> Z`
  fans two sources into one target (and `A --> B & C` fans one source to two targets).
- **Subgraphs** group nodes: `subgraph id [Title]` … `end`. The `[Title]` is optional
  (`subgraph "Title"` and bare `subgraph id` also work), and subgraphs nest. They render as
  labeled containers, exactly like architecture groups.
- **Ignored (kept for Mermaid compatibility):** `%%` comments and `classDef` / `class` /
  `style` / `linkStyle` / `click` / `direction` / `accTitle` / `accDescr` lines. Colors and
  styling come from the renderer's semantic palette, so you don't need `style`/`classDef`.
- **Title (optional):** a Mermaid front-matter block at the very top — a `---` line,
  `title: Order flow`, another `---` — becomes the page title. Other front-matter keys
  (`config`, …) are ignored.

## Shape conventions

Pick shapes by flowcharting convention so the diagram reads at a glance:

- **Start / end** → stadium `([…])` (or a circle `((…))` for a terminal end).
- **Decision / branch** → diamond `{…}`, with `-->|yes|` / `-->|no|` (or other condition)
  labels on the outgoing edges.
- **Process / action step** → rectangle `[…]` (or rounded `(…)`).
- **Predefined process / subroutine / function call** → subroutine `[[…]]`.
- **Datastore / database / queue** → cylinder `[(…)]`.
- **Input / output** → parallelogram `[/…/]` or `[\…\]`.
- **Preparation / setup** → hexagon `{{…}}`.
- **Manual operation** → trapezoid `[/…\]` or `[\…/]`.

## Tips

- Label every decision's outgoing edges (`yes`/`no`, or the specific condition) — an
  unlabeled branch out of a diamond is ambiguous.
- Keep node ids short and stable (`validate`, `charge`, `ship`); put the human wording in
  the shape label. Ids are matched across statements, so reuse the id to add more links to a
  node without redefining its shape.
- Use `subgraph` to fence a phase (e.g. "Fulfilment", "Checkout") — it groups the steps
  visually and is draggable as a unit in the rendered page.
- Long labels wrap on `<br>`; quote a label that contains link characters or brackets, e.g.
  `A["retry (max 3) --> give up"]`.
- Choose the direction to fit the flow: `TD` for a tall decision tree, `LR` for a wide
  left-to-right pipeline.
