'use server'

import prisma from './prisma'

export async function isOverlap(newStartTime: Date, newEndTime: Date) {
  const overlappingEvents = await prisma.event.findMany({
    where: {
      AND: [
        {
          start_time: {
            lt: newEndTime,
          },
        },
        {
          end_time: {
            gte: newStartTime,
          },
        },
      ],
    },
  })

  return overlappingEvents.length - 1
}
