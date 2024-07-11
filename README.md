# Club Connect

cs-348 Project

## Project Description

Sample description of the project.

## Setup
- Clone this repository
- Run the Postgres database: `docker compose up -d`
- cd into "frontend", this folder contains the entire app but it is named frontend because git has an aneurysm whenever I try to rename it to something else
- Install dependencies: `npm i`
- Generate the prisma client: `npx prisma generate`
- Sync up postgres database with our schema (i.e, run migrations): `npx prisma migrate dev`
- Load our sample data into the database: `npx tsx ./prisma/seed.ts`
- Run development server: `npm run dev`
- Preview app at: http://localhost:3000

### Development
- You do not need to generate the prisma client every time you want to run the app. You only need to do this when you make changes to the prisma schema.
- You can also keep the postgres database running in the background, you only need to run `docker compose up -d` once. You can stop the database with `docker compose down`
- To load production data into the database, you can run `npx tsx ./prisma/seed_production.ts`
- **Important**: Pls download the prettier vscode extension to keep our code nice and tidy


### Prisma
- To have a visual representation of the database through Prisma: `npx prisma studio`
- Read this link if you want to learn about migrations: https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate/mental-model
- **Important**: If you make changes to the prisma schema, you need to run `npx prisma migrate dev --name <migration-name>` to create a new migration. This will create a new migration file in the prisma/migrations folder. You can then run `npx prisma migrate dev` to apply the migration to the database.
- If you are getting `Unique constraint failed on the fields` error when seeding the database, you can run `npx prisma migrate reset`  delete all the data in the database (Be careful with this command, it will delete all the data in the database)

### Milestone 1
- 2 simple features implemented are: fetching events from our database + filtering events from our database
