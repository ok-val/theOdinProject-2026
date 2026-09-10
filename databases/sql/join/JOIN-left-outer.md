# Left outer JOIN

With explicity inner join, I'd usually get ONLY the available records.

```sql
SELECT students.first_name, students.last_name, student_projects.title
  FROM students
  JOIN student_projects
  ON students.id = student_projects.student_id;
  -- if a student in the students table does not have a project,
  -- their names would not be displayed.
```

To address this issue, I'd use `LEFT OUTER JOIN`.

```sql
SELECT students.first_name, students.last_name, student_projects.title
  FROM students
  LEFT OUTER JOIN student_projects
  ON students.id = student_projects.student_id;
```

| **first_name** | **last_name** | **title**    |
| -------------- | ------------- | ------------ |
| Peter          | Rabbit        | Carrotapault |
| Alice          | Wonderland    | NULL         |

So, `LEFT OUTER JOIN` is what I'd use if I want to include NULL.
