# Selection methods

- **Select all:**

```sql
SELECT * FROM table_name;
```

- **Select by column(s):**

```sql
SELECT name FROM table_name;
SELECT name, quantity FROM table_name;
```

- **Select and sort:**

```sql
SELECT * FROM table_name ORDER BY quantity;
SELECT name FROM table_name ORDER BY quantity;
```

- **Filter selection with condition(s):**

```sql
SELECT * FROM table_name WHERE quantity > 4;
SELECT * FROM table_name WHERE quantity > 4 AND quantity < 20;
```
