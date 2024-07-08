import { faker } from '@faker-js/faker'
import * as csvWriter from 'csv-writer'
import prisma from '@/lib/prisma'
import path from 'path'

import type { Club } from '@/types/Club'
import type { Event } from '@/types/Event'
import type { RVSP } from '@/types/RVSP'

const CATEGORIES = [
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
]

const saveToCSV = async (data: any[], filePath: string) => {
  const csvWriterInstance = csvWriter.createObjectCsvWriter({
    path: filePath,
    header: Object.keys(data[0]).map((key) => ({ id: key, title: key })),
  })

  await csvWriterInstance.writeRecords(data)
}

const generateClubs = (numClubs: number): Omit<Club, 'cid'>[] => {
  const clubs = []
  const uniqueEmails = new Set<string>()
  const uniqueNames = new Set<string>()

  for (let i = 0; i < numClubs; i++) {
    let name, email
    do {
      name = faker.company.name()
      email = faker.internet.email()
    } while (uniqueEmails.has(email) || uniqueNames.has(name))

    uniqueEmails.add(email)
    uniqueNames.add(name)

    const categoryIndex = Math.floor(Math.random() * CATEGORIES.length)
    clubs.push({
      name: name,
      description: faker.company.catchPhrase(),
      category: CATEGORIES[categoryIndex].type,
      email: email,
      password: faker.internet.password(),
      instagram: faker.internet.url(),
      discord: faker.internet.url(),
    })
  }
  return clubs
}

const generateEvents = (
  numEvents: number,
): Omit<Event, 'eid' | 'cid' | 'club' | 'rvsp_emails'>[] => {
  const dateOptions = {
    years: 1,
  }

  const buildingCodes = ['E2', 'E3', 'DC', 'ART', 'MC', 'M3', 'DC', 'PHY', 'CHEM 2', 'STC']

  const events = []

  for (let i = 0; i < numEvents; i++) {
    let start_time = faker.date.future(dateOptions)
    let end_time = faker.date.future(dateOptions)

    if (start_time > end_time) {
      const temp = start_time
      start_time = end_time
      end_time = temp
    }

    const buildingCode = buildingCodes[Math.floor(Math.random() * buildingCodes.length)]
    const roomNumber = Math.floor(Math.random() * 100)

    events.push({
      title: faker.company.catchPhrase(),
      description: faker.lorem.paragraph(),
      location: `${buildingCode} ${roomNumber}`,
      start_time: start_time,
      end_time: end_time,
      posted_time: faker.date.past(dateOptions),
    })
  }
  return events
}

const generateRVSPs = (numRVSP: number): Omit<RVSP, 'eid'>[] => {
  const rsvps = []
  const uniqueEmails = new Set<string>()

  for (let i = 0; i < numRVSP; i++) {
    let email
    do {
      email = faker.internet.email()
    } while (uniqueEmails.has(email))
    rsvps.push({
      email,
    })
  }
  return rsvps
}

const main = async () => {
  const numClubs = 200
  const numEvents = 1000
  const numRVSP = 5000

  const clubs = generateClubs(numClubs)
  const events = generateEvents(numEvents)
  const rsvps = generateRVSPs(numRVSP)

  await saveToCSV(clubs, path.join(__dirname, './clubs.csv'))
  await saveToCSV(events, path.join(__dirname, './events.csv'))
  await saveToCSV(rsvps, path.join(__dirname, './rsvps.csv'))
  console.log('Data generated successfully')
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
