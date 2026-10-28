# Defining unique identifiers

Source:

- https://www.prisma.io/docs/orm/v7/prisma-schema/data-model/models

---

## Mandate

Every Prisma Model must have at least one unique identifer:

- `@id` or `@@id` block for PK
- `@unique` or `@@unique` block for unique constraints

> An ID identifies individual records of a model for being a unique
> value. Any Model could have only one ID field; Any Instance (record)
> has a unique ID.

For relational Dbs, the ID Field contains a single value being either:

- An autoincrement value
- A composite value based on other values

> [!tip] ID Free Models
>
> You CAN have a Model without an ID, for which it must have a @unique
> field or @@unique block instead.

## Autoincrement ID

This is the equivalence of PSQL's `GENERATED ALWAYS AS IDENTITY`.

Here's how it's implemented:

```prisma
model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  role    Role     @default(USER)
  posts   Post[]
  profile Profile?
}
```

## Composite ID

Or you can compose an ID from two different values:

```prisma
model User {
  firstName   String
  lastName    String
  email       String    @unique
  isAdmin     Boolean   @default(false)

  /// By default, this field's name in the Prisma Client will be `firstName_lastName`
  @@id([firstName, lastName])
  /// Or, if a custom field name is desired as `fullName`
  @@id(name: "fullName", fields: [firstName, lastName])
}
```

## Defining a unique field

Unique attributes can be defined on a single field using `@unique`, or
on multiple fields using `@@unique` block:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique      // Single field unique
  name  String?
}

model Post {
  id       Int    @id @default(autoincrement())
  title    String
  authorId Int

  @@unique([authorId, title]) // Composite unique
}
```
