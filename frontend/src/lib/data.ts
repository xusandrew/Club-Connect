import type { Event } from '@/types/Event'
import prisma from './prisma'
import { unstable_noStore as noStore } from 'next/cache'
import { endOfWeek, startOfWeek } from 'date-fns'
import { Club } from '@/types/Club'

export async function fetchEvents(limit: number, idCursor?: number, category?: string) {
  noStore()

  try {
    let events
    let queryOptions: any = {
      take: limit,
      include: { club: true },
    }

    if (idCursor) {
      queryOptions.cursor = { eid: idCursor }
      queryOptions.skip = 1
    }

    if (category) {
      queryOptions.where = {
        club: {
          category: {
            some: {
              type: category,
            },
          },
        },
      }
    }

    events = await prisma.event.findMany(queryOptions)
    return events as Event[]
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch post data.')
  }
}

export async function fetchPopularEvents(limit: number, idCursor?: number, category?: string) {
  noStore()

  try {
    let events
    let queryOptions: any = {
      take: limit,
      include: { club: true, rsvp_emails: true },
      orderBy: {
        rsvp_emails: {
          _count: 'desc',
        },
      },
    }

    if (idCursor) {
      queryOptions.cursor = { eid: idCursor }
      queryOptions.skip = 1
    }

    if (category) {
      queryOptions.where = {
        club: {
          category: {
            some: {
              type: category,
            },
          },
        },
      }
    }

    events = await prisma.event.findMany(queryOptions)
    return events as Event[]
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch post data.')
  }
}

export async function fetchEventsInWeek(weekDate: Date, category?: string) {
  noStore()

  try {
    const startOfWeekDate = startOfWeek(weekDate)
    const endOfWeekDate = endOfWeek(weekDate)

    let queryOptions: any = {
      orderBy: {
        start_time: 'asc',
      },
      where: {
        AND: [{ start_time: { gte: startOfWeekDate } }, { start_time: { lte: endOfWeekDate } }],
      },
      include: { club: true, rsvp_emails: true },
    }

    if (category) {
      queryOptions.where.AND.push({
        club: {
          category: {
            some: {
              type: category,
            },
          },
        },
      })
    }

    const events = await prisma.event.findMany(queryOptions)
    return events as Event[]
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch events data.')
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

export async function fetchClubs(category?: string, query?: string) {
  try {
    let queryOptions: any = {
      include: {
        category: true,
      },
      where: {},
    }

    if (category) {
      queryOptions.where.category = {
        some: {
          type: category,
        },
      }
    }

    if (query !== '') {
      queryOptions.where.OR = [
        {
          name: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: query,
            mode: 'insensitive',
          },
        },
      ]
    }

    const clubs = await prisma.club.findMany(queryOptions)

    return clubs as Club[]
  } catch (error) {
    console.log(query)
    console.error('Database Error:', error)
    throw new Error('Failed to fetch club data.')
  }
}
