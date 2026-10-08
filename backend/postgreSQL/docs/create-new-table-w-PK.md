# Create a new db with primary key

1. @psql, create a new database

> CREATE DATABASE <dbname>;

2. Connect to the db

> \c <dbname>;

3. Create a new table inside the db

```sql
CREATE TABLE <table> (
  id INTEGER PRIMARY KEY GENERATE ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);
```

When \d to inspect the list of relations, the schema `usernames_id_seq`
appears as the tracker of `id` of records/rows to be added into each
relations (tables).
