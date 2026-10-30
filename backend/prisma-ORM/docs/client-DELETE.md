# Client CRUD Operation Series: DELETE

Source:

- https://www.prisma.io/docs/orm/v7/prisma-client/queries/crud

---

## Delete single record

```js
const deleteUser = await prisma.user.delete({
  where: {
    email: 'bart@simpsons.io'
  }
});
```

## Delete multiple records

```js
const deleteUsers = await prisma.user.deleteMany({
  where: {
    email: {
      contains: 'simpsons.io'
    }
  }
});
```

## Delete all records

```js
const deleteAllUsers = await prisma.user.deleteMany({});
```

## Cascading delete

When deleting a record that already has Relation with one or more
records, say, when the User already has Posts.

```js
const deleteUser = await prisma.user.delete({
  where: {
    email: 'bart@simpsons.io'
  }
});
```

An error is thrown:

> The change you are trying to make would violate the required relation
> 'PostToUser' between the `Post` and `User` models.

To resolve this error, there are three ways:

1. Make the Relation optional:

```js
model Post {
  id       Int   @id @default(autoincrement())
  author   User? @relation(fields: [authorId], references: [id])
  authorId Int?
  // author   User  @relation(fields: [authorId], references: [id])
  // authorId Int
}

// Run npx prisma generate again to commit the changes
```

2. Change the author of the posts to another user before deleting the
   user

3. Delete a user and all their posts with two seperate queries using a
   Transaction

```js
// Just like in PSQL, the Many end of the Relation should be deleted first:
// Transaction callbacks MUST run syncrhonously to ensure the order of deletion
const deletePosts = prisma.post.deleteMany({
  where: {
    authorId: 7
  }
});

const deleteUser = prisma.user.delete({
  where: {
    id: 7
  }
});

const deleteTransaction = await prisma.$transaction([
  deletePosts,
  deleteUser
]);
```

## Delete all records but keep the tables

This is particularly useful during testing.

> Know the order of deletion: The Many end of the Relation should be
> deleted first.

Using a Transaction:

```js
/// Transaction callbacks must run syncrhonously to ensure deletion order
const deletePosts = prisma.post.deleteMany({});
const deleteProfile = prisma.profile.deleteMany({});
const deleteUser = prisma.user.deleteMany({});

await prisma.$transaction([deletePosts, deleteProfile, deleteUser]);
```

## Delete all records with Prisma Migrate

`npx prisma migrate` can do the following (if setup)

1. Drop the DB
2. Create a new DB
3. Apply migrations
4. Seed the new DB with data
