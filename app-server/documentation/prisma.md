# Changing db schema

https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/install-prisma-client-typescript-postgresql

after updating the schema, to run `prisma migrate dev` or `prisma db push`  
this will keep database schema in sync with prisma schema (not recommended in production) and regenerate the prisma client in node modules
