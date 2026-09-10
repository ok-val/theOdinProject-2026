# Read/Write Operations

This is a READ-only operation:

```sql
SELECT * FROM diary_logs WHERE month like "%may%"
```

Where this is a write operation:

```sql
INSERT INTO diary_logs VALUES (id, food, month)
  VALUES (15, "Lasagna", "May");
```

While there are SAFE write operations like `INSERT`, there are UNSAFE
write operations such as:

- UPDATE
- DELETE
- DROP
- ALTER

Because they update exisiting data
