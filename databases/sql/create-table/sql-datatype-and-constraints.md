# Creating tables -- with some customizables

Source:

- https://sqlbolt.com/lesson/creating_tables

Here are a few extra options to safely create tables. Further discussed
in [[best-practice]].

> ↓↓↓ THIS IS A SCHEMA ↓↓↓

```sql
CREATE TABLE IF NOT EXISTS mytable (
    column DataType TableConstraint DEFAULT default_value,
    another_column DataType TableConstraint DEFAULT default_value,
    …
);
```

## Data type keywords

Different databases support different data types. Here are some common
ones:

- INTEGER: whole numbers
- BOOLEAN: 0 or 1 (else error)
- FLOAT (/DOUBLE/REAL): floating points
- TEXT: strings
- CHARACTER(max_chars): characters allocated to fixed-length malloc;
  good for values with consistent lengths (e.g., country codes, phone
  numbers)
- VARCHAR(max_chars): characters allocated to varying-length malloc;
  good for values with fluctuating lengths (e.g., messages, )
- DATE/DATETIME: date formats
- BLOB: binary data blobs

## Table Constraints

These optional keywords gives additional conditions for each column

- PRIMARY KEY: will be checked for uniqueness and NOT NULL
- NOT NULL: required slot for all subsequent INSERTS
- UNIQUE: will be checked for uniqueness; not treated as an identifier
- AUTOINCREMENT (not supported in all DBs): Automatically increment
  value unless otherwise specified
- CHECK(expression): check if the inserted value is valid (insert only
  positive INTEGERS)
- FOREIGN KEY: check for cross-consistency between this column and
  another value of a column in another table
