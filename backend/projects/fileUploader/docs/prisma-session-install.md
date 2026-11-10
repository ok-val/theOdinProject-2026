# Prisma Session

Source:

- https://github.com/kleydon/prisma-session-store#readme

---

1. Install `prisma-session-store`:

```terminal
npm i @quixo3/prisma-session-store
```

2. Add a Session Model to the Schema

```prisma
model Session {
  id          String    @id
  sid         String    @unique
  data        String    @db.MediumText
  expiresAt   DateTime
}
```

3. Create the session using the Client (see '../lib/prisma.js') for
   implementation
