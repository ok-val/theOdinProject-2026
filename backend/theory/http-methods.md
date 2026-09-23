# HTTP Methods

There are four request types that corresponds with the CRUD operations:

| HTTP method | CRUD equiv. |
| ----------- | ----------- |
| **POST**    | CREATE      |
| **GET**     | READ        |
| **PUT**     | UPDATE      |
| **DELETE**  | DELETE      |

## Application

A single route could use multiple methods. For example:

| Path                        | HTTP method | Functionality        |
| --------------------------- | ----------- | -------------------- |
| localhost:3000/blogs        | GET         | Read from DB         |
| localhost:3000/blogs/create | GET         | Read doc creation pg |
| localhost:3000/blogs/       | POST        | Create new doc       |
| localhost:3000/blogs/:id    | GET         | Read a single doc    |
| localhost:3000/blogs/:id    | DELETE      | Delete a single doc  |
| localhost:3000/blogs/:id    | PUT         | Update a single doc  |
