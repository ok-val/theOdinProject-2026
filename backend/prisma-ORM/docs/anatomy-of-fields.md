# Anatomy of Prisma Fields

The properties of a Model are called Fields (== PSQL column):

- Field name (camelCase)
- Field type (PascalCase, inline with Model name)
- Type Modifier (Opt.)
- Attributes (Opt.; lowercase, PascalCase if native)

A field type could be one of the two categories:

| **Data type** | **Field type** | **Function**         |
| :------------ | :------------- | :------------------- |
| Scalar type   | Scalar field   | Maps to values       |
| Model type    | Relation field | Maps to other Models |

```prisma
model User {
  // Field definition
  //name   //type+modifier  // attribute(s)                     // field type
  id       Int /*required*/ @id      @default(autoincrement())  // scalar
  email    String                                               // scalar
  emailAlt String                                               // scalar
  name     String? // make optional                             // scalar
  isCool   Boolean          @default(true)                      // scalar
  role     Role             @default(USER)                      // relation: Enum
  posts    Post[]  // make list                                 // relation: 1-n
  profile  Profile? //make optional                             // relation: 1-1

  // bulk attribute definition
  @@unique([email, emailAlt])
}
```
