import { Club } from '@/types/Club'
import prisma from '@/lib/prisma'
import { getSession } from '@/auth'

export async function UserRvspedAllEventsList({ club }: { club: Club }) {
  const session = await getSession()
  if (session?.club?.cid !== club.cid) {
    throw new Error('RSVP list is only available to club admins')
  }

  const events = await prisma.event.findMany({
    where: {
      cid: club.cid,
    },
  })

  const eventEids = events.map((event) => event.eid)

  const rsvps = await prisma.rSVP.groupBy({
    by: ['email'],
    _count: {
      eid: true,
    },
    where: {
      eid: {
        in: eventEids,
      },
    },
    having: {
      eid: {
        _count: {
          equals: eventEids.length,
        },
      },
    },
  })

  return (
    <div className='py-10'>
      {rsvps.length !== 0 && (
        <>
          <div className='text-xl font-bold text-accent'>Emails RSVPed to all club events</div>
          <div className='ml-10'>
            {rsvps.map((rsvp) => (
              <div key={rsvp.email}>{rsvp.email}</div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
