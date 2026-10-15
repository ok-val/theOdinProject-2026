# Update Records using Foreign Values

For psql, WHERE clause is used to link the relations before the
conditions begin

```sql
UPDATE contribution AS c
  SET instrument = $1,
      leader = $2

  -- To update records using foreign values, use WHERE clause to link relations together
  FROM record AS r, artist AS a
  WHERE c.record_id = r.id
    AND c.artist_id = a.id

    -- Conditions begin
    AND r.name = $3
    AND a.name = $4
    AND c.instrument = $5;
```
