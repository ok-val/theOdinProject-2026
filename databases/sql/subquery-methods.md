## More select methods

```sql
-- instead of
SELECT * FROM exercise_logs WHERE type="biking" AND type="climbing";
-- use the IN keyword
SELECT * FROM exercise_logs WHERE type IN ("biking, climbing");
-- or the NOT IN keyword to invert select
SELECT * FROM exercise_logs WHERE type NOT IN ("biking, climbing");
```

### Subquery method using IN

Let's say if we want to query a set of records from one relation that
exists another relation. This is a query within a query. Pretty cool!

```sql
SELECT * FROM exercise_logs WHERE type IN (
  SELECT type FROM drs_favorites
);
```

### Subquery method using IN and EXACT and INEXACT string matching

```sql
SELECT * FROM exercise_logs WHERE type IN (
  SELECT type FROM drs_favorites WHERE reason="cardiovascular health"
);

SELECT * FROM exercise_logs WHERE type IN (
  SELECT type FROM drs_favorites WHERE reason LIKE "%cardiovascular%"
);
```
