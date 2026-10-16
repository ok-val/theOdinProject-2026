# INSERTing with SELECT vs VALUES

INSERT takes a query as its row source, for which both SELECT and VALUES
are candidates in that they both attempt to build a tables.

Use VALUES when INSERTing literal rows; anything that returns is coerced
into a literal value.

Use SELECT .. FROM when INSERTing from values from other tables; if it
does not return anything, nothing is coerced into literal values.

## INSERT INTO ... SELECT ... FROM

The SELECT is the row source. Every row it returns becomes one inserted
row.

```sql
INSERT INTO games (name, genre_id)
SELECT 'Hades', id
FROM genres
WHERE name = 'Roguelike';
```

- You can mix literals ('Hades') with columns from the table (id).

- The SELECT must return the same number of columns, in the same order,
  as the column list.

- If the SELECT returns 0 rows, meaning if SELECT id FROM genres .. does
  not return ANY results, there's nothing for 'Hades' to attach to, the
  SELECT returns asymmetric column, nothing is inserted. There's no
  error; the result is INSERT 0 0.

- If it returns 5 rows, 5 rows are inserted.

## INSERT INTO ... VALUES ((SELECT ...))

```sql
INSERT INTO games (name, genre_id)
VALUES ('Hades', (SELECT id FROM genres WHERE name = 'Roguelike'));
```

- The subquery must return one column and at most one row.
- Exactly one row is always inserted (one per VALUES tuple).

- If it returns 0 rows, the cell becomes NULL and the row is still
  inserted. That fails only if the column is NOT NULL.

- If it returns more than 1 row, you get an error: more than one row
  returned by a subquery used as an expression.

Remember when INSERTing using subquery:

```sql
-- Force return ONE row, even if the subquery does not find anything
SELECT 'Hades', (SELECT id FROM genres WHERE name = 'Nonexistent');
-- 1 row: ('Hades', NULL)  ← scalar subquery becomes NULL

-- Return row(s) if there is any match to go with the first row 'Hades'
SELECT 'Hades', id FROM genres WHERE name = 'Nonexistent';
-- 0 rows                  ← the row source is empty
```

See
[[C:/Users/Aorus/Desktop/Work/tutorials/TheOdinProject-2026/backend/projects/inventory/db/queries.js]]
for an implementation of this.
