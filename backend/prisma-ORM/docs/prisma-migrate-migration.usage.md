# Prisma Migrate Usage for Migration

Source:

- https://www.prisma.io/docs/orm/v7/prisma-migrate/getting-started

---

**Prereqs**

Prisma Migrate requires Model Definition.

```prisma
datasource db {
  provider = "postgresql"
}
model User {
  id    Int    @id @default(autoincrement())
  name  String
  posts Post[]
}
model Post {
  id        Int     @id @default(autoincrement())
  title     String
  published Boolean @default(true)
  authorId  Int
  author    User    @relation(fields: [authorId], references: [id])
}
```

## Initial Migration

```terminal
# --name provides the init name for the migration (like a commit)
npx prisma migrate dev --name init
```

The migration code is generated @
`prisma/migrations/migration_name/migration.sql`:

Note that the `migration_name` folder is usualy a composite of (1)
creation datetime and (2) the string from --name from the CLI above.

```sql

-- It's interesting to see how Prisma Migration transpiles the Relation Scalar Field
---- from the Relation Field by appending the ALTERing of relevant columns, which
---- otherwise would be how I would construct this table from raw SQL. This feels like
---- defining on the class prototype.

CREATE TABLE "User" (
  "id" SERIAL,
  "name" TEXT NOT NULL,
  PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "Post" (
  "id" SERIAL,
  "title" TEXT NOT NULL,
  "published" BOOLEAN NOT NULL DEFAULT true,
  "authorId" INTEGER NOT NULL,
  PRIMARY KEY ("id")
);
-- AddForeignKey
ALTER TABLE
  "Pos
ADD
  FOREIGN KEY("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
```

## Subsequent Migrations

Suppose I add another field to the Model:

```prisma
//...
model User {
  id       Int    @id @default(autoincrement())
  jobTitle String
  name     String
  posts    Post[]
}
//...
```

I would need to migrate again with a new name to update my migrations:

```terminal
npx prisma migrate dev --name added_job_title
```

For which, Migration will create another `migration.sql` file, this time
in a different folder (named `datetime_name`). This is how a Schema can
be tracked by version control.
