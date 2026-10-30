# Client CRUD Operation Series: CREATE

Source:

- https://www.prisma.io/docs/orm/v7/prisma-client/queries/crud

---

All operations are enacted thru Prisma Client API.

Suppose a Client generated using an existing Schema:

```prisma
  model User {
    id    Int    @id @default(autoincrement())
    name  String
    email String @unique
    // ...
  }
```

## Create single record

```js
const user = await prisma.user.create({
  data: {
    email: 'ori@orio.io',
    name: 'Ori Orio'
  }
});
```

## Create multiple records

```js
const createMany = await prisma.user.createMany({
  data: [
    { name: 'Bob', email: 'bob@prisma.io' },
    { name: 'Yewande', email: 'yewande@prisma.io' }
  ],
  skipDuplicates: true // Skip records with duplicate unique fields (email)
});
// Returns: { count: 2 }
```

## Create and return multiple records

```js
const users = await prisma.user.createManyAndReturn({
  data: [
    { name: 'Alice', email: 'alice@prisma.io' },
    { name: 'Bob', email: 'bob@prisma.io' }
  ]
});

console.log(users.length); // 2
console.log(users[0].name); // 'Alice'
```
