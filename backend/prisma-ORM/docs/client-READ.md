# Client CRUD Operation Series: READ

Source:

- https://www.prisma.io/docs/orm/v7/prisma-client/queries/crud

---

## Get record by ID or unique field

```js
// By unique field
const user = await prisma.user.findUnique({
  where: { email: 'orio@ori.io' }
});

// By ID
const user = await prisma.user.findUnique({
  where: { id: 99 }
});
```

## Get all records

```js
const users = await prisma.user.findMany();
```

## Get first matching record

```js
const user = prisma.user.findFirst({
  where: { posts: { some: { likes: { gt: 100 } } } },
  orderBy: { id: 'desc' }
});
```

## Filter records

```js
// Single field filter
const users = await prisma.user.findMany({
  where: { email: { endsWith: "orio.io" } },
});

// Multiple conditions with OR/AND
const users = await prisma.user.findMany({
  where: {
    /// name startsWith 0 || ( profileViews gt 0 && role ADMIN)
    OR: [{ name: { startsWith: "O" } }, { AND: { profileViews: { gt: 0 }, role: "ADMIN } }];
  }
});

// Filter by related records
const users = await prisma.user.findMany({
  where: {
    email: { endsWith: "orio.io" },
    posts: { some: { published: false } }
  }
});

```

## Select fields

```js
const user = await prisma.user.findUnique({
  where: { email: 'ori@orio.io' },
  select: { email: true, name: true }
});

// Returns: { email" 'ori@orio.io", name: "Ori" }
```

## Include related records

```js
const users = await prisma.user.findMany({
  where: { role: 'ADMIN' },
  include: { posts: true }
});
```
