# COALESCE

`COALESCE` takes a list of columns and returns the value in the first
column (LTR order) where the value is not `null`.

<!-- name_meals -->

| id  | name | breakfast | lunch  | dinner |
| --- | ---- | --------- | ------ | ------ |
| 1   | Bubu | Sandwich  | Soup   | `null` |
| 2   | Bebe | Omlette   | Banana | Tofu   |

```sql
SELECT name,
  COALESCE (dinner, lunch, breakfast) AS latest_meal
  FROM name_meals;
```

It could also be used to substitutes NULLs with a specified string:

```sql
SELECT name,
  COALESCE(mobile, '07986 444 2266')
  FROM teacher;
```
