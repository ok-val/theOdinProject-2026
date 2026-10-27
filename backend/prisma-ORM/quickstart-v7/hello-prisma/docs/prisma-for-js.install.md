## Install Prisma ORM for JS

Source:

- https://www.prisma.io/docs/v7/prisma-orm/quickstart/postgresql
- https://www.theodinproject.com/lessons/nodejs-prisma-orm

1. Install the Prereqs:

```terminal
npm init -y --init-type=module
npm install @prisma/client@7 @prisma/adapter-pg pg dotenv
npm install prisma@prev -D
```

2. Init Prisma:

```terminal
npx prisma init --datasource-provider postgresql --output ../generated/prisma --generator-provider prisma-client-js --no-skills
```

3. Use `.config.js`:

```terminal
mv prisma7.config.ts prisma7.config.js
```

4. Define the schema (as seen in '../prisma/schema.prisma')

5. Create the DB relations based on the defined schema

```terminal
npx prisma migrate dev --name init
```

6. Generate the Prisma Client

```terminal
npx prisma generate
```

All dependencies installed! The Prisma Client can be instantiated now.

## Instantiate Prisma Client

```js
// lib/prisma.js

// import "dotenv/config";
// .env is handled by npm scripts instead
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export default prisma;
```

## The first query

The first query was written to '../script.js'. All green!

## Use Prisma Studio

```terminal
npx prisma studio
```
