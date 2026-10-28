# Other definitions

Source:

- https://www.prisma.io/docs/orm/v7/prisma-schema/data-model/models

---

## Defining a default value

Use the `@default` attribute:

```prisma
model Post {
  id         Int        @id @default(autoincrement())
  createdAt  DateTime   @default(now())
  title      String
  published  Boolean    @default(false)
  // json data types requires escape characters
  data       Json       @default("{ \"hello\": \"world\" }")
}
```

Default values can be:

- Static values:

  - Int: 5
  - String: "Hello"
  - Boolean: false

- Lists:

  - Int[]: [5,6,7]
  - String[]: ["Hello", "World"]

- Functions (the common ones):

  - now()
  - uuid()
  - cuid()

- JSON: Use escape strings

## Defining an index

In Prisma ORM, you could access your data via Index.

> Index is a DB structure designed to optimize search speed (like how
> you can in an array) at the cost of writing/rewriting because the DB
> has to update the index per change.

```prisma
model Post {
  id      Int     @id @default(autoincrement())
  title   String
  content String?

  @@index([title, content])
  /// Once a field is indexed, I can query it later via the findMany>where clause
}
```

## Defining enums

> Enums Model is used to provide strict allowed values for Fields.

```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  role  Role    @default(USER)
}

enum Role {
  USER
  ADMIN
}
```

##
