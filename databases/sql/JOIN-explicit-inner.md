# JOIN Explicit Inner

Imagine we have the following tables, where:

`students.id` is congruent with `student_grades.student_id`.

```sql
CREATE TABLE students (id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT,
    birthdate TEXT);

INSERT INTO students (first_name, last_name, email, phone, birthdate)
    VALUES ("Peter", "Rabbit", "peter@rabbit.com", "555-6666", "2002-06-24");
INSERT INTO students (first_name, last_name, email, phone, birthdate)
    VALUES ("Alice", "Wonderland", "alice@wonderland.com", "555-4444", "2002-07-04");

CREATE TABLE student_grades (id INTEGER PRIMARY KEY,
    student_id INTEGER,
    test TEXT,
    grade INTEGER);

INSERT INTO student_grades (student_id, test, grade)
    VALUES (1, "Nutrition", 95);
INSERT INTO student_grades (student_id, test, grade)
    VALUES (2, "Nutrition", 92);
INSERT INTO student_grades (student_id, test, grade)
    VALUES (1, "Chemistry", 85);
INSERT INTO student_grades (student_id, test, grade)
    VALUES (2, "Chemistry", 95);
```

And the task is to create a table to display students' `first_name`,
`last_name`, and `test` next to their corresponding grades.

One way of doing this is called **Implicit Inner Join**:

```sql
SELECT * FROM students, student_grades
  WHERE student_grades.student_id = students.id;
```

However, this is not the official way of doing this and considered bad
practice because it lacks the functionality that JOIN has to offer.

So here's the more SQL-idiomatic version called **Explicit Inner Join**:

```sql
SELECT students.first_name, students.last_name, student_grades.test,
student_grades.grade FROM students
  JOIN student_grades
  ON students.id = student_grades.student_id
  -- Additional filters like WHERE could go here
  ;
```

In which:

- The table `student` is the initial table and `student_grades` is the
  table to be joined. The initial table is often used in the first
  column in the table.

- The ON keyword maps between the two tables.

- Dot notation (i.e., `students.first_name`) is used instead of just
  `first_name` to ensure that the data streams from the correct origin
  in the particular case where the tables to be joined both have a
  column with the same name. Such as:

  ```sql
  SELECT persons.name, hobbies.name FROM persons
    JOIN hobbies
    ON hobbies.person_id = persons.id;
  ```
