# Mongoose library

Source:

- https://article.arunangshudas.com/7-benefits-of-using-mongoose-with-mongodb-in-node-js-bab08ce1693d

## What is Mongoose?

To review, MongoDB is a popular NoSQL document store that stores data in
flexible, JSON-like data. As opposed to SQL or relational DBs, main
benefits of NoSQL include speed, scalability, and compatibility with
dynamic data, however, at the cost of robust schema, and thereby, being
easier to mess up.

**Problem:** The flexibility provided by NoSQL is great but can turn
messy without schema, normalization, validation, or any structure.

> **Solution:** Mongoose is a library that provides an Object Data
> Modelling layer between MongoDB and Node. It addresses aforementioned
> problems by providing clear schema, built-in validation, and other
> powerful querying capabilities, adding functionalities that do not
> exist in the native driver.

| **Feature**  | **Native MongoDB Driver**                | **Mongoose (ODM)**                       |
| ------------ | ---------------------------------------- | ---------------------------------------- |
| What it is   | A direct, low-level translation layer    | A high-level abstraction layer built     |
|              | between Node.js and MongoDB driver.      | on top of the native driver.             |
|              |                                          |                                          |
| Schema       | Schemaless. You can accidentally insert  | Enforces strict schemas at the           |
| Enforcement  | any data structure into any collection.  | application level.                       |
|              |                                          |                                          |
| Validation   | Manual. You must write logic to validate | Built-in. Validates data types, required |
|              | data before inserting it.Built-in.       | fields, and custom rules automatically.  |
|              |                                          |                                          |
| Data Mapping | Returns raw JSON/BSON documents          | Wraps documents in rich JavaScript       |
|              |                                          | objects with built-in helper methods.    |

## Use cases:

- Password encryption
- Logging or auditing
- Timestamps or tracking changes
- Sending emails after registration
- Validation foreign key references

## Mongoose Schema

With the native MongoDB driver, data is entirely unvalidated:

```json
{
  "name": "John",
  "age": "twenty-five",
  "isActive": "yes"
}
```

With Mongoose schema, we could change that:

```js
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0 },
  isActive: { type: Boolean, default: true }
});
```

Mongoose provides the middleware to ensure data integrity before it
reaches the database.

## Simplify queries

With native MongoDB driver, the syntax looks quite clunky:

```js
db.collection('users')
  .find({ age: { $gte: 18 } })
  .toArray();
```

With Mongoose, we have cleaner syntax:

```js
User.find().where('age').gte(18).exec();
```

## Plugin ecosystem

These are just some of the base functionalities that enhance working
experience with MongoDB, other functionalities could be available via
plugin:

- mongoose-paginate
- mongoose-unique-validator
- mongoose-autopopulate
- mongoose-timestamp
