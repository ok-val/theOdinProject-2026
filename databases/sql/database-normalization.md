# Database Normalization

> [!definition] Database normalization
>
> Database normalization is the process of broken down a larger table
> into pieces and storing them across orthogonal tables.

Database normalization is useful because:

- it minimizes duplicate data in any single table and
- it allows the data to grow independently of each other.

Tradeoff: Query often gets a bit more verbose, performance issues may be
found, query tuning may be required for large database
