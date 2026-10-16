# Handle INSERT conflict

There are few ways to handle conflict data when INSERTing data:

1. Ignore duplicates (`DO NOTHING`)

```sql
INSERT INTO users (email, name)
VALUES ('alice@example.com', 'Alice')
ON CONFLICT (email) DO NOTHING;
```

2. Update on conflict (`DO UPDATE`)

```sql
INSERT INTO users (email, name)
VALUES ('alice@example.com', 'Alice')
ON CONFLICT (email)
DO UPDATE SET
  -- EXCLUDED is a virtual table containing the values I try to insert.
  -- Here, EXCLUDED.name refers to 'Alice' being set to name anyway.
  name = EXCLUDED.name;
  -- Addition conditions could be added here for this DO UPDATE
```
