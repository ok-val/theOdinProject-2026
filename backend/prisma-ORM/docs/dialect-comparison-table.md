# Dialect Comparison Table between PSQL, MongoDB, and Prisma ORM

| Concept                | PostgreSQL (SQL)                  | MongoDB (NoSQL)                         | Prisma Schema (`.prisma`)                  |
| :--------------------- | :-------------------------------- | :-------------------------------------- | :----------------------------------------- |
| **Database Container** | Cluster                           |                                         |                                            |
| **Data Container**     | Table                             | Collection                              | Model (`model User { ... }`)               |
| **Row / Record**       | Row / Record                      | Document                                | An individual record (instance of a Model) |
| **Column / Property**  | Column                            | Field                                   | Field (Scalar or Relation)                 |
| **Primary Key ID**     | Primary Key (`SERIAL`, `UUID`)    | `_id` (`ObjectId`)                      | `@id` attribute                            |
| **Foreign Key**        | Foreign Key Column (`author_id`)  | Embedded ID / Reference                 | Scalar field + `@relation` attribute       |
| **Data Types**         | `VARCHAR`, `INTEGER`, `TIMESTAMP` | BSON Types (`String`, `Number`, `Date`) | Scalar types (`String`, `Int`, `DateTime`) |
| **Allowed Value Set**  | `ENUM` type                       | Schema validation rules                 | `enum` block                               |
