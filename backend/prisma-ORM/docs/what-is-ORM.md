# What is ORM?

> Object-Relational Mapper

ORMs emerged from the need to write SQL more efficiently.

In a previous project (see '../authentication/'), the queries are
organized as modules by CRUD operations. An alternative to this could be
creating a more centralized Database Class that calls different async
operations:

```js
class Book {
  async getBooks(filters) {}
  async getBookById(id) {}
  async createBook(data) {}
  async updateBook(id, data) {}
  async deleteBook(id) {}
  async getBookAuthors(id) {}
  async getBookGenres(id) {}
  // and so on
}
```

Or one can use composition, and deal with pure functions.

However, this construction may still require some level of adjustment
based on different usecases (like different sorting, params, or
conditions). Once the project scales, managing all of these as raw SQL
queries get cumbersome for (1) navigating schema and (2) altering
production data.

## What is Prisma ORM?

To address those pain points, ORM is a software development technique
that abstracts the manual layer of interacting with DBs using OOP code.

> Prisma ORM is an open-sourced ORM for TS and Node.

**Friendly reminder:** Every abstraction introduces latent tradeoffs;
convenience are not always sunshine and rainbows: The learning curve is
usually the first tradeoff.

### Prisma Schema

Prisma schema files are written in Prisma Schema Language. It contains
all definitions similar to a `CREATE TABLE` query. Neat! So now all
things concerning DBs could live in a single CRUD folder.

```prisma schema language
model Message {
   id        Int      @id @default(autoincrement())
   content   String   @db.VarChar(255)
   createdAt DateTime @default(now())
   author    User     @relation(fields: [authorId], references: [id])
   authorId  Int
}

model User {
   // user's fields
}
```

This file is used by the Prisma Client to track and interact with DBs.

### Prisma Client

Which brings us to the next component: Prisma Client. It automatically
reads the Schema files and acclimatize to the codebase for you.

```js
// instantiate the client
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// when creating a new message
await prisma.message.create({
  data: {
    content: 'Hello, world!',
    authorId: 1
  }
});

// when fetching all messages
const messages = await prisma.message.findMany();
```

Works out of the box!

### Prisma Migrate

Prisma Migrate is a tool for database migration for when you want to
make changes to certain DB servers or implement partitioning or sharding
to DBs at scale.

### Some noticable differences from PSQL

- Prisma doesn't use the IDENTITY column (as in GENERATED ALWAYS AS
  IDENTITY). Instead, it uses a Serial Types. Here's the basic
  breakdown:
  - `Serial` is legacy implementation of auto-generated unique values,
    but which is part of the current SQL standard. Hence is the reason
    for having `GENERATED AS IDENTITY` syntax in modern PSQL. With
    Serial Types, you could accidentally override the value and the
    system will not auto-advance the count forward, resulting in
    confusing bugs.
  - `Identity` prevents manual insertions altogether, hence making it
    SQL standard--compatible. It does provide a specific syntax to
    overriding it when need be.
