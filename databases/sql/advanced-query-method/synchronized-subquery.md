# Correlated / Synchronized subquery

Correlated subquery refers the values of the outer SELECT within the
inner SELECT via table alias. The subquery only has access to rows
related to a single record at a time in the outer query.

Works like a nested loop. Watch the keyword EACH.

```sql
-- Find the largest country in area FOR EACH continent
SELECT continent, name, area
  FROM world AS a
  WHERE area >= ALL (
    SELECT area
    FROM world AS b
    WHERE a.continent = b.continent
    AND area IS NOT NULL)
```

```sql
-- Find the alphabetic-first of EACH continent
SELECT continent, name
  FROM world AS a
  WHERE name = (
    SELECT name FROM world AS b
    WHERE a.continent = b.continent
    ORDER BY name
    LIMIT 1)
```

```sql
--
SELECT name, continent FROM world AS a
  WHERE a.population >= ALL (
    SELECT population * 3 FROM world AS b
      WHERE b.continent = a.continent
      AND b.population IS NOT NULL
      -- And the subquery cannot compare against itself
      -- Method 1:
      AND b.population NOT IN (
        SELECT MAX(population)
          FROM world AS c
          WHERE c.continent = a.continent))
      -- Method 2:
      AND b.name != a.name
```
