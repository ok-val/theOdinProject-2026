# Expand and Contract Migrations

Source:

- https://www.prisma.io/docs/guides/v7/database/data-migration

---

## Expansion

**Starting Schema** (along with other setups)

```prisma
generator client {
  provider = "prisma-client"
  output   = "./generated/prisma"
}

datasource db {
  provider = "postgresql"
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
}
```

1. If the project is currently functional and feature branch is desired:
   `git switch -c add-status-field`
2. Define the Model expansion in the Schema

```prisma
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean? @default(false)
  status    Status   @default(Unknown)
}

enum Status {
  Unknown
  Draft
  InProgress
  InReview
  Published
}
```

3. Create the migration and generate the Client:

```terminal
npx prisma migrate dev --name add-status-field
npx prisma generate
```

4. With a Client ready for scripting, create the migration script:

```js
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});

const prisma = new PrismaClient({
  adapter
});

async function main() {
  await prisma.$transaction(async (tx) => {
    const posts = await tx.post.findMany();
    for (const post of posts) {
      await tx.post.update({
        where: { id: post.id },
        data: {
          status: post.published ? 'Published' : 'Unknown'
        }
      });
    }
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
```

5. Add the migration script to `package.json`
6. Make sure `DATABASE_URL` is pointing to the production DB.
7. Execute the migration script to update the actual field values

## Contraction

1. Switch to another branch (best practice)
2. Update the Schema to remove the Field

```prisma
model Post {
  id      Int      @id @default(autoincrement())
  title   String
  content String?
  status  Status   @default(Draft)
}

enum Status {
  Draft
  InProgress
  InReview
  Published
}
```

3. Author the changes `prisma migrate dev --name...`
4. Regenerate the Client `prisma generate`

## CI: Run changes against disposable DB

Best practice before merging/rebasing to `main`

```terminal
npx prisma migrate deploy
```
