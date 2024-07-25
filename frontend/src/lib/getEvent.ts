'use server'

import prisma from './prisma'
import type { Event } from '@/types/Event'

export async function getEvent(eventID: number, clubID: number) {
  try {
    const event = await prisma.event.findUnique({
      where: {
        eid: eventID,
        cid: clubID,
      },
    })
    if (!event) {
      return undefined
    }
    return event as Event
  } catch (error) {
    console.error('Database Error:', error)
    return undefined
  }
}
