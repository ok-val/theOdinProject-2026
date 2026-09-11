# Safe creating

1. **Use `CREATE TABLE IF NOT EXISTS`** especially for larger datasets

2. Specify a **data-type appropriate default**

   Source: https://sqlbolt.com/lesson/select_queries_with_nulls

   For example, numerical values could fallback to 0, string data to
   empty strings and so on.

   Sometimes, NULL is preferred IF the default values will skew analysis
   (by means of being anomalies).
