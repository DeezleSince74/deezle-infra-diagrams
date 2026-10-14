---
name: state-diagram
description: >-
  Author Mermaid stateDiagram-v2 diagrams (state machines, lifecycles, status workflows,
  protocol and UI states) and render them to an interactive HTML diagram with proper state
  notation — rounded state boxes, filled start and bullseye end terminals, choice diamonds,
  fork/join bars, composite states, and notes. Use when the user wants a state machine, a
  state chart, an object or order lifecycle, a status workflow, or "what states can this be
  in and how does it move between them" — from a description, a screenshot, or existing
  status/enum code.
---

# State diagrams (Mermaid stateDiagram-v2)

Help the user produce a **state diagram** — the states a thing can be in and the
transitions between them. It renders through the **same** interactive renderer as the
architecture, ER, and flowchart diagrams (drag, pan/zoom, dark/light, PNG/SVG export,
view-source) — just author Mermaid **`stateDiagram-v2`** source and render it.

Three ways in — all end with you writing `stateDiagram-v2` source, then rendering it:

1. **From a description** — the user describes a lifecycle ("an order starts as a draft,
   gets submitted, then either paid or rejected; once paid it's picked, packed, and
   shipped"); you write the states and the transitions between them, labeling each
   transition with the event that causes it.
2. **From a screenshot / image** — the user pastes a picture of a state chart or a
   whiteboard sketch; read the boxes, arrows, and the black dots/bullseyes from it and
   transcribe them into `stateDiagram-v2`.
3. **From code** — the user has a status enum, a `switch` on a state field, or a state
   machine config; map each enum value to a state and each legal move to a transition.
   This is the fastest way to a diagram that matches what the system actually does.

Rendering is auto-detected — a source that begins with `stateDiagram-v2` (or the older
`stateDiagram`) is rendered as a state diagram automatically; there is no separate command
or flag.

## Style & theme — ask the user first

As with the other diagrams, **if the user hasn't said, ask before rendering**: **dark** or
**light** theme. (Node style doesn't apply to state diagrams — states always render as
their state-notation shapes.) Default if they don't care: **dark**.

## Syntax

```
stateDiagram-v2                          header: stateDiagram-v2 (or stateDiagram)
    direction LR                         layout axis: TB (default) | BT | LR | RL
    [*] --> Draft                        [*] on the left is the start terminal
    Draft --> Submitted : place order    transition label after the colon
    Submitted --> check                  a plain transition
    state check <<choice>>               branch point → diamond
    check --> Paid : card cleared
    check --> Draft : declined
    state Paid {                         composite state → a labeled container
        [*] --> Picking                  its own start terminal, scoped to the composite
        Picking --> Packed
        Packed --> [*]
    }
    Paid --> Shipped                     a transition may target the composite itself
    state "Awaiting courier" as Shipped  display text for a state (id stays `Shipped`)
    note right of Shipped : carrier scans it
    Shipped --> [*]                      [*] on the right is the end terminal
```

- **States** are bare ids (`Draft`, `Shipped`). An id may contain letters, digits, `_`,
  `.`, and `-`. Give a state display text two equivalent ways:
  `state "Awaiting courier" as Shipped`, or the colon form `Shipped : Awaiting courier`.
- **Transitions** are `A --> B`, with an optional `: label` tail naming the event or
  condition that fires them (`Draft --> Submitted : place order`).
- **Terminals** use `[*]`. On the **left** of an arrow it's the start (a filled dot); on
  the **right** it's the end (a bullseye). Inside a composite state, `[*]` belongs to that
  composite — each one gets its own start and end.
- **Composite (nested) states** are `state Id { … }` and render as a labeled container,
  exactly like architecture groups. They nest, and a transition may point **at** the
  container (`Paid --> Shipped`, `check --> Paid`) as well as at states inside it. You can
  reference a composite before you declare it — order doesn't matter.
- **Choice** — `state pick <<choice>>` draws a small diamond for a branch point. Label the
  outgoing transitions with the conditions.
- **Fork / join** — `state split <<fork>>` and `state joined <<join>>` both draw a solid
  bar across the flow: one incoming arrow fanning out to parallel states, or several
  arrows merging back into one.
- **Notes** attach commentary by a dashed, arrow-less line:
  `note right of Draft : saved locally`, or the block form —
  `note left of Draft` … lines … `end note`. (`right of` and `left of` both work; the
  layout engine places the note where it fits.)
- **Ignored (kept for Mermaid compatibility):** `%%` comments and `classDef` / `class` /
  `style` / `linkStyle` / `click` / `accTitle` / `accDescr` lines. Colors come from the
  renderer's semantic palette, so you don't need `style`/`classDef`.
- **Title (optional):** a Mermaid front-matter block at the very top — a `---` line,
  `title: Order lifecycle`, another `---` — becomes the page title.
- **Not modelled:** the `--` concurrency divider that splits a composite state into
  parallel regions. It is skipped rather than drawn wrong; to show parallelism, use a
  `<<fork>>` / `<<join>>` pair instead.

## What each shape means

| Written as | Renders as | Use it for |
|---|---|---|
| `Draft` | rounded state box | a state the thing can be in |
| `[*] -->` | filled dot | where the lifecycle begins |
| `--> [*]` | bullseye | where the lifecycle ends |
| `state x <<choice>>` | small diamond | a branch on a condition |
| `state x <<fork>>` / `<<join>>` | solid bar | splitting into, or merging from, parallel work |
| `state X { … }` | labeled container | a state with states inside it |
| `note right of X : …` | folded-corner note | commentary that isn't a state |

## Tips

- **Name transitions after events, not states.** `Draft --> Submitted : place order` reads
  as a machine; `Draft --> Submitted : submitted` just repeats the target.
- **Label every branch out of a `<<choice>>`** — an unlabeled fork out of a diamond leaves
  the reader guessing which way the condition goes.
- **Keep ids short and stable** (`Draft`, `Paid`, `Shipped`) and put the human wording in
  the display text. Ids are matched across statements, so reuse an id to add more
  transitions without redeclaring the state.
- **Reach for a composite state** when a group of states is really one phase of the
  lifecycle (everything inside `Paid`, say). It groups them visually and is draggable as a
  unit in the rendered page.
- **Pick the direction to fit the machine:** `LR` for a lifecycle that marches forward,
  `TB` (the default) for one that branches a lot.
- **Loops are fine.** A transition back to an earlier state (`check --> Draft : declined`)
  is laid out so the diagram still reads start-to-end.
