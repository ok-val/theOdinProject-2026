# Prisma Migrate Usage for Introspection

Source:

- https://www.prisma.io/docs/orm/v7/prisma-migrate/getting-started

---

## Keep prisma in sync with the source of truth

Whenever the database changes, the Schema is out-of-date. For each
changes, Prisma must repeat `db pull` and `generate` to refresh the
Schema with fresh structure and to generate an updated Client that knows
how to handle that structure.

> Database (existing tables/source of truth) -> schema.prisma (a copy)
> -> Client generation

**Prereqs:**

- Make sure the Prisma Schema is in sync with the database schema (the
  source of truth) using the following:

```terminal
npx prisma db pull
```

Here's what happens UTH:

`db pull` connects to whatever the PATH `DATABASE_URL` points to, reads
the table, columns, etc, and writes a matching Model block into the
Schema. It only needs to read the structure: how it was created doesn't
matter.

## Baseline Migration

The _baseline migration_ creates an initial history of the DB before
migrating to Prisma. This init migration is different then that for
Migration (start afresh):

- Baseline migration tells the Client that this is the checkpoint: you
  can't reset the database beyond this point.
- It also prevents generated migrations from failing when they try to
  create tables that already exist.
- It is the equivalence to Initial migration for Migration, except that
  you are not creating new tables at all.

1. Create a new `prisma/migrations` dir (if exists, archive it
   elsewhere)
2. Create a new `prisma/migrations/migration_name` dir (feel free to
   name this using the `creationDatetime_name` convention, but must
   match step 3-4).
3. Generate the Migration

```terminal
npx prisma migrate diff \
  --from-empty \
  --to-schema prisma/schema.prisma \
  --script > prisma/migrations/0_init/migration.sql
```

4. Mark the baseline migration as already applied

```terminal
# We created the init migration from scratch, now to add it to the
# migration_table, marking the baseline migration as already applied.
npx prisma migrate resolve --applied 0_init
```
