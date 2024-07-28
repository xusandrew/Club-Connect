# Club Connect

Live website: https://club-connect-tan.vercel.app/

## Project Description

Ever get confused about which club events are happening and when? Well look no further, we are creating a social media platform to centralize all clubs within the University of Waterloo. The users would be any students interested in the clubs at the University. On ClubConnect, students will find events they want to attend, get more information on clubs, and check for upcoming club events.

Postings will be made by club executives and will be viewed by the general public. Club executives sign up/log in, granting them administrator access to create, edit, or change their postings. These users will be the administrators of the database.

The dataset will consist of mocked data of clubs that we generate using AI or Python scripts. We no longer have plans to reach out to school clubs for their actual content.

There will be 2 pages. An explore page, and an infinite scroll page. Any user can access both these pages regardless if they have an account or not. This is similar to UW Flow where anyone can view course and prof reviews.

The explore page will be where users can search for clubs. When the users select a club, they will be shown the Club Page. The Club Page has details about the club, including its category. Examples of categories include, but are not limited to: sports, art, and relaxing.

The infinite scroll page will be the main page /homepage of the website. This is where users can scroll infinitely like on Instagram. Posts will be displayed in chronological order of the posted-time. Most recent posts will be at the top. Additionally, site users can RSVP to club events by utilizing their email addresses. When users RSVP, they will be asked for their email address. The email addresses are used to track stats to show to clubs and also to send reminders to those who have RSVPed that they have registered for an upcoming event.

## Features Implemented

#### Club registration and login
<img width="1567" alt="Screenshot 2024-07-13 at 2 14 34 PM" src="https://github.com/user-attachments/assets/85344689-b70e-44e8-ab74-ab36bce759fb">
<img width="1565" alt="Screenshot 2024-07-13 at 2 14 40 PM" src="https://github.com/user-attachments/assets/165e4340-0a10-4535-b282-7263362facec">

- Registration and login pages can be found in frontend/src/app/{register | login}/page.tsx
- These pages call server actions defined in frontend/src/auth/index.ts which make requests to the database

### Create, Edit and Delete Postings

<img width="1470" alt="image" src="https://github.com/user-attachments/assets/241ad092-5e64-43fa-a60d-0c87b59e6cfa">
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/65cae720-8269-4269-8d51-f02b944a9aff">
- Create posting page can be found at frontend/src/app/create-event/page.tsx
- Edit posting page can be found at frontend/src/app/edit-event/page.tsx

### Infinite scroll feed
<img width="504" alt="image" src="https://github.com/user-attachments/assets/d2448c08-ea78-45e3-ab03-faf55bd4003f">

- The infinite scroll features are implemented in frontend/src/components/events/{PopularEventsList | EventsList}.tsx

#### Sorting events by category
<img width="1568" alt="Screenshot 2024-07-13 at 2 13 29 PM" src="https://github.com/user-attachments/assets/ae6e1e96-6a1c-454d-a725-8b5f8fcb5f6f">

- The events page can be found in frontend/src/app/events/[category]/page.tsx
- The filter bar is located on the events page and is implemented in frontend/src/components/ui/FilterBar.tsx
- The filter bar uses url params to specify which category to filter by, and
  and EventsList component defined in frontend/src/components/events/EventsList.tsx to display the events with the specified category
- The EventsList component fetches events from the api route defined in
  frontend/src/app/api/events/[route].ts
- The api route fetches events calls getEventsInWeek from frontend/src/lib/data.ts to fetch events from the database

#### Sorting by most popular
<img width="1565" alt="Screenshot 2024-07-13 at 2 13 44 PM" src="https://github.com/user-attachments/assets/494cb225-2d82-423f-a4e9-a9a9450530fd">

- The events page can be found in frontend/src/app/events/[category]/page.tsx
- The filter bar is located on the events page and is implemented in frontend/src/components/ui/FilterBar.tsx
- The filter bar has a button that can sort events by most popular, and modifies the url parms to specify the sorting method
- If sorting by most popular, the PopularEventsList component is used to display the events,
  found in frontend/src/components/events/PopularEventsList.tsx
- The PopularEventsList component fetches events from the api route defined in
  frontend/src/app/api/events/popularity/[route].ts
- The api route fetches events calls fetchPopularEvents defined in frontend/src/lib/data.ts
  to fetch events from the database

#### Searching clubs by name
<img width="1183" alt="Screenshot 2024-07-13 at 4 07 25 PM" src="https://github.com/user-attachments/assets/bfde6bd0-8371-426e-9d2c-4f810c234afe">
- Search a club by name
- frontend/src/app/explore/[category]/page.tsx

#### Calendar page
<img width="1572" alt="Screenshot 2024-07-13 at 2 14 28 PM" src="https://github.com/user-attachments/assets/924322b3-2b5a-4a9f-b2df-553cd448c5da">
- All upcoming events in a pretty format
- frontend/src/app/calendar/page.tsx

### Club page
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/4554a4e3-4bea-48db-a157-206ba4206672">
- Displays information about a club and lists only its events
- frontend/src/app/club/[cid]/page.tsx

### Reminder / Notification Email for emails that have RSVPed
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/0eae20d7-1ffa-46e6-bb11-66224157dd96">
<img width="968" alt="image" src="https://github.com/user-attachments/assets/246505bf-48c3-4ada-b75f-c38e32065259">
<img width="968" alt="image" src="https://github.com/user-attachments/assets/3e521abd-a27e-4733-b4b4-b6a75be8195a">
- Sends a email to user when they RSVP, and reminder emails every day at 6am for events the next day
- RSVP modal in frontend/src/components/events/Rsvp.tsx
- RSVP reminder emails are triggered in frontend/src/app/api/rsvp-reminder/route.ts

### Newsletter
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/2babeb58-cc8d-4d15-9d6d-96a0837055bc">
<img width="965" alt="image" src="https://github.com/user-attachments/assets/8c691f69-a0b3-4470-9d38-336c20710128">
<img width="971" alt="image" src="https://github.com/user-attachments/assets/3217021e-e889-4ae1-b057-7937234f2295">
- Users can press the "sign up for newsletter" button on homepage, and get emails weekly regarding the events for that week
- Modal implemented in frontend/src/components/events/NewsletterModal.tsx
- Auto emails are triggered in frontend/src/app/api/newsletter/route.ts

### Notify if there is an overlap between events between any other club on create/edit
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/b932ed5b-b77d-4da9-acf6-e40f5a92d5c7">
- Implemented in frontend/src/app/overlap-event/page.tsx

### For admins, emails that have attended all events of their club
<img width="675" alt="image" src="https://github.com/user-attachments/assets/6ad8275f-5064-4c2c-82ae-605b248e3252">

- Implemented in frontend/src/components/ClubPage/UserRsvpedAllEventsList.tsx

### Dark/Light mode
- You have already seen dark mode, heres light mode
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/113ec1c4-7afc-41f2-8ba6-4d4819a0eefc">
- Implemented in frontend/src/components/ThemeProvider.tsx

### Instagram embed into club page
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/9572f80f-c0a7-471c-a7b0-240ba6ddf3e2">
- Implemented in frontend/src/components/ui/InstaEmbed.tsx

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
- If you are getting `Unique constraint failed on the fields` error when seeding the database, you can run `npx prisma migrate reset` delete all the data in the database (Be careful with this command, it will delete all the data in the database) so that you can repopulate

### React-Email
- To have a visual representation of the emails being edited:
  - `cd /frontend/react-email-starter`
  - `npm i`
  - `npm run dev`
  - To edit and test emails, add your tsx files in `/frontend/react-email-starter/emails` to test visual effects and see changes in real-tome

### Milestone 1

- 2 simple features implemented are: fetching events from our database + filtering events from our database
