import { Event } from './Event'

export const mockEvents: Event[] = [
  {
    title: 'Annual Science Fair',
    club: 'Science Club',
    description: 'Join us for a day of exciting scientific exhibits and experiments.',
    location: 'Main Hall',
    startTime: new Date('2024-07-15T09:00:00'),
    endTime: new Date('2024-07-15T17:00:00'),
    createdAt: new Date(),
  },
  {
    title: 'Tech Talk: Future of AI',
    club: 'Tech Club',
    description: 'A discussion on the advancements and future of artificial intelligence.',
    location: 'Conference Room B',
    startTime: new Date('2024-07-18T14:00:00'),
    endTime: new Date('2024-07-18T16:00:00'),
    createdAt: new Date(),
  },
  {
    title: 'Art Exhibition',
    club: 'Art Club',
    description: 'Showcasing artwork from local artists.',
    location: 'Art Gallery',
    startTime: new Date('2024-07-20T10:00:00'),
    endTime: new Date('2024-07-20T19:00:00'),
    createdAt: new Date(),
  },
  {
    title: 'Coding Workshop',
    club: 'Computer Science Club',
    description: 'Hands-on workshop on modern web development techniques.',
    location: 'Lab 3',
    startTime: new Date('2024-07-22T13:00:00'),
    endTime: new Date('2024-07-22T17:00:00'),
    createdAt: new Date(),
  },
  {
    title: 'Music Concert',
    club: 'Music Club',
    description: 'Live performances by student bands.',
    location: 'Auditorium',
    startTime: new Date('2024-07-25T18:00:00'),
    endTime: new Date('2024-07-25T21:00:00'),
    createdAt: new Date(),
  },
  {
    title: 'Prod Club: Track Roast',
    club: 'JamNetwork',
    description:
      'What’s burning JamNetworkians? Production Club is bringing a classic Track Roast session to you this Thursday at 6pm in AL 210. For those who don’t know, our “track roast” sessions provide a space for people to share their tracks and gain constructive criticism! This event is open to all—so bring your tracks (or come without one!) and be ready to share in a fun learning environment!',
    location: 'ML 203',
    startTime: new Date('2024-17-25T18:00:00'),
    endTime: new Date('2024-17-25T19:00:00'),
    createdAt: new Date(),
  },
]
