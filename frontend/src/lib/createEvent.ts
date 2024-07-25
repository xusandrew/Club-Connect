'use server'

import prisma from '@/lib/prisma'
import type { Club } from '@/types/Club'

export async function createEvent(club: Club, _prevState: any, formData: FormData) {
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const location = formData.get('location') as string
  const start_time = new Date(formData.get('start_time') as string)
  const end_time = new Date(formData.get('end_time') as string)

  if (start_time >= end_time) {
    return {
      error: 'End time must be after start time.',
      message: '',
    }
  }

  try {
    await prisma.event.create({
      data: {
        title,
        description,
        location,
        start_time,
        end_time,
        club: {
          connect: {
            cid: club.cid,
          },
        },
      },
    })
    return {
      error: '',
      message: 'Event created successfully.',
    }
  } catch (error) {
    console.error('Database Error:', error)
    return {
      error: 'An error occurred while creating the event.',
      message: '',
    }
  }
}
