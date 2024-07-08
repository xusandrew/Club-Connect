import { faker } from '@faker-js/faker'
import * as csvWriter from 'csv-writer'
import prisma from '@/lib/prisma'
import path from 'path'

import type { Category } from '@/types/Category'
import type { Club } from '@/types/Club'
import type { Event } from '@/types/Event'
import type { RVSP } from '@/types/RVSP'

const saveToCSV = async (data: any[], filePath: string) => {
  const csvWriterInstance = csvWriter.createObjectCsvWriter({
    path: filePath,
    header: Object.keys(data[0]).map((key) => ({ id: key, title: key })),
  })

  await csvWriterInstance.writeRecords(data)
}

const generateCategories = (numCategories: number): Category[] => {
  const categories = []
  for (let i = 0; i < numCategories; i++) {
    categories.push({
      type: faker.commerce.department(),
    })
  }
  return categories
}

const generateClubs = (
  numCategories: number,
  categories: Category[],
  numClubs: number,
): Omit<Club, 'cid'>[] => {
  const clubs = []
  for (let i = 0; i < numClubs; i++) {
    const categoryIndex = Math.floor(Math.random() * numCategories)

    clubs.push({
      name: faker.company.name(),
      description: faker.company.catchPhrase(),
      category: categories[categoryIndex].type,
      email: faker.internet.email(),
      password: faker.internet.password(),
      instagram: faker.internet.url(),
      discord: faker.internet.url(),
    })
  }
  return clubs
}

const generateEvents = (
  numEvents: number,
): Omit<Event, 'eid' | 'cid' | 'club' | 'posted_time' | 'rvsp_emails'>[] => {
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
    })
  }
  return events
}

const generateRVSPs = (numRVSP: number): Omit<RVSP, 'eid'>[] => {
  const rsvps = []
  for (let i = 0; i < numRVSP; i++) {
    rsvps.push({
      email: faker.internet.email(),
    })
  }
  return rsvps
}

const main = async () => {
  const numCategories = 100
  const numClubs = 10000
  const numEvents = 50000
  const numRVSP = 100000

  const SAVE_TO_CSV = true

  const categories = generateCategories(numCategories)
  const clubs = generateClubs(numCategories, categories, numClubs)
  const events = generateEvents(numEvents)
  const rsvps = generateRVSPs(numRVSP)

  if (SAVE_TO_CSV) {
    await saveToCSV(categories, path.join(__dirname, './categories.csv'))
    await saveToCSV(clubs, path.join(__dirname, './clubs.csv'))
    await saveToCSV(events, path.join(__dirname, './events.csv'))
    await saveToCSV(rsvps, path.join(__dirname, './rsvps.csv'))
  }
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
