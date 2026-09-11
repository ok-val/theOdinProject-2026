# Safe update operations

How to avoid bad write operations?

1. **Query before updating**

```sql
SELECT id, title FROM books WHERE title = "Hurry Popper";
-- returns one records with books.id = 1

UPDATE books SET title = "Harry Potter" WHERE id = 1;
```

While this is a little less compact than these options:

```sql
UPDATE books
  SET title = "Harry Potter"
  WHERE id = (SELECT id FROM books WHERE title = "Hurry Popper");

UPDATE books
  SET title = "Harry Potter"
  WHERE id = (SELECT id FROM books WHERE title IN "Hurry Popper");

UPDATE books
  SET title = 'Harry Potter'
  WHERE title = 'Hurry Popper';
```

Which could accidentally update multiple existing records
simultaneously. So it's the safest to **QUERY BEFORE UPDATE**.

2. **Use a LIMIT**

```sql
-- to be entirely sure since id may not be the record's PK
UPDATE users SET deleted = true WHERE id = 1 LIMIT 1;
DELETE users WHERE id = 1 LIMIT 1;
```

3. **Use transactions**

When we issue a SQL command that changes something about a database
(i.e., using commands like `CREATE`, `UPDATE`, `INSERT`, or `DELETE`),
it starts a TRANSACTION.

> [!definition] Transaction
>
> A sequence of operations treated as a single logical piece of work
> (like a bank transaction). Database transaction must comply to the
> **ACID principles** to make sure the operations are proceessed
> reliably.

When wrapping multiple commands inside a Transaction, two things are
guaranteed:

1. It will rollback the transaction and leave the database how it was
   before the transaction if, for some reason, any of the commands fail.
   In essence, transaction acts like a guarantee wrapper for our
   commands.

   ```sql
    BEGIN TRANSACTION;
    UPDATE people SET husband = "Winston" WHERE user_id = 1;
    UPDATE pweofj SET wife = "Winnefer" WHERE user_id = 2;
    COMMIT;
    -- transaction throws error and rolls back to initial state
   ```

2. It will use the same view of the data while the sequence of commands
   is running in cases of race conditions.

   ```sql
   INSERT INTO user_badges VALUES (1, "SQL Master", "4pm");
   UPDATE user SET recent_activity = "Earned SQL Master badge" WHERE id = 1;
   -- whilst issued concurrently elsewhere
   INSERT INTO user_badges VALUES (1, "Great Listener", "4:05pm");
   UPDATE user SET recent_activity = "Earned Great Listener badge" WHERE id = 1;
   ```

   Without transactions, the commands would be issued in a slightly off
   order:

   ```sql
   INSERT INTO user_badges VALUES (1, "SQL Master");
   INSERT INTO user_badges VALUES (1, "Great Listener");
   UPDATE user SET recent_activity = "Earned Great Listener badge" WHERE id = 1;
   UPDATE user SET recent_activity = "Earned SQL Master badge" WHERE id = 1;
   ```

   With transaction, we could make sure that the entire block gets
   issued and execute in the same view of the data:

   ```sql
   BEGIN TRANSACTION;
   INSERT INTO user_badges VALUES (1, "SQL Master");
   UPDATE user SET recent_activity = "Earned SQL Master badge" WHERE id = 1;
   COMMIT;
   ```
