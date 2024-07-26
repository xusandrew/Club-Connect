'use server'

import prisma from './prisma'

export async function editEvent(id: number, _prevState: any, formData: FormData) {
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
    await prisma.event.update({
      where: { eid: id },
      data: {
        title,
        description,
        location,
        start_time,
        end_time,
      },
    })
    return {
      error: '',
      message: 'Event edited successfully.',
    }
  } catch (error) {
    console.error('Database Error:', error)
    return {
      error: 'An error occurred while editing the event.',
      message: '',
    }
  }
}

export async function deleteEvent(id: number) {
  try {
    // Check if the event exists
    const event = await prisma.event.findUnique({
      where: {
        eid: id,
      },
    })

    if (!event) {
      throw new Error(`Event with ID ${id} does not exist.`)
    }

    await prisma.$transaction(async (prisma) => {
      // Delete RSVP records associated with the event
      await prisma.rSVP.deleteMany({
        where: {
          eid: id,
        },
      })

      // Delete the event
      await prisma.event.delete({
        where: {
          eid: id,
        },
      })
    })

    console.log(`Event with ID ${id} and its associated RSVPs have been deleted.`)
  } catch (error) {
    console.error('Error deleting event:', error)
    throw error
  }
}
