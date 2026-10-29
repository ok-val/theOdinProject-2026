# What is the equivalence of a SQL row/record in Prisma?

> In Prisma, a record is a plain data object whose shape (or TS type) is
> defined by the Model.

Because of this structural inheritence, it's helpful to think of a SQL
record as a Prisma Models' Instance (I'll do capital I do differentiate
from the OOP instance).

However, any Instance is NOT technically an OOP instance of its Model
(as if treated as a class).

```js
const user = await prisma.user.findUnique({ where: { id: 1 } });
user instanceof User; // there's no such class
```

Henceforth, Instance refers to Prisma Instance, divorced from any
inheritence concepts.
