# SQL vs NoSQL

Source: https://circleci.com/blog/sql-vs-nosql-databases/

SQL and NoSQL are two categories of databases. SQL is for relational DBs
and NoSQL is actually... not ONLY SQL.

**SQL databases** are like large, formalized Excel spreadsheets,
organized into rows and columns. The definitions of tables and rows are
called `schema`. These are considered robust.

**NoSQL databases**, or not only relational DBs, are used as document
stores, graph databases, key-value stores, or wide-column data stores.
These are less robust to gain speed and scalability, good for handling
large volumes of unstructured data.

SQL is language with the **American Standards Institute (ANSI)**. It has
some dialects such as T-SQL, PL/SQL. Popular SQL DBMS includes
PostgreSQL, MySQL, etc.

Relationality in SQL is not because you can define relationships between
records using foreign keys. It stems from the mathematical concept of a
'relation' --- a collection of unique tuples.

> A relation is represented as a table, with each tuple in the relation
> making up a row.
>
> Tuple to relation is like Row (or more commonly called record) to
> table.

## Pros and Cons

**Pros:**

- Predictable, robust with structured data. Schema (definition of tables
  and rows) helps validate data. For example, ID field must be unique
  and may not be NULL;
- Easy transfer across other SQL DBMSs;
- Able to normalize data, avoid redudancy, and thereby save storage

**Cons:** Bad with dynamic data

## NoSQL, more like NotOnlySQL

Yes, I may find some SQL in NoSQL databases.

But there's no single definition for NoSQL other than that. Though,
there are four subcategories of NoSQL databases:

1. **Document store:** Look like traditional SQL DBs minus the schema
   and thus normalization. Accepts whatever like a blank Excel sheet.

   Popular document stores include MongoDB, DynamoDB, Firebase,
   Couchbase, and Cosmos DB.

   - Pros: Scales well, dynamic data, no validation = speed
   - Cons: Easy to mess up

2. **Graph database:** Most commonly used for recommendation engines. It
   contains data represented as node and relationships as edges. To find
   data, I have to traverse the tree.

3. **Key-value stores:** Simple key-value storage, nothing fancy to say.
   Perfect for caching or storing session data. Key holds single value.

4. **Wide-column data stores:** Looks like key-value store, but a key
   holds access to multiple columns instead of single data.

## Choose between SQL and NoSQL

How to pick the right tool for the right job?

Simpler, more familiar tool FTW.

SQL is often a good choice for most purposes. If app has special needs,
specialize, but don't chase the glimmers.
