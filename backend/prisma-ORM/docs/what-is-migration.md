# What is Prisma Migration?

Source:

- https://www.prisma.io/docs/orm/v7/prisma-migrate/understanding-prisma-migrate/mental-model

---

> As a universal software development concept, DB migrations are a
> _systematic, version-controlled_ way to modify and evolve the
> structure of your DB.

For example, within a migration you can create or remove tables and
columns, split fields in a table, or add types and constraints to your
DB; all while being version-controlled.

## Patterns of Migration

For migrations, there are two main types of migrations:

1. **Model/Entity-first Migration (Schema-first)**
2. **Database-first Migration**

Fundamentally, what separates the two patterns is which side is the
**source of truth**.

|                 | Migration (Schema-first)      | Introspection (database-first)    |
| :-------------- | :---------------------------- | :-------------------------------- |
| Source of truth | Schema                        | Existing DB                       |
| Direction       | Schema -> SQL -> DB           | DB -> Schema                      |
| Use case        | A fresh project with empty DB | Inherit a DB with existing tables |
| Prisma command  | `migrate dev`                 | `db pull`                         |

### Pattern 1: Migration (Schema-first)

Read more:

- './prisma-migrate-migration.md'

**Starting point:** An empty database and a `DATABASE_URL` pointing to
it

**Phase A: Define Schema to create DB**

1. Define the Models in the Schema
2. Generate and apply migration with a migration tool (e.g., Prisma),
   entailing:

   - Run `npx prisma migrate dev --name init` which performs the
     following UTH:

     - Compares the Schema to the DB
     - Writes the SQL to
       `prisma/migrations/<timestamp>_init/migration.sql
     - Runs that SQL against the DB, creating the tables
     - Records the migration as applied in the migration table

   > In essence, `migrate dev` handles `generate`, `migrate diff`,
   > `migrate resolve` that Introspection Pattern handles manually.

3. Version-control takes place

**Phase B: Migration Loop for every subsequent change**

4. Edit the Schema, adding new Models, Fields, Relations, etc.
5. Run `npx prisma migrate dev --name <changes>, which again:

   - Compares the Schema to the latest migration
   - Writes the only the difference between changes to
     `prisma/migrations/<timestamp>_<change>/migration.sql (the old
     folders are never deleted)

6. Version-control takes place

### Pattern 2: Introspection (Database-first)

Read more:

- './prisma-migrate-introspection.md'

**Starting point:** A DB with tables and data. No Schema or migration
folders (if exist relocated elsewhere)

**Phase A: Copy the DB into Schema**

1. Point the `DATABASE_URL` at the existing DB
2. Run `npx prisma db pull`, which UTH:

   - Prisma connects, reads the structure
   - Writes matching Model blocks into the Schema

3. Rename and map the appropriate table/field names using `@map` and
   `@@map` attributes (PSQL convention is plural_snake_case, whereas
   Prisma is singularCamelCase)
4. Run `npx prisma generate`. Client now knows the Models to query DB

If Prisma is only used to read and write data and the DB structure is
managed elsewhere, stop here. Repeat steps 2-4 every time DB structure
changes to keep Prisma Client in sync.

**Phase B: Baseline**

Continue only if Prisma is used to manage the structure from here on.

Because `migrate dev` expects a migration history that explains how DB
got to its current state. Baseline essential fakes it.

5. Create `prisma/migrations/0_init/` folder
6. Run `npx prisma migrate diff...` to fake the baseline to the write
   the `migration.sql` into the migration folder above.
7. Manually add the migration as applied in the migration table with
   `npx prisma migrate resolve --applied 0_init` (without this entry in
   the migration table, `migrate dev` will try create new tables and
   fail)
8. Version-control takes place

**Phase C: Back to Migration loop** (see above)
