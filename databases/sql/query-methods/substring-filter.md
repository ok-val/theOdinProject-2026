# SUBSTR

`SUBSTR` searches for a specific substring of a given value.

Construction: `SUBSTR(column_name, index, number_of_characters)`

In which:

1. `Column name` is the name of the column to be queried
2. `index` is the starting index of the match
3. `number_of_characters` is the ending index of the match

For example:

```sql
-- for models in the name
SELECT * FROM robots WHERE SUBSTR(name, -4) LIKE '20__';
-- for all models ending with 3080
SELECT * FROM gpus WHERE SUBSTR(model, -4) = '3080';
```
