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

Aggregate by condition:

```sql
SELECT COUNT(price) FROM bike_store WHERE color = "yellow";
```
