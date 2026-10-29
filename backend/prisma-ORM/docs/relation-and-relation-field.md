# Relation & Relation Field

Source:

- https://www.prisma.io/docs/orm/v7/prisma-schema/data-model/relations

---

## What is a Relation?

> A relation is **connection** between two models in the Prisma Schema.
> There are three types of relations:
>
> - One-to-One (1-1)
> - One-to-Many (1-n)
> - Many-to-Many (m-n)

```prisma
model User {
  id      Int      @id @default(autoincrement())
  posts   Post[]
  profile Profile?
}

model Profile {
  id     Int  @id @default(autoincrement())
  user   User @relation(fields: [userId], references: [id])
  userId Int  @unique // relation scalar field (used in the `@relation` attribute above)
}

model Post {
  id         Int        @id @default(autoincrement())
  /// Relation Field containing Model Type
  author     User       @relation(fields: [authorId], references: [id])
  /// Relation Scalar Field, containing the FK as Scalar Type, referencing the above Relation Field
  authorId   Int
  categories Category[]
}

model Category {
  id    Int    @id @default(autoincrement())
  posts Post[]
}
```

In which:

- 1-1: User -> Profile
- 1-m: User -> Post
- n-m: Post -> Category

> Every Relation requires exactly two Relation Fields, one on each
> Model.

For the 1-1 User->Post Relation, here's the basic anatomy of the
relation field definition with three components as fields:

- `One` Model contains the `posts` relation field, denoted by its Model
  Field type `Post`, for which the square bracket notation signifies the
  1-m relation.
- `Many` Model contains the 'author' relation field, denoted by its
  Model Field type `User`, for which the attribute points to the
  Relation Scalar Field that contains the physical Foreign Key,
  `authorId`.

## Relations are used by the Prisma Client

Later, the Prisma Client can use these relations to make queries to DBs:

```js
const userAndPosts = await prisma.user.create({
  data: {
    posts: {
      create: [
        { title: 'Prisma Day 2020' },
        { title: 'How to write a Prisma schema' }
      ]
    }
  }
});
```

See more examples in the `../docs/quickstart-v7/hello-prisma/script.js`
folder.

## Relation Fields

> Relation Fields are fields on a Prisma Model whose type is another
> Model. Every Relation requires exactly two Relation Fields, one on
> each Model.

Relation Fields are not physical fields, just acting as pointers.

A 1-m Relation Field, on the `Many` end, must be accomodated by a
Relation Scalar Field which contains the actual Foreign Key. Said Field
must be defined using the `relation` attribute which takes at least two
of following arguments:

```prisma
model Profile {
  id     Int  @id @default(autoincrement())
  /// The relation attribute here takes two arguments:
  /// - fields: points to the Relation Scalar Field
  /// - references: names the field on the other Model that the Relation Scalar Field should point to
  user   User @relation(fields: [userId], references: [id])
  userId Int  @unique
}
```

### @relation attribute

The `@relation` attribute is required when:

- Defining 1-1 or 1-m Relations
- Disambiguating multiple relations between the same models (see more
  below)
- Defining self-relations
- Defining n-m relations for MongoDB

#### Disambiguating Relations

Disambiguation is required when there are two Relations between the same
Models.

```prisma
// User and Post have two Relations between each other.
model User {
  id           Int     @id @default(autoincrement())
  writtenPosts Post[]  @relation("WrittenPosts")
  pinnedPost   Post?   @relation("PinnedPost")
}

model Post {
  id         Int     @id @default(autoincrement())
  /// Relation #1 for "WrittenPosts"
  author     User    @relation("WrittenPosts", fields: [authorId], references: [id])
  authorId   Int
  /// Relation #2 for "PinnedPosts"
  pinnedBy   User?   @relation("PinnedPost", fields: [pinnedById], references: [id])
  pinnedById Int?    @unique
}
```
