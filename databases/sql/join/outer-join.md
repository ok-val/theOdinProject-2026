# Outer join

While inner joins are convenient, they only result in symmetric data,
displaying data that belongs in both of the tables.

If two tables have asymmetric data, which can easily happen when data is
entered in different stages, then we use a LEFT JOIN, RIGHT JOIN, or
FULL JOIN instead to ensure that the asymmetric parts are not left out.

When joining A to B,

- **LEFT JOIN** includes all rows from A regardless of whether a
  matching row is found in B;

- **RIGHT JOIN** includes all the rows from B regardless of whether a
  matching rows is found in A;

- **FULL JOIN** preserves all rows from both A and B, regardless of
  whether matching rows may exist at all.

Note: The keyword OUTER, often found with outer joins such as the ones
discussed here, is kept for SQL-92 backward compatibility and is not
needed in modern syntax.
