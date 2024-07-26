import type { Event } from '@/types/Event'
import prisma from '@/lib/prisma'
import { unstable_noStore as noStore } from 'next/cache'
import { endOfTomorrow, endOfWeek, startOfTomorrow, startOfWeek } from 'date-fns'
import { Club } from '@/types/Club'
import { RSVP } from '@/types/RSVP'

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

export async function fetchEventsTomorrow() {
  const startOfTomorrowDate = startOfTomorrow()
  const endOfTomorrowDate = endOfTomorrow()
  const events = await prisma.event.findMany({
    orderBy: {
      start_time: 'asc',
    },
    where: {
      AND: [
        { start_time: { gte: startOfTomorrowDate } },
        { start_time: { lte: endOfTomorrowDate } },

      ],
    },
    include: { club: true, rsvp_emails: true },
  })
  return events as Event[]
}

export async function fetchEventsInWeek(weekDate: Date, category?: string, clubId?: number) {
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

    if (clubId) {
      queryOptions.where.AND.push({
        cid: clubId,
      })
    }

    if (clubId) {
      queryOptions.where.AND.push({
        cid: clubId,
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

    if (category !== '') {
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
    console.error('Database Error:', error)
    throw new Error('Failed to fetch club data.')
  }
}

export async function fetchPopularClubs(category?: string, query?: string) {
  noStore()

  try {
    let queryOptions: any = {
      include: {
        category: true,
        event: {
          include: {
            rsvp_emails: true,
          },
        },
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

    if (query) {
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

    const clubs = (await prisma.club.findMany(queryOptions)) as (Club & {
      event: (Event & { rsvp_emails: RSVP[] })[]
    })[]

    const clubsWithAvgRSVP = clubs.map((club) => {
      const events = club.event
      const totalRSVPs = events.reduce((sum, event) => sum + event.rsvp_emails.length, 0)
      const averageRSVPs = events.length > 0 ? totalRSVPs / events.length : 0
      return {
        ...club,
        averageRSVPs,
      }
    })
    const sortedClubs = clubsWithAvgRSVP.sort((a, b) => b.averageRSVPs - a.averageRSVPs)

    return sortedClubs as Club[]
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch club data.')
  }
}
export async function fetchClubById(cid: number) {
  noStore()

  try {
    const club = await prisma.club.findUnique({
      where: { cid },
    })
    return club
  } catch (error) {
    console.error('Database Error:', error)
    // throw new Error('Failed to fetch club data.')
  }
}
