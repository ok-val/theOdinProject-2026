# Why optimizing is important?

Source:

- https://www.khanacademy.org/computing/computer-programming/sql/relational-queries-in-sql/a/more-efficient-sql-with-query-planning-and-optimization

**SQL is a declarative language:**

The statements, keywords, clauses that I use don't tell me what's going
on under-the-hood. It just returns results without allowing me to
following the underlying code that gets me there.

```sql
SELECT * FROM books WHERE author = "J K Rowling";
```

There are two implementations of this command based on the data size:

- **Small?:** Do a full scan, look at every row in the table, return the
  matching ones
- **Big?:** Create an index, make and cache a shallow copy of the table,
  sort it by author, find author PK via binary search, return the PK,
  exit, do a binary search on the original table, return the matching
  rows. Next search would be faster since the shallow copy is already
  cached.

Thing is SQL still decides the triggering threshold here. What can we
do?

## The Lifecycle of a SQL query

For every query, SQL engine goes through these three steps:

1. Parse - catch syntax errors here
2. Optimize - decide implementation based on data size
3. Execute - do it!

## Query tuning

For simpler queries and smaller databases, it's best to leave the
optimization to the engine.

When the query gets more complex, it may reward to tune a query.

1. Figure out which queries should be tuned based on the resources taken
   or, worse, crashing the database.

2. Understand how the SQL engine is executing the query under-the-hood.
   In SQLite, use `EXPLAIN QUERY PLAN` in front of queries. Different
   SQL engines have different implementations, so make sure to check out
   their respective docs.

3. Optimize it! Implement things differently.
