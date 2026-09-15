# Multiple unrelated join with matching colunms

Source:

- https://sqlzoo.net/wiki/Self_join

```sql
SELECT DISTINCT r2.num, r2.company, s3.name, r4.num, r4.company
  FROM route AS r1
  JOIN route AS r2
    ON r1.num = r2.num AND r1.company = r2.company
  -- Join unrelated columns
  JOIN route AS r3
  JOIN route AS r4
    ON r3.num = r4.num AND r3.company = r4.company

  JOIN stops AS s1
    ON s1.id = r1.stop
  JOIN stops AS s2
    ON s2.id = r2.stop
  JOIN stops AS s3
    ON s3.id = r3.stop
  JOIN stops AS s4
    ON s4.id = r4.stop

  -- Filter by matching columns
  WHERE s1.name = 'Craiglockhart'
    AND s4.name = 'Lochend'
    AND s2.name = s3.name
```
