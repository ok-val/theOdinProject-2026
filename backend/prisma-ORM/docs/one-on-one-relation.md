# 1-1 Relation

## Cardinality of 1-1 Relations

Let's review how Field Types and Modifiers affect 1-1 Relations.

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
  /// Relation #2 for "PinnedPost"
  pinnedBy   User?   @relation("PinnedPost", fields: [pinnedById], references: [id])
  pinnedById Int?    @unique
}
```

With this Schema, a single User can only pin one Post AND a Post could
only be pinned by only one User.

| Action                        | Allowed?                        |
| :---------------------------- | :------------------------------ |
| User A pins Post 1            | Y                               |
| User A also pins Post 2       | N                               |
| User B also pins Post 1       | N                               |
| Post 1 isn't pinned by anyone | Y (pinnedById Int? is optional) |

```prisma
// Consider this 1-1 Relation
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
```

| Action                    | Allowed?                   |
| :------------------------ | :------------------------- |
| User A has Profile 1      | Y                          |
| User B also has Profile 1 | N                          |
| Profile 1 has no User     | N (userId Int is required) |
