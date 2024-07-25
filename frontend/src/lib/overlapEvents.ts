'use server'

import prisma from './prisma'

export async function isOverlap(newStartTime: Date) {
  const overlappingEvents = await prisma.event.findMany({
    where: {
      AND: [
        {
          start_time: {
            lte: newStartTime,
          },
        },
        {
          end_time: {
            gte: newStartTime,
          },
        },
      ],
    },
  });

  return overlappingEvents.length > 1;
}