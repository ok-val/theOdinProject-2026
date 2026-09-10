## Self JOIN

Imagine a scenario where a table should reference itself:

```sql
CREATE TABLE students (id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT,
    birthdate TEXT,
    -- notice buddy_id corresponds with students.id
    buddy_id INTEGER);

INSERT INTO students
    VALUES (1, "Peter", "Rabbit", "peter@rabbit.com", "555-6666", "2002-06-24", 2);
INSERT INTO students
    VALUES (2, "Alice", "Wonderland", "alice@wonderland.com", "555-4444", "2002-07-04", 1);
INSERT INTO students
    VALUES (3, "Aladdin", "Lampland", "aladdin@lampland.com", "555-3333", "2001-05-10", 4);
INSERT INTO students
    VALUES (4, "Simba", "Kingston", "simba@kingston.com", "555-1111", "2001-12-24", 3);
```

To use self-join, I use an alias for the table to be joined (in the JOIN
clause):

```sql
SELECT first_name, buddies.first_name AS buddy_first_name
  FROM students
  -- student buddies is an alias of students
  -- which also shows NULL
  LEFT OUTER JOIN students buddies
  -- this is where the mapping happens
  ON students.buddy_id = buddies.id
```
