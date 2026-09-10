```sql
CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  phone TEXT,
  birthdate TEXT
);

INSERT INTO students (first_name, last_name, email, phone, birthdate)
  VALUES ("Peter", "Rabbit", "peter@rabbit.com", "555-6666", "2002-06-24");
INSERT INTO students (first_name, last_name, email, phone, birthdate)
  VALUES ("Alice", "Wonderland", "alice@wonderland.com", "555-4444", "2002-07-04");
INSERT INTO students (first_name, last_name, email, phone, birthdate)
  VALUES ("Aladdin", "Lampland", "aladdin@lampland.com", "555-3333", "2001-05-10");
INSERT INTO students (first_name, last_name, email, phone, birthdate)
  VALUES ("Simba", "Kingston", "simba@kingston.com", "555-1111", "2001-12-24");

CREATE TABLE student_projects (id INTEGER PRIMARY KEY,
  student_id INTEGER,
  title TEXT);

INSERT INTO student_projects (student_id, title)
  VALUES (1, "Carrotapault");
INSERT INTO student_projects (student_id, title)
  VALUES (2, "Mad Hattery");
INSERT INTO student_projects (student_id, title)
  VALUES (3, "Carpet Physics");
INSERT INTO student_projects (student_id, title)
  VALUES (4, "Hyena Habitats");
```

Now, suppose that we want to create pairs of projects for convenient
review... And it's been decided that project 1 should be paired with 2,
while project 3 with project 4.

We could create another table:

```sql
CREATE TABLE project_pairs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project1_id INTEGER,
  project2_id INTEGER,
)

INSERT INTO project_pairs (project1_id, project2_id)
  VALUES (1, 2);

INSERT INTO project_pairs (project1_id, project2_id)
  VALUES (3, 4);
```

| id  | project1_id | project2_id |
| --- | ----------- | ----------- |
| 1   | 1           | 2           |
| 2   | 3           | 4           |

Now, to make this table more informative for human, I want to inject the
actual names of the projects (or other helpful indicators) into this
table.

This would require multiple join (LEFT OUTER JOIN + self JOIN).

```sql
SELECT project_pairs.project1_id, a.title, project_pairs.project2_id, b.title
  FROM project_pairs
  JOIN students_projects a
  ON project_pairs.project1_id = a.id
  JOIN students_projects b
  ON project_pairs.project2_id = b.id
;
```

> [!tip] If multiple join gets confusing, start with separate joins.
> Then add them together with different aliases.
