# What is database?

SQL --- **Structured Query Language** is the database language that is
used to query DBs.

What's difficult about using SQL is to be able to visualize in your head
what SQL commands are actually doing.

## Databases

Basically, a database is a structured set of data stored in a computer.

Database management is important because if data + algo = program, where
are you storing your data? And how do you **structure and organize** it
for algo access? How efficiently? How safely?

> [!important] The key challenge about data is how do you structure it?

## The problem structured data is solving

Unstructured data is data that contains information without any
structure, such as contnents in side emails, books, or images.

Unstructured data might work only in small amount. Once the data scales,
the sheer amount of content makes it difficult to search and make sense
of. So we need a way to organize or structure the data.

One way to structure data is to store it in a tabular (table) format,
such as in spreadsheets.

## Relational database

A common way of storing structured data is via a relational database.

> [!definition] Relational Database
>
> A relational database is a type of database that organizes data into
> sets of interrelated tables.
>
> These tables are considered as Relations, which dictate how data
> across different tables can _interact and overlap_, which minimizes
> duplicated info and create neatly structured, highly efficient storage
> and retrieval of nested data.

A relational DB is organized according to the relational model of data.
The _relational model_ of data defines a set of relations and describes
the relationship, and connections, which determines how the relations
interact.

Imagine a hash table but now the keys in one relation (table) can be
used to access values in other relations. This is useful because we
don't need another set of hash map to store potential duplicated info.

## Relation DB management system

A relational data management system, or RDBMS, is a software application
for managing relational DBs, allow the user (a human or other system) to
interact with a DB by issuing commands with certain syntax, conventions,
and standards.

Among the RDBMS, there are:

| **Relational (SQL)** | **Non-relational (NoSQL)** |
| -------------------- | -------------------------- |
| SQLite               | MongoDB                    |
| MS SQL               |                            |
| PostgreSQL           |                            |
| MySQL                |                            |

Tradeoff:

- Lightweight <--> Robust;
- Scalable <--> Hard to install
