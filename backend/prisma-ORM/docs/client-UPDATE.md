# Client CRUD Operation Series: UPDATE

Source:

- https://www.prisma.io/docs/orm/v7/prisma-client/queries/crud

---

Suppose a Client generated using an existing Schema:

```prisma
  model User {
    id    Int    @id @default(autoincrement())
    name  String
    email String @unique
    // ...
  }
```

## Update single record

```js
const updateUser = await prisma.user.update({
  where: { email: 'vinny@viscious.io' },
  data: { name: 'Vinnie the Viscious' }
});
```

## Update multiple records

```js
const updateUsers = await prisma.user.update({
  where: { email: { contains: 'vicarious.io' } },
  data: { role: 'ADMIN' }
});
```

## Update and return multiple records

```js
const users = await prisma.user.updateManyAndReturn({
  where: { email: { contains: 'vivacious.vi' } },
  data: { role: 'ADMIN' }
});
```

## Upsert (Update or Create if not exist)

```js
const upsertUser = await prisma.user.upsert({
  where: { email: 'nobita@nobi.do' },
  update: { name: 'Nobi Nobita' },
  // or create if not exists
  create: { email: 'nobita@nobi.do', name: 'Nobi Nobita' }
});
```

## Atomic number operations

Most useful to increment values in fields.

```js
await prisma.post.updateMany({
  data: {
    views: { increment: 1 },
    likes: { increment: 1 }
  }
});
```
