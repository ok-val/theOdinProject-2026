# Order of execution of a Query

Source:

- https://sqlbolt.com/lesson/select_queries_order_of_execution

Here's a complete SELECT query with the basic clauses:

```sql
SELECT DISTINCT /* exec later */ column, AGG_FUNC(column_or_expression), …
FROM mytable
    JOIN another_table
      ON mytable.column = another_table.column
    WHERE constraint_expression
    GROUP BY column
    HAVING constraint_expression
    -- expressions in SELECT
    -- DISTINCT filters here
    ORDER BY column ASC/DESC
    LIMIT count OFFSET COUNT;
```

## Order of execution

1. **FROM then JOIN:** Determines the **total working set of data** that
   is being queried, also including subqueries; may cause temporary
   tables to be created under the hood (i.e. self JOIN).

2. **WHERE constraints:** Starts to narrow down the query set,
   discarding columns and rows _directly from the previously requested_
   tables.

3. **GROUP BY:** The remaining rows are grouped based on common values
   specified by this clause. Again, using GROUP BY is only to paired
   with another AGGREGATE function.

4. **HAVING group constraints:** ONLY IF the query includes the GROUP BY
   clause will this clause be valid.

5. **Expressions** included in SELECT are computed

6. **DISTINCT:** Of the remaining rows, rows (marked with DISTINCT) with
   duplicated values will be discarded.

7. **ORDER BY:** At this point in which all the expressions in the
   SELECT part of the query have been compute, proceed to sort the data.

8. **LIMIT / OFFSET:** Finally, the rows that fall outside the range
   specified here are discarded, leaving the final set of rows to return
   from the query.
