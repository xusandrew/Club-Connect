import { Club } from '@/types/Club'
import prisma from '@/lib/prisma'
import { getSession } from '@/auth'
import { MailIcon } from 'lucide-react'
import { Button } from '@react-email/components'

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
          <div className='text-xl font-bold text-accent mb-4'>Emails RSVPed to all club events</div>
          <div className='ml-10'>
            {rsvps.map((rsvp) => (
              <div key={rsvp.email} className='divide-y divide-muted'>
                <div className='flex items-center justify-between p-4 hover:bg-accent transition-colors'>
                  <div className='text-sm font-medium'>{rsvp.email}</div>
                  <Button href={`mailto:${rsvp.email}`}>
                    <MailIcon className='w-4 h-4' />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
