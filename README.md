# Club Connect

cs-348 Project

## Project Description
Ever get confused about which club events are happening and when? Well look no further, we are creating a social media platform to centralize all clubs within the University of Waterloo. The users would be any students interested in the clubs at the University. On ClubConnect, students will find events they want to attend, get more information on clubs, and check for upcoming club events.

Postings will be made by club executives and will be viewed by the general public. Club executives sign up/log in, granting them administrator access to create, edit, or change their postings. These users will be the administrators of the database. 

The dataset will consist of mocked data of clubs that we generate using AI or Python scripts. We no longer have plans to reach out to school clubs for their actual content.

There will be 2 pages. An explore page, and an infinite scroll page. Any user can access both these pages regardless if they have an account or not. This is similar to UW Flow where anyone can view course and prof reviews. 

The explore page will be where users can search for clubs. When the users select a club, they will be shown the Club Page. The Club Page has details about the club, including its category. Examples of categories include, but are not limited to: sports, art, and relaxing.

The infinite scroll page will be the main page /homepage of the website. This is where users can scroll infinitely like on Instagram. Posts will be displayed in chronological order of the posted-time. Most recent posts will be at the top. Additionally, site users can RSVP to club events by utilizing their email addresses. When users RSVP, they will be asked for their email address. The email addresses are used to track stats to show to clubs and also to send reminders to those who have RSVPed that they have registered for an upcoming event.

## Features Implemented

#### Club registration and login
- Registration and login pages can be found in frontend/src/app/{register | login}/page.tsx
- These pages point to forms located in frontend/data/components/{register | login}.tsx
- These forms call server actions defined in frontend/src/auth/index.ts which make requests to the database

#### Sorting events by category
- The events page can be found in frontend/src/app/events/[category]/page.tsx
- The filter bar is located on the events page and is implemented in frontend/src/components/events/FilterBar.tsx
- The filter bar uses url params to specify which category to filter by, and 
and EventsList component defined in frontend/src/components/events/EventsList.tsx to display the events with the specified category
- The EventsList component fetches events from the api route defined in 
frontend/src/app/api/events/[route].ts
- The api route fetches events calls getEventsInWeek from frontend/src/lib/data.ts to fetch events from the database

#### Sorting by most popular
- The events page can be found in frontend/src/app/events/[category]/page.tsx
- The filter bar is located on the events page and is implemented in frontend/src/components/events/FilterBar.tsx
- The filter bar has a button that can sort events by most popular, and modifies the url parms to specify the sorting method
- If sorting by most popular, the PopularEventsList component is used to display the events,
found in frontend/src/components/events/PopularEventsList.tsx
- The PopularEventsList component fetches events from the api route defined in
frontend/src/app/api/events/popularity/[route].ts
- The api route fetches events calls fetchPopularEvents defined in frontend/src/lib/data.ts
to fetch events from the database


## Setup
- Clone this repository
- Run the Postgres database: `docker compose up -d`
- cd into "frontend", this folder contains the entire app but it is named frontend because git has an aneurysm whenever I try to rename it to something else
- Install dependencies: `npm i`
- Generate the prisma client: `npx prisma generate`
- Sync up postgres database with our schema (i.e, run migrations): `npx prisma migrate dev`
- Load data into the database. For sample data, run: `npx tsx ./prisma/seed.ts` or for production data, run: `npx tsx ./prisma/seed_production.ts`
- Run development server: `npm run dev`
- Preview app at: http://localhost:3000

### Development
- You do not need to generate the prisma client every time you want to run the app. You only need to do this when you make changes to the prisma schema.
- You can also keep the postgres database running in the background, you only need to run `docker compose up -d` once. You can stop the database with `docker compose down`
- **Important**: Pls download the prettier vscode extension to keep our code nice and tidy


### Prisma
- To have a visual representation of the database through Prisma: `npx prisma studio`
- Read this link if you want to learn about migrations: https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate/mental-model
- **Important**: If you make changes to the prisma schema, you need to run `npx prisma migrate dev --name <migration-name>` to create a new migration. This will create a new migration file in the prisma/migrations folder. You can then run `npx prisma migrate dev` to apply the migration to the database.
- If you are getting `Unique constraint failed on the fields` error when seeding the database, you can run `npx prisma migrate reset`  delete all the data in the database (Be careful with this command, it will delete all the data in the database) so that you can repopulate

### Milestone 1
- 2 simple features implemented are: fetching events from our database + filtering events from our database
