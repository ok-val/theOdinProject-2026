# record

| id  | name                      | year |
| --- | ------------------------- | ---- |
| 1   | Poinciana                 | 1951 |
| 2   | Nights of Ballads & Blues | 1963 |

# artist

| id  | name        |
| --- | ----------- |
| 1   | Ahmad Jamal |
| 2   | McCoy Tyner |

# contribution

| record_id | artist_id | instrument | role   |
| --------- | --------- | ---------- | ------ |
| 1         | 1         | piano      | leader |
| 2         | 2         | piano      | leader |

```sql
CREATE TABLE record (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  year INTEGER
);

CREATE TABLE artist (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE contribution (
  record_id INTEGER NOT NULL REFERENCES record(id) ON DELETE CASCADE,
  artist_id INTEGER NOT NULL REFERENCES artist(id) ON DELETE CASCADE,
  instrument VARCHAR(255),
  leader BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY (record_id, artist_id, instrument)
);
-- `contribution` doesn't have a PK column, but rather references
-- foreign keys that point to the IDs that already exist (`artist` and
-- `record` must precede): `REFERENCES <table(column)>` handles this

-- `PRIMARY KEY (column)` ensures each permutation of the column is
-- unique. The inclusion of the instrument column allows one artist per
-- album to have multiple instrument values.
```
