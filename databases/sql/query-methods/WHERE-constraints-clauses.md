# More complex clauses with WHERE

| **Operator**        | **Condition**                                                                                         | **SQL Example**                                                    |
| ------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| _number-specific_   | --                                                                                                    | --                                                                 |
| =, !=, <, <=, >, >= | Standard numerical operators                                                                          | col_name != 4                                                      |
| BETWEEN … AND …     | Number is within range of two values (inclusive)                                                      | col_name BETWEEN 1.5 AND 10.5                                      |
| NOT BETWEEN … AND … | Number is not within range of two values (inclusive)                                                  | col_name NOT BETWEEN 1 AND 10                                      |
| IN (…)              | Number exists in a list                                                                               | col_name IN (2, 4, 6)                                              |
| NOT IN (…)          | Number does not exist in a list                                                                       | col_name NOT IN (1, 3, 5)                                          |
| _string-specific_   | --                                                                                                    | --                                                                 |
| =                   | Case sensitive exact string comparison (notice the single equals)                                     | col_name = "abc"                                                   |
| != or <>            | Case sensitive exact string inequality comparison                                                     | col_name != "abcd"                                                 |
| LIKE                | Case insensitive exact string comparison                                                              | col_name LIKE "ABC"                                                |
| NOT LIKE            | Case insensitive exact string inequality comparison                                                   | col_name NOT LIKE "ABCD"                                           |
| %                   | Used anywhere in a string to match a sequence of zero or more characters (only with LIKE or NOT LIKE) | col_name LIKE "%AT%" (matches "AT", "ATTIC", "CAT" or even "BATS") |
| _                   | Used anywhere in a string to match a single character (only with LIKE or NOT LIKE)                    | col_name LIKE "AN_" (matches "AND", but not "AN")                  |
| IN (…)              | String exists in a list                                                                               | col_name IN ("A", "B", "C")                                        |
| NOT IN (…)          | String does not exist in a list                                                                       | col_name NOT IN ("D", "E", "F")                                    |
