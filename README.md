# cs-348-project

## Project Description

## Setup
- Clone this repository
- Run the Docker container + Postgres database: `docker compose up -d`
    - This is just for the server to access the database, you can skip this if you are only doing frontend development

### Development
- cd into "frontend", this folder contains the entire app but it is named frontend because git has an aneurysm whenever I try to rename it to something else
- Install dependencies: `npm i`
- Run development server: `npm run dev`
- Preview app at: http://localhost:3001

### Prisma
- To have a visual representation of the database through Prisma: `npx prisma studio`
- To seed the database: `npx prisma generate`
- To apply changes to the database schema: `npx prisma run migrate`
- To modify the database seed, edit the file: `frontend\prisma\seed.ts`