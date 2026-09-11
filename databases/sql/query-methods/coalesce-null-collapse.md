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
