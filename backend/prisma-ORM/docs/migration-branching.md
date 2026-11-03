# Migration in CI/CD

Source:

- https://www.prisma.io/docs/orm/v7/prisma-migrate/understanding-prisma-migrate/mental-model

---

## Mental Model

> - Feature branches _write_ history (migrations folders & files) with
>   `migrate dev`
> - `main` branch _runs the SQL_ files, and thereby apply the history
>   with `migrate deploy`
> - git carries the changes between them

`migrate dev` and `migrate deploy` are the two commands used to this
workflow.

> `migrate dev` is the authoring tool: it compares the Schema to the
> history, writes new migration files, applies them, and may reset the
> local DB if it drifts. Use ONLY for development.

> `migrate deploy` is the applying tool: it reads the committed
> migration files and runs only the pending ones against the target DB.
> It never creates migrations, never reruns history, never edits
> history, never rolls back, never resets, never prompts. Use for CI/CD,
> staging and production.

|                              | migrate dev | migrate deploy          |
| :--------------------------- | :---------- | :---------------------- |
| Where                        | local       | Staging, production, CI |
| Writes migration files?      | Yes         | No                      |
| Applies migrations to table? | Yes         | Yes                     |
| Can wipe a DB                | Yes         | No                      |

## Rules for Migration CI

- Never edit or delete a migration folder after it has been merged or
  deployed. If something needs fixing, create a new migration.

- Never run `migrate dev` or `migrate reset` against production.

- Only run `migrate deploy` against production.

- Avoid use `db push` on a shared DB. It changes the DB without writing
  migration, so history mismatches.

- A baselined DB requires `0_init` to be already `migrate resolve`-ed in
  order for `migrate deploy` to work.

## What `migrate deploy` actually do?

> - Reads local `prisma/migrations/`
> - Diffs with `_prisma_migrations` in target DB
> - Runs only those diff-ed folders (oldest first)

## Branching Workflow

**Starting point:** `main` has a `migrations/` folder (either from
Migration or Introspection), and production is up to date with it.

**Phase A: Develop local feature branch**

1. Branch off `main`: `git switch -c feature/job-title`
2. Sync local DB with `main`: `migrate dev` (without --name) to record
   the changes to your local DB.

   - If others are also on the same branch, make sure to merge or rebase
     to apply rolling changes

3. Edit the Schema based on specs
4. Record the migration: `migrate dev --name job-title`
5. Double-check your work --- Last chance here
6. Commit the changes of Schema and migration folders

Repeat 3-6 until desirable.

**Phase B: Pull request and CI**

7. Open a PR: Reviewers look at `migration.sql` files and other codes
8. Use the CI to verify integrity against temp DB: `migrate deploy`

   - Here's what CI does:

     - Creates a virtual machine
     - Checks out the branch's code
     - Starts a DB on that machine
     - Runs the checks: installs, deploy, tests
     - Reports a pass or fail on the PR
     - Discards the machine

Return to Phase A if something fails

**Phase C: Merge and release**

9. Merge to `main`
10. Release pipeline runs `migrate deploy` against staging, then
    production
11. Restart the app: First migrate, then deploy code since the code
    expects new columns
