# Update existing records

Imagine we have a database for diary app as follows:

```sql
-- One table for user id, name and other info
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT);

-- And another for their diary logs
CREATE TABLE diary_logs (
    id INTEGER PRIMARY KEY,
    -- Alternatively, the entry itself could contain a built-in condition
    -- deleted INTEGER,
    user_id INTEGER,
    date TEXT,
    content TEXT
    );

-- After user submitted their new diary log
INSERT INTO diary_logs (user_id, date, content) VALUES (1, "2015-04-01",
    "I had a horrible fight with OhNoesGuy and I buried my woes in 3 pounds of dark chocolate.");

INSERT INTO diary_logs (user_id, date, content) VALUES (1, "2015-04-02",
    "We made up and now we're best friends forever and we celebrated with a tub of ice cream.");
```

```sql
-- Imagine if our user wants to delete an entry
DELETE FROM diary_logs WHERE id = 1;
```

```sql
UPDATE diary_logs
  SET deleted = 1
  WHERE id = 1;
-- To use the built-in conditional column, simply filter the query
SELECT * FROM diary_logs WHERE deleted NOT 1;
```
