# How to deal with different naming conventions

## Model

> Prisma Model naming convention following a singular form in
> PascalCase.

However, other standards such as PQSL prefers plural_snake_case. This is
particularly important when migrating from another Datasource.

Prisma provides a way to reconcile these two naming conventions:

> @map (for column name to Prisma Field/Enum value); defined in-fields
>
> @@map (for SQL relation name to Prisma Model name); defined in footer

## Fields

Use singularCamelCase
