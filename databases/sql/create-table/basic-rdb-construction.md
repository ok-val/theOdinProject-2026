# Basic Relational database construction

Source:

- https://www.khanacademy.org/computing/computer-programming/sql/relational-queries-in-sql
- https://www.khanacademy.org/computing/computer-programming/sql/further-learning-in-sql/a/further-learning-in-sql-what-to-learn-next

- https://sqlbolt.com/lesson/creating_tables

Let's create a table called Groceries:

1. Create the header rows

```sql
CREATE TABLE groceries (
  id INTEGER PRIMARY KEY,
  name TEXT,
  quantity INTEGER,
);
```

2. Fill in the values (by row)

```sql
-- Every records needs an INSERT statement
INSERT INTO groceries VALUES (
  1,
  "Banana",
  4,
);

INSERT INTO groceries VALUES (
  2,
  "Peanut Butter",
  1,
);

INSERT INTO groceries VALUES (
  3,
  "Dark Choco Bars",
  2,
);
```

3. Print the query result

```sql
SELECT * FROM groceries;
SELECT name FROM groceries;
```

## SQL Syntax

- No trailing commas
- Semi-colons required for every statement
