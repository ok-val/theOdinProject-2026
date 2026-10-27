# Model Definition

Source:

- https://www.prisma.io/docs/orm/v7/prisma-schema/data-model/models

---

The Model Definition part of the Schema defines the application Models.
These Models are Prisma-specific, not native to PQSL or MongoDB.

> Models function to:
>
> - Represent the entities of application domain
> - Map to PSQL relations or MongoDB's collections (not to be confused
>   with Prisma Relation)
> - Form queries for Prisma Client
> - Combined with TS, provides `type definitions` for Models to ensure
>   _type safety_.

Here are some useful Model primitives/types, callable by their eponymous
keywords:

- Models
- Scalar types
- Enums
- Attributes
- Functions
- Default values

## Example

```prisma
// A Datasource pointing to PSQL
datasource db {
  provider = "postgresql"
}

// A Generator using the prisma-client module to generate the Client code @ the designed output dir
generator client {
  provider = "prisma-client"
  output   = "./generated"
}

/* The User Model defines the number of fields and relations with the Post, Profile, and Role Models.
** In which:
**      role field defines the relation with Role Model, setting a strict set of allowed values
**      posts field defines the relation with Posts Model--- a One-to-Many (1-n) relation that allows a single User to have multiple posts
**      profile field defines the relation with Profile Model --- a One-to-One (1-1) relation that allows a single User to have only one profile
*/

model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  role    Role     @default(USER)
  posts   Post[]
  profile Profile?
}

model Profile {
  id     Int    @id @default(autoincrement())
  bio    String
  user   User   @relation(fields: [userId], references: [id])
  userId Int    @unique
}

/* In addition, in the Post Model,
**      categories field defines the relation with Category Model--- a Many-to-Many (n-m) relation that allows posts to link to multiple categories and vice versa
**      author is a Relation Field (not to be confused with the term `relation` as in `relationship` that I've been using so far),
**            (I prefer the Reference field)
**            which does not exists as a physical column
**            but rather a virtual reference to the User Model,
**            pointing to a physical field and defining the reference for that field.
*/

model Post {
  id         Int        @id @default(autoincrement())
  createdAt  DateTime   @default(now())
  updatedAt  DateTime   @updatedAt
  title      String
  published  Boolean    @default(false)
  author     User       @relation(fields: [authorId], references: [id])
  authorId   Int
  categories Category[]
}

model Category {
  id    Int    @id @default(autoincrement())
  name  String
  posts Post[]
}

enum Role {
  USER
  ADMIN
}
```

> [!tip] Prisma Studio
>
> Prisma Studio visualizes these connections for you. Make sure to use
> that to get a visual understanding of the Model Definition
