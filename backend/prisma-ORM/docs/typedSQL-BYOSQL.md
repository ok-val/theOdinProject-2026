# Write your own SQL

Source:

- https://www.prisma.io/docs/orm/v7/prisma-client/using-raw-sql

---

While the Prisma Client covers most of the queries for day-to-day
operations, sometimes custom SQL is required as... there's always some
nitty-gritty parts in the data shape.

For this purpose, there is the Prisma TypedSQL.

> TypedSQL lets me write my queries in `.sql` files and import them into
> my code as functions with fully typed I/Os.

This means that the raw SQL I create is type-safe while being importable
as a module inside my IDE.

## Quick Demo

Source:

- https://www.prisma.io/docs/orm/v7/prisma-client/using-raw-sql/typedsql

---

1. Enable the Preview Feature for Prisma Client generation.

```prisma
  generator client {
    provider        = "prisma-client-js"
    previewFeatures = ["typedSQL"]
  }
```

2. Create the SQL file (typically in the `/prisma/sql` folder)

```sql
-- prisma/sql/getUsersByEmail.sql
SELECT * FROM "User"
WHERE email LIKE $1;
```

3. Commit the new SQL function to the Client

```terminal
npx prisma generate --sql
```

Now the Client can pick up on this custom SQL! The source files for
these queries exports from `/generated/prisma/sql/` dir.

4. Use the raw query

```js
// /script.js

// A Singleton instance was already created @ this dir
import prisma from './lib/prisma.js';
// also need to import the SQL file generated in Client code
import { getUsersByDomain } from '../generated/prisma/client/sql';

// I can now use it in the async queries

async main() => {

  // The function is called from the Client, rather than a Model Delegate
  // the raw SQL function knows nothing about the Prisma Models (what the
  // Model Delegates know); this separation of concern is what makes
  // type-safety possible for TypedSQL.

  const users = await prisma.$queryRawTyped(getUsersByDomain('@risd.edu'));
  console.log(users);
}
```
