import type { Event } from '@/types/Event'
import Link from 'next/link'
import { formatDate, formatTimeRange, timeFromNow } from '@/lib/utils'
import { CalendarIcon, EmailIcon, LocateIcon } from '../icons'
import { Button } from '@/data/components/ui/button'
import { useState, useEffect } from 'react'
import { getSession } from '@/auth'
import { Club } from '@/types/Club'
import { useRouter } from 'next/navigation'

type CardProps = {
  event: Event
  openModal: () => void
  setModalEvent: React.Dispatch<React.SetStateAction<Event | undefined>>
}

type StateType = {
  [key: string]: any;
  club: Club;
} | undefined;

export function Card({ event, openModal, setModalEvent }: CardProps) {

  const [session, setSession] = useState<StateType>();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(()=>{
    getSession().then((s) => {setSession(s)}).catch((error) => {alert(error)})
  }, [])

  useEffect(()=>{
    setIsAdmin(session?.club?.cid === event.cid)
  }, [session])

  const handleRSVPButton = () => {
    openModal()
    setModalEvent(event)
  }

  const router = useRouter();
  const handleEditEvent = () => {
    const queryString = new URLSearchParams({eid: event.eid.toString()});
    router.push(`/edit-event?${queryString}`);
  }

  const clubPageLink = `/club/${event.club.cid}`

  return (
    <div className='p-4 border border-gray-700 rounded-lg w-[800px]'>
      <h3 className='text-2xl font-bold'>{event.title}</h3>
      <Link href={clubPageLink} className='text-yellow-500'>
        @{event.club.name}
      </Link>
      <p className='mt-2 '>{event.description}</p>
      <div className='flex items-center content-center mt-4 space-x-4'>
        <div className='flex items-center space-x-2'>
          <CalendarIcon className='h-5 w-5' />
          {event.start_time !== null && (
            <span>
              {formatDate(event.start_time)} | {formatTimeRange(event.start_time, event.end_time)}
            </span>
          )}
        </div>
        <div className='flex items-center space-x-2'>
          <LocateIcon className='h-5 w-5' />
          <span>{event.location}</span>
        </div>
        <span className='ml-auto text-gray-500'>
          {event.start_time ? timeFromNow(event.start_time) : ''}
        </span>
        <div className='flex items-center'>
          <Button
            onClick={handleRSVPButton}
            className='w-[70px] flex items-center transition-colors gap-2 duration-300 bg-black'
          >
            <EmailIcon className='text-white' />
            {event.rsvp_emails && <p className='text-white'>{event.rsvp_emails.length}</p>}
          </Button>
        </div>
        {isAdmin &&
        <div>
          <button onClick={handleEditEvent}>
            edit
          </button>
        </div>
        }
      </div>
    </div>
  )
}
