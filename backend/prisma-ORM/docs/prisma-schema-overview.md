# Prisma Schema Overview

Source:

- https://www.prisma.io/docs/orm/v7/prisma-schema/overview

---

## Components

> Prisma schema is Prisma main method of configuration.

It is typically `lib/prisma.schema`, containing the following parts:

- **Datasource:** Specify the `DB Provider` that Prisma ORM should
  connect to (PSQL, MySQL).

- **Generator:** Specifies what `Clients` should be generated based on
  the Data Model.

  **Model Definition:** Specifies the `Models` and their `Relations`.

  A Prisma schema could also be partitioned into multiple files.

## How to read a Prisma Schema

```prisma
// Comment constructions:
/// Description of AST nodes, to be attached to following code blocks
/* block comment */
```

```prisma
// A Datasource pointing at psql
datasource db {
  provider = "postgresql"
  // process.env is accessible via the Datasource...
  url      = env("DATABASE_URL")
}

// A Generator for the Prisma Client
generator client {
  provider = "prisma-client"
  // Generated Client should be in the './generated' dir
  output   = "./generated"
  // ... and the Client generator
  url      = env("DATABASE_URL")
}

// A Model Definition with: one Model (with one Relation)... and one Enum
// `User` is a Model
model User {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  email     String   @unique
  name      String?
  role      Role     @default(USER)
  // On the `User` Model, the field `posts`...
  posts     Post[]
  // ... defines a **One-to-Many** Relation: a single user can have multiple Posts
}

// `Post` is a Relation
model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  published Boolean  @default(false)
  title     String   @db.VarChar(255)
  // In the `Post` Relation, the following fields...
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  // ... defines a **Many-to-One** Relation: many posts could link back to one User.
}

// `Enum` is a Model for fixed-allowed values.
// It provides bepoke values for Models fields as a standalone Model
enum Role {
  USER
  ADMIN
}
```

## Prisma from the CLI

Whenever a `prisma` command is invoked (e.g., `npx prisma generate`),
the CLI reads some information of the schema:

- `prisma generate`: Reads all above information to generate the Client
  code. This is how the Client becomes aware of the changing codebase.
- `prisma migrate dev`: Reads the Datasource and Model Definition to
  create a new migration.
