# Alter a table

Imagine that an app has launched and it's been accumulating user data
with the following code. And now, the team decides that we want to have
a new column in the table called emotion.

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT);

CREATE TABLE diary_logs (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    date TEXT,
    content TEXT
    -- emotion TEXT
    -- We cannot do this because it will rerun the table, wiping existing data
    );

/* After user submits a diary log */
INSERT INTO diary_logs (user_id, date, content) VALUES (1, "2015-04-02",
    "OhNoesGuy and I made up and now we're best friends forever and we celebrated with a tub of ice cream.");
```

Two ways, Second is to set

```sql
-- Two ways:
-- First is to leave the past `emotions` records to NULL.
ALTER TABLE diary_logs ADD emotion TEXT;

-- Second is to specify a default value
ALTER TABLE diary_logs ADD emotion TEXT DEFAULT "unknown";

INSERT INTO diary_logs (user_id, date, content) VALUES (1, "2015-04-03",
    "We went to Disneyland :D", "happy");
```
