---
name: er-diagram
description: >-
  Author Mermaid erDiagram entity-relationship / data-model diagrams (database tables
  or data-warehouse systems) and render them to an interactive HTML diagram with
  crow's-foot relationships, PK/FK/UK column badges, and CRM/ERP/warehouse/lakehouse
  system logos. Use when the user wants an ER diagram, a data model, a database schema
  picture, table relationships, or a data-warehouse/lakehouse model — from a
  description, a screenshot, or existing SQL/DDL.
---

# Entity-relationship diagrams (Mermaid erDiagram)

Help the user produce an **ER / data-model** diagram: entities (database tables, or
data-warehouse/lakehouse systems) with their columns, joined by crow's-foot
relationships. It renders through the **same** interactive renderer as the architecture
diagrams (drag, pan/zoom, dark/light, PNG/SVG export, view-source) — just author Mermaid
**`erDiagram`** source and render it.

Three ways in — all end with you writing `erDiagram` source, then rendering it:

1. **From a description** — the user describes the domain ("customers place orders, orders
   have line items…"); you write the `erDiagram`.
2. **From a screenshot / image** — the user pastes a picture of an ERD or schema; read the
   entities, columns, keys, and relationships from it and transcribe them into `erDiagram`.
3. **From SQL / DDL** — the user has `CREATE TABLE` statements or an ORM schema; map each
   table to an entity, each column to an attribute (mark `PK`/`FK`/`UK`), and each foreign
   key to a relationship.

Rendering is auto-detected — a source that begins with `erDiagram` is rendered as an ER
diagram automatically; there is no separate command or flag.

## Style & theme — ask the user first

As with architecture diagrams, **if the user hasn't said, ask before rendering**: **dark**
or **light** theme. (Node style doesn't apply to ER — entities always render as tables.)
Default if they don't care: **dark**.

## Syntax

```
erDiagram
    CUSTOMER ||--o{ ORDER : places          relationship: <left> <cardinality> <right> : <label>
    CUSTOMER {                              an entity + its columns
        uuid   id        PK "comment"        <type> <name> [PK|FK|UK[, …]] ["quoted comment"]
        string email     UK
        string name
    }
    ORDER["Sales Order"] { }               optional alias in brackets; block may be empty
```

- **Entities** are `NAME` (uppercase by convention). An entity referenced only in a
  relationship is created automatically. Alias the display name with `NAME["Nice Name"]`.
- **Columns** are `type name` plus optional keys and a quoted comment. Keys: **PK**
  (primary), **FK** (foreign), **UK** (unique); combine with commas: `id PK, FK`. The
  `type` may be omitted.
- **Relationships** connect two entities with a **crow's-foot** operator and an optional
  label. The operator is `<left-cardinality><line><right-cardinality>`:

  | Cardinality | Left | Right | Means |
  |---|---|---|---|
  | zero or one | `\|o` | `o\|` | 0..1 |
  | exactly one | `\|\|` | `\|\|` | 1 |
  | zero or many | `}o` | `o{` | 0..* |
  | one or many | `}\|` | `\|{` | 1..* |

  The line is `--` for an **identifying** relationship (solid) or `..` for
  **non-identifying** (dashed). Example: `CUSTOMER ||--o{ ORDER : places` = one customer
  has zero-or-many orders.
- **Title (optional):** a Mermaid front-matter block at the very top — a `---` line,
  `title: Sales schema`, another `---` — becomes the page title. Other front-matter keys
  (`config`, …) are ignored.

## System badges (optional) — logos for data-warehouse / SaaS models

To badge an entity with a real system logo (great for data-warehouse, lakehouse, CRM/ERP,
and integration models), add a comment directive. It stays a valid Mermaid comment, so the
file still renders in stock Mermaid:

```
erDiagram
    %% system: DIM_CUSTOMER snowflake     badge one entity with a system logo
    %% system: STG_ORDERS   dbt
    %% system: * snowflake                 badge EVERY entity (a single-warehouse model)
    STG_ORDERS ||--|{ DIM_CUSTOMER : models
```

The slug (`snowflake`, `salesforce`, `dbt`, `postgres`, `kafka`, …) is matched to a
redistributable logo, and the entity's header is colored by the system's category (CRM,
ERP, warehouse, lakehouse, BI, database, streaming). Unknown or logo-less systems fall back
to a clean category glyph — never blank. See **[references/systems.md](references/systems.md)**
for the full catalog of system keys.

## Tips

- Prefer `PK` on the identifying column and `FK` on the columns that reference other
  entities — the FK column names make the model self-documenting.
- Keep entity names stable between the block definition and the relationships (they're
  matched by name).
- For a data-warehouse model, tag source systems (Salesforce, HubSpot), transform tools
  (dbt), warehouse tables (Snowflake/BigQuery), and BI (Tableau/Power BI) with
  `%% system:` so the lineage reads at a glance.
