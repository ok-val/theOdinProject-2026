# Insert specific records

```sql
CREATE TABLE exercise_logs (
  -- Notice id autoincrement
  (id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT,
  minutes INTEGER,
  calories INTEGER,
  heart_rate INTEGER);
)

-- Insert to all except id (since increment is handled elsewhere)
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ("biking", 30, 100, 110);
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ("biking", 10, 30, 105);
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ("dancing", 15, 200, 120);

SELECT * FROM exercise_logs;
```
