import Link from 'next/link'
import { Button } from '@/data/components/ui/button'
import type { Club } from '@/types/Club'
import EventsList from '@/components/events/EventsList'
import { InstagramIcon, DiscordIcon } from '@/components/icons'
import { getSession } from '@/auth'

export async function ClubInfo({ club }: { club: Club }) {
  const session = await getSession()
  const isAdmin = session?.club?.cid === club.cid

  return (
    <div className='w-full mx-auto py-12 px-4 sm:px-6 lg:px-8'>
      <div className='space-y-6'>
        <div className='text-left'>
          <h1 className='text-6xl font-bold text-accent'>{club.name}</h1>
          <p className='mt-3 text-muted-foreground'>{club.description}</p>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col items-center'>
            {club.instagram && (
              <>
                <InstagramIcon className='w-8 h-8 text-foreground' />
                <Link
                  href='#'
                  className='mt-2 text-sm font-medium hover:underline'
                  prefetch={false}
                >
                  {club.instagram}
                </Link>
              </>
            )}
          </div>
          <div className='flex flex-col items-center'>
            {club.discord && (
              <>
                <DiscordIcon className='w-8 h-8 text-foreground' />
                <Link
                  href='#'
                  className='mt-2 text-sm font-medium hover:underline'
                  prefetch={false}
                >
                  {club.discord}
                </Link>
              </>
            )}
          </div>
        </div>
        {isAdmin && (
          <Link href={`/create-event`}>
            <Button variant='outline'>Create an event</Button>
          </Link>
        )}
        <div className='space-y-4'>
          <h2 className='text-4xl font-bold text-accent'>Upcoming Events</h2>
          <EventsList category={''} clubId={club.cid} />
        </div>
      </div>
    </div>
  )
}
