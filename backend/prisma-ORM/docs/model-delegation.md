# Model Delegation

> Model Delegation is when the Prisma Client generates properties for
> the prisma object (i.e., prisma.property).

Whenever a new Model is defined, run `npx prisma generate` every time so
the client could pick it up. This is how a Client accustoms itself to
the codebase.

With this Schema,...

```prisma
  model User {
    id    Int    @id @default(autoincrement())
    email String @unique
  }
```

> When `npx prisma generate` is run, Prisma Client creates ONE property
> per Model. This is callrd a **model delegate**. The property name is
> camelCased.

The delegate holds all the query methods for that table: `create`,
`findMany`, `update`, and so on.
