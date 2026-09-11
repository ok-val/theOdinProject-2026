## the CASE statement

Wanna conditionally populate a column based on some calculation?
Remember the END keyword

```sql
SELECT COUNT(*),
    CASE
        WHEN number_grade > 90 THEN "A"
        WHEN number_grade > 80 THEN "B"
        WHEN number_grade > 70 THEN "C"
        ELSE "F"
        END AS letter_grade
FROM student_grades
GROUP BY letter_grade;
```
