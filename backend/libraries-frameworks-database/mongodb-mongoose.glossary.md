# MongoDB glossary

## Data structure

- **Cluster (Server/Deployment):** The top-level physical or cloud
  infrastructure containing all the data.

- **Database (Logical Container):** Contained within a _Cluster_.
  Specified at the end of the DB connection URI string or via connection
  options

- **Collection (Folder/Group):** Contained within a _Database_.
  Collections group related JSON-like documents.

- **Document (equiv. to Record):** Stored within a _Collection_. An
  instance of a compiled model.

## Mongoose components

- **Schema:** Schema is the blueprint that defines the structure, types,
  and validation rules of your data.

- **Model:** is a compiled class constructor that _provides the_
  _interface for CRUD methods_ to interact with your MongoDB
  collections.
