# Aggregate statements

Yes, we have some reduce algos in SQL!

```sql
-- FROM keyword must follow aggregate immediately
SELECT SUM(quantity) FROM table_name;
SELECT MAX(quantity) FROM table_name;
SELECT MIN(quantity) FROM table_name;
```

Aggregate by group collapse:

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

## Group conditions with HAVING

> The clause HAVING is used specifically with the GROUP BY clause to
> filter grouped rows from the result set.

```sql
SELECT group_by_column, AGG_FUNC(column_expression) AS aggregate_result_alias, …
  FROM mytable
  WHERE condition
  GROUP BY column
  HAVING group_condition;
```

Aggregate filter clauses for aliases using `HAVING`:

```sql
SELECT type, SUM(calories) AS total_calories FROM exercise_logs GROUP BY
type HAVING total_calories > 150;

-- Not to be confused with using WHERE which only applies for records
SELECT type, SUM(calories) AS total_calories FROM exercise_logs GROUP BY
type HAVING total_calories > 150;
```

Aggregate by unique values:

```sql
SELECT DISTINCT name FROM users;

-- Alternatively, this would also achieve the same results
-- But it's more idiomatic to use this with other AGGREGATE functions
SELECT name FROM users GROUP BY name;
```
