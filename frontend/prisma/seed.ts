import { RSVP } from '@/types/RSVP'
import prisma from '../src/lib/prisma'

async function main() {
  // Create Categories
  await prisma.category.createMany({
    data: [
      { type: 'Academic' },
      { type: 'Business & Entrepreneurial' },
      { type: 'Charitable & Community Service' },
      { type: 'Creative Arts & Music' },
      { type: 'Cultural' },
      { type: 'Environmental and Sustainability' },
      { type: 'Games & Recreational' },
      { type: 'Athletic' },
      { type: 'Tech' },
      { type: 'Health' },
      { type: 'Media' },
      { type: 'Political & Social' },
    ],
  })

  // Create Clubs
  const club1 = await prisma.club.create({
    data: {
      email: 'club1@example.com',
      password: 'password1',
      name: 'Tech Club',
      description: 'A club for tech enthusiasts.',
      instagram: 'https://instagram.com/techclub',
      discord: 'https://discord.gg/techclub',
      category: {
        create: [{ category: { connect: { type: 'Tech' } } }],
      },
    },
  })

  const club2 = await prisma.club.create({
    data: {
      email: 'club2@example.com',
      password: 'password2',
      name: 'Art Club',
      description: 'A club for art lovers.',
      instagram: 'https://instagram.com/artclub',
      discord: 'https://discord.gg/artclub',
      category: {
        create: [{ category: { connect: { type: 'Creative Arts & Music' } } }],
      },
    },
  })

  const club3 = await prisma.club.create({
    data: {
      email: 'club3@example.com',
      password: 'password3',
      name: 'Sports Club',
      description: 'A club for sports enthusiasts.',
      instagram: 'https://instagram.com/sportsclub',
      discord: 'https://discord.gg/sportsclub',
      category: {
        create: [{ category: { connect: { type: 'Athletic' } } }],
      },
    },
  })

  const club4 = await prisma.club.create({
    data: {
      email: 'club4@example.com',
      password: 'password4',
      name: 'Music Club',
      description: 'A club for music lovers.',
      instagram: 'https://instagram.com/musicclub',
      discord: 'https://discord.gg/musicclub',
      category: {
        create: [{ category: { connect: { type: 'Creative Arts & Music' } } }],
      },
    },
  })

  const club5 = await prisma.club.create({
    data: {
      email: 'club5@example.com',
      password: 'password5',
      name: 'Drama Club',
      description: 'A club for drama enthusiasts.',
      instagram: 'https://instagram.com/dramaclub',
      discord: 'https://discord.gg/dramaclub',
      category: {
        create: [
          { category: { connect: { type: 'Cultural' } } },
          { category: { connect: { type: 'Creative Arts & Music' } } },
        ],
      },
    },
  })

  const club6 = await prisma.club.create({
    data: {
      email: 'club6@example.com',
      password: 'password6',
      name: 'Science Club',
      description: 'A club for science enthusiasts.',
      instagram: 'https://instagram.com/scienceclub',
      discord: 'https://discord.gg/scienceclub',
      category: {
        create: [{ category: { connect: { type: 'Academic' } } }],
      },
    },
  })

  const club7 = await prisma.club.create({
    data: {
      email: 'club7@example.com',
      password: 'password7',
      name: 'Literature Club',
      description: 'A club for literature lovers.',
      instagram: 'https://instagram.com/literatureclub',
      discord: 'https://discord.gg/literatureclub',
      category: {
        create: [
          { category: { connect: { type: 'Academic' } } },
          { category: { connect: { type: 'Creative Arts & Music' } } },
        ],
      },
    },
  })

  const club8 = await prisma.club.create({
    data: {
      email: 'club8@example.com',
      password: 'password8',
      name: 'Math Club',
      description: 'A club for math enthusiasts.',
      instagram: 'https://instagram.com/mathclub',
      discord: 'https://discord.gg/mathclub',
      category: {
        create: [{ category: { connect: { type: 'Academic' } } }],
      },
    },
  })

  const club9 = await prisma.club.create({
    data: {
      email: 'club9@example.com',
      password: 'password9',
      name: 'Chess Club',
      description: 'A club for chess lovers.',
      instagram: 'https://instagram.com/chessclub',
      discord: 'https://discord.gg/chessclub',
      category: {
        create: [{ category: { connect: { type: 'Games & Recreational' } } }],
      },
    },
  })

  const club10 = await prisma.club.create({
    data: {
      email: 'club10@example.com',
      password: 'password10',
      name: 'Cooking Club',
      description: 'A club for cooking enthusiasts.',
      instagram: 'https://instagram.com/cookingclub',
      discord: 'https://discord.gg/cookingclub',
      category: {
        create: [{ category: { connect: { type: 'Health' } } }],
      },
    },
  })

  const club11 = await prisma.club.create({
    data: {
      email: 'club11@example.com',
      password: 'password11',
      name: 'Photography Club',
      description: 'A club for photography enthusiasts.',
      instagram: 'https://instagram.com/photographyclub',
      discord: 'https://discord.gg/photographyclub',
      category: {
        create: [
          { category: { connect: { type: 'Creative Arts & Music' } } },
          { category: { connect: { type: 'Media' } } },
        ],
      },
    },
  })

  const club12 = await prisma.club.create({
    data: {
      email: 'club12@example.com',
      password: 'password12',
      name: 'Robotics Club',
      description: 'A club for robotics enthusiasts.',
      instagram: 'https://instagram.com/roboticsclub',
      discord: 'https://discord.gg/roboticsclub',
      category: {
        create: [{ category: { connect: { type: 'Tech' } } }],
      },
    },
  })

  const club13 = await prisma.club.create({
    data: {
      email: 'club13@example.com',
      password: 'password13',
      name: 'Gaming Club',
      description: 'A club for gaming enthusiasts.',
      instagram: 'https://instagram.com/gamingclub',
      discord: 'https://discord.gg/gamingclub',
      category: {
        create: [{ category: { connect: { type: 'Games & Recreational' } } }],
      },
    },
  })

  const club14 = await prisma.club.create({
    data: {
      email: 'club14@example.com',
      password: 'password14',
      name: 'Travel Club',
      description: 'A club for travel enthusiasts.',
      instagram: 'https://instagram.com/travelclub',
      discord: 'https://discord.gg/travelclub',
      category: {
        create: [{ category: { connect: { type: 'Games & Recreational' } } }],
      },
    },
  })

  const club15 = await prisma.club.create({
    data: {
      email: 'club15@example.com',
      password: 'password15',
      name: 'Nature Club',
      description: 'A club for nature lovers.',
      instagram: 'https://instagram.com/natureclub',
      discord: 'https://discord.gg/natureclub',
      category: {
        create: [{ category: { connect: { type: 'Environmental and Sustainability' } } }],
      },
    },
  })

  const club16 = await prisma.club.create({
    data: {
      email: 'club16@example.com',
      password: 'password16',
      name: 'Fitness Club',
      description: 'A club for fitness enthusiasts.',
      instagram: 'https://instagram.com/fitnessclub',
      discord: 'https://discord.gg/fitnessclub',
      category: {
        create: [
          { category: { connect: { type: 'Health' } } },
          { category: { connect: { type: 'Athletic' } } },
        ],
      },
    },
  })

  const club17 = await prisma.club.create({
    data: {
      email: 'club17@example.com',
      password: 'password17',
      name: 'History Club',
      description: 'A club for history enthusiasts.',
      instagram: 'https://instagram.com/historyclub',
      discord: 'https://discord.gg/historyclub',
      category: {
        create: [{ category: { connect: { type: 'Academic' } } }],
      },
    },
  })

  const club18 = await prisma.club.create({
    data: {
      email: 'club18@example.com',
      password: 'password18',
      name: 'Film Club',
      description: 'A club for film enthusiasts.',
      instagram: 'https://instagram.com/filmclub',
      discord: 'https://discord.gg/filmclub',
      category: {
        create: [
          { category: { connect: { type: 'Media' } } },
          { category: { connect: { type: 'Creative Arts & Music' } } },
        ],
      },
    },
  })

  const club19 = await prisma.club.create({
    data: {
      email: 'club19@example.com',
      password: 'password19',
      name: 'Volunteer Club',
      description: 'A club for volunteers.',
      instagram: 'https://instagram.com/volunteerclub',
      discord: 'https://discord.gg/volunteerclub',
      category: {
        create: [{ category: { connect: { type: 'Charitable & Community Service' } } }],
      },
    },
  })

  const club20 = await prisma.club.create({
    data: {
      email: 'club20@example.com',
      password: 'password20',
      name: 'Debate Club',
      description: 'A club for debate enthusiasts.',
      instagram: 'https://instagram.com/debateclub',
      discord: 'https://discord.gg/debateclub',
      category: {
        create: [{ category: { connect: { type: 'Political & Social' } } }],
      },
    },
  })

  const club21 = await prisma.club.create({
    data: {
      email: 'club21@example.com',
      password: 'password21',
      name: 'Business Club',
      description: 'A club for business and entrepreneurial enthusiasts.',
      instagram: 'https://instagram.com/businessclub',
      discord: 'https://discord.gg/businessclub',
      category: {
        create: [{ category: { connect: { type: 'Business & Entrepreneurial' } } }],
      },
    },
  })

  // Create Events

  // Club 1
  const club1_events = [
    {
      cid: club1.cid,
      title: 'Intro to Coding Workshop',
      description: 'Learn the basics of coding with Python.',
      location: 'Tech Lab',
      start_time: new Date('2024-07-01T10:00:00Z'),
      end_time: new Date('2024-07-01T12:00:00Z'),
    },
    {
      cid: club1.cid,
      title: 'Web Development Bootcamp',
      description: 'A hands-on bootcamp for building websites.',
      location: 'Conference Room',
      start_time: new Date('2024-07-05T09:00:00Z'),
      end_time: new Date('2024-07-07T17:00:00Z'),
    },
    {
      cid: club1.cid,
      title: 'AI and Machine Learning Seminar',
      description: 'Explore the latest trends in AI and ML.',
      location: 'Auditorium',
      start_time: new Date('2024-07-15T14:00:00Z'),
      end_time: new Date('2024-07-15T16:00:00Z'),
    },
    {
      cid: club1.cid,
      title: 'Tech Talk: Cybersecurity',
      description: 'Discuss cybersecurity best practices.',
      location: 'Tech Lab',
      start_time: new Date('2024-07-20T13:00:00Z'),
      end_time: new Date('2024-07-20T15:00:00Z'),
    },
    {
      cid: club1.cid,
      title: 'Hackathon',
      description: 'A coding competition to build innovative solutions.',
      location: 'Main Hall',
      start_time: new Date('2024-07-25T09:00:00Z'),
      end_time: new Date('2024-07-26T09:00:00Z'),
    },
    {
      cid: club1.cid,
      title: 'Tech Club Meeting',
      description: 'Regular meeting to discuss club activities.',
      location: 'Tech Lab',
      start_time: new Date('2024-07-10T18:00:00Z'),
      end_time: new Date('2024-07-10T20:00:00Z'),
    },
    {
      cid: club1.cid,
      title: 'Tech Expo',
      description: 'Showcase tech projects and innovations.',
      location: 'Exhibition Hall',
      start_time: new Date('2024-07-30T10:00:00Z'),
      end_time: new Date('2024-07-30T16:00:00Z'),
    },
    {
      cid: club1.cid,
      title: 'Digital Marketing Workshop',
      description: 'Learn digital marketing strategies and tools.',
      location: 'Conference Room',
      start_time: new Date('2024-07-12T15:00:00Z'),
      end_time: new Date('2024-07-12T17:00:00Z'),
    },
    {
      cid: club1.cid,
      title: 'Tech Club Social Night',
      description: 'Social gathering for club members.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-18T19:00:00Z'),
      end_time: new Date('2024-07-18T22:00:00Z'),
    },
    {
      cid: club1.cid,
      title: 'Startup Pitch Competition',
      description: 'Pitch your startup ideas to industry experts.',
      location: 'Auditorium',
      start_time: new Date('2024-07-05T13:00:00Z'),
      end_time: new Date('2024-07-05T16:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club1_events })

  // Club 2
  const club2_events = [
    {
      cid: club2.cid,
      title: 'Art Exhibition Opening Night',
      description: 'Grand opening of our art exhibition.',
      location: 'Art Gallery',
      start_time: new Date('2024-07-01T18:00:00Z'),
      end_time: new Date('2024-07-01T21:00:00Z'),
    },
    {
      cid: club2.cid,
      title: 'Oil Painting Workshop',
      description: 'Learn oil painting techniques from experts.',
      location: 'Studio 3',
      start_time: new Date('2024-07-05T10:00:00Z'),
      end_time: new Date('2024-07-05T12:00:00Z'),
    },
    {
      cid: club2.cid,
      title: 'Art History Lecture',
      description: 'Explore the history of art movements.',
      location: 'Conference Room',
      start_time: new Date('2024-07-10T14:00:00Z'),
      end_time: new Date('2024-07-10T16:00:00Z'),
    },
    {
      cid: club2.cid,
      title: 'Sculpture Workshop',
      description: 'Create sculptures using various materials.',
      location: 'Sculpture Studio',
      start_time: new Date('2024-07-15T09:00:00Z'),
      end_time: new Date('2024-07-15T13:00:00Z'),
    },
    {
      cid: club2.cid,
      title: 'Abstract Art Seminar',
      description: 'Discuss techniques and concepts in abstract art.',
      location: 'Art Gallery',
      start_time: new Date('2024-07-20T16:00:00Z'),
      end_time: new Date('2024-07-20T18:00:00Z'),
    },
    {
      cid: club2.cid,
      title: 'Art Club Social Night',
      description: 'Socialize with fellow art enthusiasts.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-25T19:00:00Z'),
      end_time: new Date('2024-07-25T22:00:00Z'),
    },
    {
      cid: club2.cid,
      title: 'Watercolor Painting Workshop',
      description: 'Learn watercolor painting techniques.',
      location: 'Studio 3',
      start_time: new Date('2024-07-12T13:00:00Z'),
      end_time: new Date('2024-07-12T15:00:00Z'),
    },
    {
      cid: club2.cid,
      title: 'Art Club Annual Exhibition',
      description: 'Showcase artworks created by club members.',
      location: 'Exhibition Hall',
      start_time: new Date('2024-07-30T10:00:00Z'),
      end_time: new Date('2024-07-30T16:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club2_events })

  // Club 3 events
  const club3_events = [
    {
      cid: club3.cid,
      title: 'Football Tournament',
      description: 'An inter-club football tournament.',
      location: 'Sports Complex',
      start_time: new Date('2024-07-05T09:00:00Z'),
      end_time: new Date('2024-07-07T17:00:00Z'),
    },
    {
      cid: club3.cid,
      title: 'Basketball Workshop',
      description: 'Learn basketball skills and drills.',
      location: 'Indoor Court',
      start_time: new Date('2024-07-12T14:00:00Z'),
      end_time: new Date('2024-07-12T16:00:00Z'),
    },
    {
      cid: club3.cid,
      title: 'Swimming Competition',
      description: 'A swimming competition for club members.',
      location: 'Pool Area',
      start_time: new Date('2024-07-18T10:00:00Z'),
      end_time: new Date('2024-07-18T13:00:00Z'),
    },
    {
      cid: club3.cid,
      title: 'Fitness Bootcamp',
      description: 'Intensive fitness training sessions.',
      location: 'Fitness Center',
      start_time: new Date('2024-07-22T07:00:00Z'),
      end_time: new Date('2024-07-22T16:00:00Z'),
    },
    {
      cid: club3.cid,
      title: 'Table Tennis Tournament',
      description: 'Compete in a table tennis championship.',
      location: 'Indoor Court',
      start_time: new Date('2024-07-28T15:00:00Z'),
      end_time: new Date('2024-07-28T18:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club3_events })

  // club 4 events
  const club4_events = [
    {
      cid: club4.cid,
      title: 'Live Concert Night',
      description: 'Enjoy live performances by local artists.',
      location: 'Club Stage',
      start_time: new Date('2024-07-05T20:00:00Z'),
      end_time: new Date('2024-07-05T23:00:00Z'),
    },
    {
      cid: club4.cid,
      title: 'Music Theory Workshop',
      description: 'Learn music theory basics and notation.',
      location: 'Music Room',
      start_time: new Date('2024-07-10T14:00:00Z'),
      end_time: new Date('2024-07-10T16:00:00Z'),
    },
    {
      cid: club4.cid,
      title: 'Open Mic Night',
      description: 'Showcase your musical talents on stage.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-15T18:00:00Z'),
      end_time: new Date('2024-07-15T22:00:00Z'),
    },
    {
      cid: club4.cid,
      title: 'Instrument Jam Session',
      description: 'Play and jam with fellow musicians.',
      location: 'Music Room',
      start_time: new Date('2024-07-20T17:00:00Z'),
      end_time: new Date('2024-07-20T19:00:00Z'),
    },
    {
      cid: club4.cid,
      title: 'Music Club Social Mixer',
      description: 'Socialize with other music enthusiasts.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-25T19:00:00Z'),
      end_time: new Date('2024-07-25T21:00:00Z'),
    },
    {
      cid: club4.cid,
      title: 'Songwriting Workshop',
      description: 'Learn the art of songwriting and composition.',
      location: 'Music Room',
      start_time: new Date('2024-07-08T15:00:00Z'),
      end_time: new Date('2024-07-08T17:00:00Z'),
    },
    {
      cid: club4.cid,
      title: 'Music Club Awards Night',
      description: 'Celebrate achievements and talents in music.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-30T19:00:00Z'),
      end_time: new Date('2024-07-30T22:00:00Z'),
    },
    {
      cid: club4.cid,
      title: 'DJ Battle',
      description: 'Compete in a DJ battle with fellow DJs.',
      location: 'Club Stage',
      start_time: new Date('2024-07-12T21:00:00Z'),
      end_time: new Date('2024-07-13T01:00:00Z'),
    },
    {
      cid: club4.cid,
      title: 'Music Club Annual Showcase',
      description: 'Showcase performances by club members.',
      location: 'Club Stage',
      start_time: new Date('2024-07-27T18:00:00Z'),
      end_time: new Date('2024-07-27T22:00:00Z'),
    },
    {
      cid: club4.cid,
      title: 'Music Production Masterclass',
      description: 'Learn music production techniques.',
      location: 'Recording Studio',
      start_time: new Date('2024-07-17T16:00:00Z'),
      end_time: new Date('2024-07-17T18:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club4_events })

  // Club 5
  const club5_events = [
    {
      cid: club5.cid,
      title: 'Play Rehearsal',
      description: 'Rehearsing for our upcoming drama play.',
      location: 'Club Theater',
      start_time: new Date('2024-07-05T18:00:00Z'),
      end_time: new Date('2024-07-05T21:00:00Z'),
    },
    {
      cid: club5.cid,
      title: 'Scriptwriting Workshop',
      description: 'Learn the art of writing compelling scripts.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-10T15:00:00Z'),
      end_time: new Date('2024-07-10T17:00:00Z'),
    },
    {
      cid: club5.cid,
      title: 'Drama Club Talent Show',
      description: 'Showcase your talents on stage!',
      location: 'Club Stage',
      start_time: new Date('2024-07-15T19:00:00Z'),
      end_time: new Date('2024-07-15T22:00:00Z'),
    },
    {
      cid: club5.cid,
      title: 'Improvisation Workshop',
      description: 'Improve your improvisational acting skills.',
      location: 'Club Theater',
      start_time: new Date('2024-07-20T16:00:00Z'),
      end_time: new Date('2024-07-20T18:00:00Z'),
    },
    {
      cid: club5.cid,
      title: 'Costume Design Session',
      description: 'Designing costumes for our next play.',
      location: 'Club Workshop',
      start_time: new Date('2024-07-25T14:00:00Z'),
      end_time: new Date('2024-07-25T16:00:00Z'),
    },
    {
      cid: club5.cid,
      title: 'Drama Club Social Night',
      description: 'Socialize with fellow drama enthusiasts.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-30T19:00:00Z'),
      end_time: new Date('2024-07-30T22:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club5_events })

  // Club 6
  const club6_events = [
    {
      cid: club6.cid,
      title: 'Robotics Workshop',
      description: 'Learn robotics basics and build robots.',
      location: 'Science Lab',
      start_time: new Date('2024-07-05T10:00:00Z'),
      end_time: new Date('2024-07-05T12:00:00Z'),
    },
    {
      cid: club6.cid,
      title: 'Science Fair Preparation',
      description: 'Preparing projects for the upcoming science fair.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-10T14:00:00Z'),
      end_time: new Date('2024-07-10T16:00:00Z'),
    },
    {
      cid: club6.cid,
      title: 'Physics Experiment Demonstration',
      description: 'Demonstrating interesting physics experiments.',
      location: 'Science Lab',
      start_time: new Date('2024-07-15T15:00:00Z'),
      end_time: new Date('2024-07-15T17:00:00Z'),
    },
    {
      cid: club6.cid,
      title: 'Chemistry Lab Session',
      description: 'Performing chemistry experiments and demonstrations.',
      location: 'Science Lab',
      start_time: new Date('2024-07-20T16:00:00Z'),
      end_time: new Date('2024-07-20T18:00:00Z'),
    },
    {
      cid: club6.cid,
      title: 'Biology Field Trip',
      description: 'Exploring biology in the outdoors.',
      location: 'Nature Reserve',
      start_time: new Date('2024-07-25T09:00:00Z'),
      end_time: new Date('2024-07-25T15:00:00Z'),
    },
    {
      cid: club6.cid,
      title: 'Science Club Social Night',
      description: 'Socialize and discuss science topics.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-30T19:00:00Z'),
      end_time: new Date('2024-07-30T22:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club6_events })

  // Club 7
  const club7_events = [
    {
      cid: club7.cid,
      title: 'Book Discussion: Classic Literature',
      description: 'Discussing classic literature masterpieces.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-05T15:00:00Z'),
      end_time: new Date('2024-07-05T17:00:00Z'),
    },
    {
      cid: club7.cid,
      title: 'Poetry Reading Night',
      description: 'Share and enjoy poetry readings.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-10T19:00:00Z'),
      end_time: new Date('2024-07-10T21:00:00Z'),
    },
    {
      cid: club7.cid,
      title: 'Literary Quiz Competition',
      description: 'Test your knowledge in literature!',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-15T16:00:00Z'),
      end_time: new Date('2024-07-15T18:00:00Z'),
    },
    {
      cid: club7.cid,
      title: 'Author Spotlight: Shakespeare',
      description: 'Exploring the works of William Shakespeare.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-20T17:00:00Z'),
      end_time: new Date('2024-07-20T19:00:00Z'),
    },
    {
      cid: club7.cid,
      title: 'Literature Club Social Mixer',
      description: 'Socialize and share literary interests.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-25T18:00:00Z'),
      end_time: new Date('2024-07-25T20:00:00Z'),
    },
    {
      cid: club7.cid,
      title: 'Book Swap Event',
      description: 'Exchange books and discuss favorites.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-30T16:00:00Z'),
      end_time: new Date('2024-07-30T18:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club7_events })

  // Club 8
  const club8_events = [
    {
      cid: club8.cid,
      title: 'Math Problem Solving Competition',
      description: 'Test your math skills in this competition.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-05T14:00:00Z'),
      end_time: new Date('2024-07-05T16:00:00Z'),
    },
    {
      cid: club8.cid,
      title: 'Math Workshop: Algebra Basics',
      description: 'Learn fundamental algebra concepts.',
      location: 'Club Classroom',
      start_time: new Date('2024-07-10T15:00:00Z'),
      end_time: new Date('2024-07-10T17:00:00Z'),
    },
    {
      cid: club8.cid,
      title: 'Math Olympiad Training Session',
      description: 'Prepare for upcoming math competitions.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-15T16:00:00Z'),
      end_time: new Date('2024-07-15T18:00:00Z'),
    },
    {
      cid: club8.cid,
      title: 'Math Club Social Night',
      description: 'Socialize and discuss math concepts.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-20T19:00:00Z'),
      end_time: new Date('2024-07-20T21:00:00Z'),
    },
    {
      cid: club8.cid,
      title: 'Math Puzzle Challenge',
      description: 'Solve challenging math puzzles as a team.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-25T17:00:00Z'),
      end_time: new Date('2024-07-25T19:00:00Z'),
    },
    {
      cid: club8.cid,
      title: 'Math Club Seminar: Geometry',
      description: 'Explore geometry concepts in-depth.',
      location: 'Club Classroom',
      start_time: new Date('2024-07-30T16:00:00Z'),
      end_time: new Date('2024-07-30T18:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club8_events })

  // Club 9
  const club9_events = [
    {
      cid: club9.cid,
      title: 'Chess Tournament',
      description: 'Compete in a chess tournament.',
      location: 'Club Hall',
      start_time: new Date('2024-07-05T14:00:00Z'),
      end_time: new Date('2024-07-05T18:00:00Z'),
    },
    {
      cid: club9.cid,
      title: 'Chess Strategy Workshop',
      description: 'Learn advanced chess strategies.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-10T16:00:00Z'),
      end_time: new Date('2024-07-10T18:00:00Z'),
    },
    {
      cid: club9.cid,
      title: 'Chess Club Social Night',
      description: 'Socialize and play chess with fellow members.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-15T19:00:00Z'),
      end_time: new Date('2024-07-15T21:00:00Z'),
    },
    {
      cid: club9.cid,
      title: 'Chess Puzzle Challenge',
      description: 'Solve challenging chess puzzles.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-20T17:00:00Z'),
      end_time: new Date('2024-07-20T19:00:00Z'),
    },
    {
      cid: club9.cid,
      title: 'Chess Simultaneous Exhibition',
      description: 'Play against a master in a simultaneous exhibition.',
      location: 'Club Hall',
      start_time: new Date('2024-07-25T18:00:00Z'),
      end_time: new Date('2024-07-25T20:00:00Z'),
    },
    {
      cid: club9.cid,
      title: 'Chess Club Awards Ceremony',
      description: 'Celebrate achievements and milestones.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-30T16:00:00Z'),
      end_time: new Date('2024-07-30T18:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club9_events })

  // Club 10

  const club10_events = [
    {
      cid: club10.cid,
      title: 'Healthy Cooking Workshop',
      description: 'Learn to cook nutritious and delicious meals.',
      location: 'Club Kitchen',
      start_time: new Date('2024-07-05T16:00:00Z'),
      end_time: new Date('2024-07-05T18:00:00Z'),
    },
    {
      cid: club10.cid,
      title: 'International Cuisine Night',
      description: 'Explore cuisines from around the world.',
      location: 'Club Dining Area',
      start_time: new Date('2024-07-10T18:00:00Z'),
      end_time: new Date('2024-07-10T20:00:00Z'),
    },
    {
      cid: club10.cid,
      title: 'Cooking Competition: Best Dessert',
      description: 'Compete for the title of best dessert chef.',
      location: 'Club Kitchen',
      start_time: new Date('2024-07-15T17:00:00Z'),
      end_time: new Date('2024-07-15T19:00:00Z'),
    },
    {
      cid: club10.cid,
      title: 'Farm-to-Table Cooking Workshop',
      description: 'Learn to cook using fresh farm ingredients.',
      location: 'Club Kitchen',
      start_time: new Date('2024-07-20T16:00:00Z'),
      end_time: new Date('2024-07-20T18:00:00Z'),
    },
    {
      cid: club10.cid,
      title: 'Cooking Class: Italian Cuisine',
      description: 'Master the art of Italian cooking.',
      location: 'Club Kitchen',
      start_time: new Date('2024-07-25T19:00:00Z'),
      end_time: new Date('2024-07-25T21:00:00Z'),
    },
    {
      cid: club10.cid,
      title: 'Cooking Club Potluck',
      description: 'Bring and share your favorite dishes.',
      location: 'Club Dining Area',
      start_time: new Date('2024-07-30T18:00:00Z'),
      end_time: new Date('2024-07-30T20:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club10_events })
  // Club 11
  const club11_events = [
    {
      cid: club11.cid,
      title: 'Photography Exhibition',
      description: 'Showcase your best photographs in this exhibition.',
      location: 'Club Gallery',
      start_time: new Date('2024-07-05T15:00:00Z'),
      end_time: new Date('2024-07-05T17:00:00Z'),
    },
    {
      cid: club11.cid,
      title: 'Photography Workshop: Landscape Photography',
      description: 'Learn techniques for capturing stunning landscapes.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-10T16:00:00Z'),
      end_time: new Date('2024-07-10T18:00:00Z'),
    },
    {
      cid: club11.cid,
      title: 'Photowalk: City Exploration',
      description: 'Capture the essence of the city through photography.',
      location: 'Club Meeting Point',
      start_time: new Date('2024-07-15T17:00:00Z'),
      end_time: new Date('2024-07-15T19:00:00Z'),
    },
    {
      cid: club11.cid,
      title: 'Photography Contest: Portrait Photography',
      description: 'Compete for the best portrait photograph.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-20T18:00:00Z'),
      end_time: new Date('2024-07-20T20:00:00Z'),
    },
    {
      cid: club11.cid,
      title: 'Photography Masterclass: Light and Shadow',
      description: 'Learn to play with light and shadow in photography.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-25T16:00:00Z'),
      end_time: new Date('2024-07-25T18:00:00Z'),
    },
    {
      cid: club11.cid,
      title: 'Photography Club Social Night',
      description: 'Socialize and share photography tips.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-30T19:00:00Z'),
      end_time: new Date('2024-07-30T21:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club11_events })

  //Club 12
  const club12_events = [
    {
      cid: club12.cid,
      title: 'Robotics Workshop: Introduction to Robotics',
      description: 'Learn the basics of robotics and programming.',
      location: 'Club Robotics Lab',
      start_time: new Date('2024-07-05T14:00:00Z'),
      end_time: new Date('2024-07-05T16:00:00Z'),
    },
    {
      cid: club12.cid,
      title: 'Robotics Competition: Robot Wars',
      description: 'Compete in a thrilling robot battle competition.',
      location: 'Club Arena',
      start_time: new Date('2024-07-10T16:00:00Z'),
      end_time: new Date('2024-07-10T18:00:00Z'),
    },
    {
      cid: club12.cid,
      title: 'Robotics Club Project Showcase',
      description: 'Present your robotics projects to the club.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-15T18:00:00Z'),
      end_time: new Date('2024-07-15T20:00:00Z'),
    },
    {
      cid: club12.cid,
      title: 'Robotics Workshop: Advanced Robotics Techniques',
      description: 'Explore advanced techniques in robotics.',
      location: 'Club Robotics Lab',
      start_time: new Date('2024-07-20T17:00:00Z'),
      end_time: new Date('2024-07-20T19:00:00Z'),
    },
    {
      cid: club12.cid,
      title: 'Robotics Club Social Night',
      description: 'Socialize and network with fellow robotics enthusiasts.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-25T19:00:00Z'),
      end_time: new Date('2024-07-25T21:00:00Z'),
    },
    {
      cid: club12.cid,
      title: 'Robotics Hackathon',
      description: 'Collaborate and innovate in a robotics hackathon.',
      location: 'Club Robotics Lab',
      start_time: new Date('2024-07-30T15:00:00Z'),
      end_time: new Date('2024-07-30T19:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club12_events })

  // Club 13
  const club13_events = [
    {
      cid: club13.cid,
      title: 'Gaming Night: Retro Games',
      description: 'Enjoy classic retro games with fellow gamers.',
      location: 'Club Gaming Room',
      start_time: new Date('2024-07-05T18:00:00Z'),
      end_time: new Date('2024-07-05T21:00:00Z'),
    },
    {
      cid: club13.cid,
      title: 'Esports Tournament: League of Legends',
      description: 'Compete in an exciting League of Legends tournament.',
      location: 'Club Esports Arena',
      start_time: new Date('2024-07-10T16:00:00Z'),
      end_time: new Date('2024-07-10T20:00:00Z'),
    },
    {
      cid: club13.cid,
      title: 'Gaming Workshop: Game Development Basics',
      description: 'Learn the basics of game development.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-15T17:00:00Z'),
      end_time: new Date('2024-07-15T19:00:00Z'),
    },
    {
      cid: club13.cid,
      title: 'Gaming Marathon: Fortnite Night',
      description: 'Join a gaming marathon featuring Fortnite.',
      location: 'Club Gaming Room',
      start_time: new Date('2024-07-20T18:00:00Z'),
      end_time: new Date('2024-07-20T22:00:00Z'),
    },
    {
      cid: club13.cid,
      title: 'Gaming Club Social: Board Games Night',
      description: 'Play board games and socialize with club members.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-25T19:00:00Z'),
      end_time: new Date('2024-07-25T21:00:00Z'),
    },
    {
      cid: club13.cid,
      title: 'Gaming Tournament: FIFA 2024',
      description: 'Compete in a FIFA 2024 tournament.',
      location: 'Club Esports Arena',
      start_time: new Date('2024-07-30T16:00:00Z'),
      end_time: new Date('2024-07-30T20:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club13_events })

  //Club 14
  const club14_events = [
    {
      cid: club14.cid,
      title: 'Travel Photography Workshop',
      description: 'Learn photography techniques for travel photography.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-05T16:00:00Z'),
      end_time: new Date('2024-07-05T18:00:00Z'),
    },
    {
      cid: club14.cid,
      title: 'Travel Club Destination Presentation',
      description: 'Discover upcoming travel destinations.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-10T18:00:00Z'),
      end_time: new Date('2024-07-10T20:00:00Z'),
    },
    {
      cid: club14.cid,
      title: 'Travel Club Social: Travel Stories Night',
      description: 'Share and listen to travel stories from club members.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-15T19:00:00Z'),
      end_time: new Date('2024-07-15T21:00:00Z'),
    },
    {
      cid: club14.cid,
      title: 'Travel Club Workshop: Sustainable Travel Practices',
      description: 'Learn about sustainable travel practices.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-20T17:00:00Z'),
      end_time: new Date('2024-07-20T19:00:00Z'),
    },
    {
      cid: club14.cid,
      title: 'Travel Club Film Screening: Travel Documentaries',
      description: 'Watch inspiring travel documentaries with the club.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-25T18:00:00Z'),
      end_time: new Date('2024-07-25T20:00:00Z'),
    },
    {
      cid: club14.cid,
      title: 'Travel Club Adventure Planning',
      description: 'Plan upcoming adventure trips with the club.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-30T16:00:00Z'),
      end_time: new Date('2024-07-30T18:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club14_events })

  // Club 15
  const club15_events = [
    {
      cid: club15.cid,
      title: 'Nature Walk: Forest Exploration',
      description: 'Explore the local forest and learn about its ecosystems.',
      location: 'Local Forest Reserve',
      start_time: new Date('2024-07-05T09:00:00Z'),
      end_time: new Date('2024-07-05T12:00:00Z'),
    },
    {
      cid: club15.cid,
      title: 'Nature Photography Expedition',
      description: 'Capture stunning nature photographs during this expedition.',
      location: 'Nature Reserve',
      start_time: new Date('2024-07-10T14:00:00Z'),
      end_time: new Date('2024-07-10T17:00:00Z'),
    },
    {
      cid: club15.cid,
      title: 'Nature Conservation Seminar',
      description: 'Attend a seminar on conservation and environmental protection.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-15T16:00:00Z'),
      end_time: new Date('2024-07-15T18:00:00Z'),
    },
    {
      cid: club15.cid,
      title: 'Nature Club Camping Trip',
      description: 'Enjoy a camping trip surrounded by nature.',
      location: 'Campground',
      start_time: new Date('2024-07-20T17:00:00Z'),
      end_time: new Date('2024-07-22T10:00:00Z'),
    },
    {
      cid: club15.cid,
      title: 'Nature Documentary Screening',
      description: 'Watch a documentary on wildlife and nature conservation.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-25T19:00:00Z'),
      end_time: new Date('2024-07-25T21:00:00Z'),
    },
    {
      cid: club15.cid,
      title: 'Nature Club Bird Watching Tour',
      description: 'Join a bird watching tour with experienced guides.',
      location: 'Bird Sanctuary',
      start_time: new Date('2024-07-30T08:00:00Z'),
      end_time: new Date('2024-07-30T11:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club15_events })

  // Club 16
  const club16_events = [
    {
      cid: club16.cid,
      title: 'Fitness Bootcamp',
      description: 'Join an intense fitness bootcamp session.',
      location: 'Club Fitness Center',
      start_time: new Date('2024-07-05T18:00:00Z'),
      end_time: new Date('2024-07-05T20:00:00Z'),
    },
    {
      cid: club16.cid,
      title: 'Yoga and Meditation Workshop',
      description: 'Practice yoga and meditation techniques for relaxation.',
      location: 'Club Yoga Studio',
      start_time: new Date('2024-07-10T16:00:00Z'),
      end_time: new Date('2024-07-10T18:00:00Z'),
    },
    {
      cid: club16.cid,
      title: 'Fitness Club Hiking Trip',
      description: 'Embark on a scenic hiking trip with club members.',
      location: 'Hiking Trail',
      start_time: new Date('2024-07-15T07:00:00Z'),
      end_time: new Date('2024-07-15T12:00:00Z'),
    },
    {
      cid: club16.cid,
      title: 'Fitness Club Nutrition Workshop',
      description: 'Learn about nutrition and healthy eating habits.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-20T17:00:00Z'),
      end_time: new Date('2024-07-20T19:00:00Z'),
    },
    {
      cid: club16.cid,
      title: 'Fitness Club Marathon Training',
      description: 'Prepare for a marathon with structured training sessions.',
      location: 'Club Fitness Center',
      start_time: new Date('2024-07-25T18:00:00Z'),
      end_time: new Date('2024-07-25T20:00:00Z'),
    },
    {
      cid: club16.cid,
      title: 'Fitness Club Zumba Party',
      description: 'Dance and exercise with high-energy Zumba routines.',
      location: 'Club Dance Studio',
      start_time: new Date('2024-07-30T19:00:00Z'),
      end_time: new Date('2024-07-30T21:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club16_events })

  //Club 17
  const club17_events = [
    {
      cid: club17.cid,
      title: 'History Lecture Series: Ancient Civilizations',
      description: 'Attend a lecture series on ancient civilizations.',
      location: 'Club Lecture Hall',
      start_time: new Date('2024-07-05T14:00:00Z'),
      end_time: new Date('2024-07-05T16:00:00Z'),
    },
    {
      cid: club17.cid,
      title: 'Historical Museum Visit',
      description: 'Visit a local historical museum with the club.',
      location: 'Local Museum',
      start_time: new Date('2024-07-10T11:00:00Z'),
      end_time: new Date('2024-07-10T14:00:00Z'),
    },
    {
      cid: club17.cid,
      title: 'History Club Book Discussion',
      description: 'Discuss and analyze a historical book together.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-15T16:00:00Z'),
      end_time: new Date('2024-07-15T18:00:00Z'),
    },
    {
      cid: club17.cid,
      title: 'Historical Film Screening: World War II Documentaries',
      description: 'Watch documentaries about World War II history.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-20T18:00:00Z'),
      end_time: new Date('2024-07-20T20:00:00Z'),
    },
    {
      cid: club17.cid,
      title: 'History Club Debate: Historical Figures',
      description: 'Engage in a debate about prominent historical figures.',
      location: 'Club Debate Hall',
      start_time: new Date('2024-07-25T17:00:00Z'),
      end_time: new Date('2024-07-25T19:00:00Z'),
    },
    {
      cid: club17.cid,
      title: 'Historical Site Excursion: Colonial Era',
      description: 'Explore local historical sites from the colonial era.',
      location: 'Historical Site',
      start_time: new Date('2024-07-30T10:00:00Z'),
      end_time: new Date('2024-07-30T14:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club17_events })

  //Club 18
  const club18_events = [
    {
      cid: club18.cid,
      title: 'Film Screening: Classic Movies Night',
      description: 'Enjoy classic movies from different eras.',
      location: 'Club Theater',
      start_time: new Date('2024-07-05T19:00:00Z'),
      end_time: new Date('2024-07-05T22:00:00Z'),
    },
    {
      cid: club18.cid,
      title: 'Film Club Discussion: Contemporary Cinema Trends',
      description: 'Discuss current trends in contemporary cinema.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-10T17:00:00Z'),
      end_time: new Date('2024-07-10T19:00:00Z'),
    },
    {
      cid: club18.cid,
      title: 'Film Club Documentary Screening: Behind the Scenes',
      description: 'Watch behind-the-scenes documentaries of famous films.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-15T18:00:00Z'),
      end_time: new Date('2024-07-15T20:00:00Z'),
    },
    {
      cid: club18.cid,
      title: 'Film Club Movie Marathon: Genre Exploration',
      description: 'Experience a movie marathon exploring different film genres.',
      location: 'Club Theater',
      start_time: new Date('2024-07-20T14:00:00Z'),
      end_time: new Date('2024-07-20T20:00:00Z'),
    },
    {
      cid: club18.cid,
      title: 'Film Club Guest Speaker: Industry Insights',
      description: 'Listen to a guest speaker talk about the film industry.',
      location: 'Club Auditorium',
      start_time: new Date('2024-07-25T17:00:00Z'),
      end_time: new Date('2024-07-25T19:00:00Z'),
    },
    {
      cid: club18.cid,
      title: 'Film Club Awards Night: Celebrating Cinematic Achievements',
      description: 'Celebrate cinematic achievements with an awards night.',
      location: 'Club Banquet Hall',
      start_time: new Date('2024-07-30T18:00:00Z'),
      end_time: new Date('2024-07-30T22:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club18_events })

  //Club 19
  const club19_events = [
    {
      cid: club19.cid,
      title: 'Community Cleanup Day',
      description: 'Join in cleaning up local parks and streets.',
      location: 'Various Locations',
      start_time: new Date('2024-07-05T09:00:00Z'),
      end_time: new Date('2024-07-05T12:00:00Z'),
    },
    {
      cid: club19.cid,
      title: 'Volunteer Club Fundraising Gala',
      description: 'Attend a gala event to raise funds for charity.',
      location: 'Community Center',
      start_time: new Date('2024-07-10T18:00:00Z'),
      end_time: new Date('2024-07-10T22:00:00Z'),
    },
    {
      cid: club19.cid,
      title: 'Food Drive Campaign',
      description: 'Collect and distribute food to those in need.',
      location: 'Volunteer Club Headquarters',
      start_time: new Date('2024-07-15T13:00:00Z'),
      end_time: new Date('2024-07-15T16:00:00Z'),
    },
    {
      cid: club19.cid,
      title: 'Volunteer Club Blood Donation Drive',
      description: 'Participate in a blood donation drive for hospitals.',
      location: 'Local Blood Donation Center',
      start_time: new Date('2024-07-20T10:00:00Z'),
      end_time: new Date('2024-07-20T14:00:00Z'),
    },
    {
      cid: club19.cid,
      title: 'Volunteer Club Mentorship Program Launch',
      description: 'Launch a mentorship program for underprivileged youth.',
      location: 'Community Center',
      start_time: new Date('2024-07-25T16:00:00Z'),
      end_time: new Date('2024-07-25T18:00:00Z'),
    },
    {
      cid: club19.cid,
      title: 'Volunteer Club Awareness Campaign',
      description: 'Organize an awareness campaign for social issues.',
      location: 'Public Spaces',
      start_time: new Date('2024-07-30T12:00:00Z'),
      end_time: new Date('2024-07-30T15:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club19_events })

  // Club 20
  const club20_events = [
    {
      cid: club20.cid,
      title: 'Debate Club Current Affairs Debate',
      description: 'Engage in a debate on current political affairs.',
      location: 'Club Debate Hall',
      start_time: new Date('2024-07-05T17:00:00Z'),
      end_time: new Date('2024-07-05T19:00:00Z'),
    },
    {
      cid: club20.cid,
      title: 'Debate Club Mock Trial: Legal System',
      description: 'Participate in a mock trial focusing on legal issues.',
      location: 'Courtroom Simulation',
      start_time: new Date('2024-07-10T14:00:00Z'),
      end_time: new Date('2024-07-10T16:00:00Z'),
    },
    {
      cid: club20.cid,
      title: 'Debate Club Policy Debate: Education Reform',
      description: 'Debate policies related to education reform.',
      location: 'Club Meeting Room',
      start_time: new Date('2024-07-15T15:00:00Z'),
      end_time: new Date('2024-07-15T17:00:00Z'),
    },
    {
      cid: club20.cid,
      title: 'Debate Club International Relations Forum',
      description: 'Discuss international relations and diplomacy.',
      location: 'Club Lounge',
      start_time: new Date('2024-07-20T18:00:00Z'),
      end_time: new Date('2024-07-20T20:00:00Z'),
    },
    {
      cid: club20.cid,
      title: 'Debate Club Public Speaking Workshop',
      description: 'Attend a workshop to improve public speaking skills.',
      location: 'Club Auditorium',
      start_time: new Date('2024-07-25T16:00:00Z'),
      end_time: new Date('2024-07-25T18:00:00Z'),
    },
    {
      cid: club20.cid,
      title: 'Debate Club Debate Competition Finals',
      description: 'Witness the finals of the debate competition.',
      location: 'Club Debate Hall',
      start_time: new Date('2024-07-30T15:00:00Z'),
      end_time: new Date('2024-07-30T18:00:00Z'),
    },
  ]

  await prisma.event.createMany({ data: club20_events })

  // Club 21
  await prisma.event.createMany({
    data: [
      {
        cid: club21.cid,
        title: 'Startup Workshop',
        description: 'A workshop on how to start your own business.',
        location: 'Business Hall A',
        start_time: new Date('2024-07-10T09:00:00Z'),
        end_time: new Date('2024-07-10T11:00:00Z'),
      },
      {
        cid: club21.cid,
        title: 'Networking Night',
        description: 'An event to network with business professionals.',
        location: 'Business Hall B',
        start_time: new Date('2024-07-17T18:00:00Z'),
        end_time: new Date('2024-07-17T20:00:00Z'),
      },
      {
        cid: club21.cid,
        title: 'Business Plan Competition',
        description: 'A competition to present your business plan.',
        location: 'Business Hall C',
        start_time: new Date('2024-07-24T14:00:00Z'),
        end_time: new Date('2024-07-24T16:00:00Z'),
      },
      {
        cid: club21.cid,
        title: 'Guest Speaker: John Doe',
        description: 'A talk by John Doe on entrepreneurial success.',
        location: 'Business Hall D',
        start_time: new Date('2024-07-31T10:00:00Z'),
        end_time: new Date('2024-07-31T12:00:00Z'),
      },
      {
        cid: club21.cid,
        title: 'Marketing Strategies Workshop',
        description: 'A workshop on effective marketing strategies.',
        location: 'Business Hall E',
        start_time: new Date('2024-08-07T13:00:00Z'),
        end_time: new Date('2024-08-07T15:00:00Z'),
      },
      {
        cid: club21.cid,
        title: 'Finance for Startups',
        description: 'A session on managing finances for startups.',
        location: 'Business Hall F',
        start_time: new Date('2024-08-14T11:00:00Z'),
        end_time: new Date('2024-08-14T13:00:00Z'),
      },
      {
        cid: club21.cid,
        title: 'Pitching Your Idea',
        description: 'A workshop on how to pitch your business idea.',
        location: 'Business Hall G',
        start_time: new Date('2024-08-21T15:00:00Z'),
        end_time: new Date('2024-08-21T17:00:00Z'),
      },
    ],
  })

  // Adding rsvp
  const events = await prisma.event.findMany()
  const rsvp: { email: string; eid: number }[] = []

  for (let j = 0; j < 20; j++) {
    events.forEach((event, i) => {
      if ((i + j) % 11 === 0) return
      if ((i + j) % 7 === 0) return
      rsvp.push({
        eid: event.eid,
        email: `help${i + j}@example.com`,
      })
    })
  }

  await prisma.rSVP.createMany({ data: rsvp })

  console.log('Seed data created successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
