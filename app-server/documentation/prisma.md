# Changing db schema

https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/install-prisma-client-typescript-postgresql

After updating the schema, to run `prisma migrate dev` or `prisma db push`  
This will keep database schema in sync with prisma schema (not recommended in production) and regenerate the prisma client in node modules

`prisma migrate dev` is used to create an SQL migration based on changes in the Prisma schema, apply it, and generate Prisma Client. This command is intended for use when you're comfortable with the changes to your database schema and want to persist them. It generates a history of .sql migration files, which you typically commit to your code repository so that the migration can be applied in other environments. This command requires a shadow database and is not supported on MongoDB. Instead, db push is used for MongoDB.

On the other hand, `prisma db push` is used to create the database schema based on the Prisma schema without any migrations. This command is intended for use while locally prototyping, when you want to quickly try out changes to your database schema. It does not interact with or rely on migrations, meaning the migrations table \_prisma_migrations will not be created or updated, and no migration files will be generated. If db push anticipates that the changes could result in data loss, it will throw an error and require the --accept-data-loss option if you still want to make the changes.

In summary, `prisma migrate dev` is used when you want to persist your database schema changes and generate a history of migrations, while `prisma db push` is used for quick prototyping without the need for migrations.

Vice versa, you may create schemas based off of your database.  
https://www.prisma.io/docs/orm/prisma-schema/introspection#the-prisma-db-pull-command

# Seeding db

Run `npx prisma db seed` after configuring seed data under prisma/seed.ts
