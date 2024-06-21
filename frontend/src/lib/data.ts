import { PrismaClient } from '@prisma/client'
import { unstable_noStore as noStore } from 'next/cache'

const prisma = new PrismaClient()

export async function fetchEvents(category?: string) {
  noStore()

  try {
    let events

    if (category) {
      events = await prisma.event.findMany({
        where: {
          club: {
            category: {
              some: {
                type: category,
              },
            },
          },
        },
        include: { club: true },
      })
    } else {
      events = await prisma.event.findMany({
        include: { club: true },
      })
    }
    return events
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch post data.')
  }
}

export async function fetchCategories() {
  noStore()

  try {
    const categories = await prisma.category.findMany()
    return categories
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch category data.')
  }
}
