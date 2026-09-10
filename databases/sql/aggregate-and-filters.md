# Aggregate statements

Yes, we have some reduce algos in SQL!

```sql
-- FROM keyword must follow aggregate immediately
SELECT SUM(quantity) FROM table_name;
SELECT MAX(quantity) FROM table_name;
SELECT MIN(quantity) FROM table_name;
```

Aggregate by group:

```sql
-- Total quantity by aisle
SELECT SUM(quantity) FROM table_name GROUP BY aisle;
SELECT aisle, SUM(quantity) FROM table_name GROUP BY aisle;
```

Aggregate and filter by condition:

```sql
-- WHERE is a filtering condition
SELECT COUNT(price) FROM bike_store WHERE color = "yellow";
```

Aggregate and rename:

```sql
SELECT type, SUM(calories) AS total_calories FROM exercise_logs GROUP BY
type;
```

Aggregate filter clauses: `HAVING`:

```sql
SELECT type, SUM(calories) AS total_calories FROM exercise_logs GROUP BY
type HAVING total_calories > 150;

-- Not to be confused with using WHERE which only applies for records
SELECT type, SUM(calories) AS total_calories FROM exercise_logs GROUP BY
type HAVING total_calories > 150;
```
