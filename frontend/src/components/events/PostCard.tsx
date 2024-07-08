import type { Event } from '@/types/Event'
import { formatDate, formatTimeRange, timeFromNow } from '@/lib/utils'
import { CalendarIcon, LocateIcon } from '../icons'
import { Button } from '@/data/components/ui/button'

type CardProps = {
  event: Event
  openModal: () => void
  setModalEvent: React.Dispatch<React.SetStateAction<Event | undefined>>
}

export function Card({ event, openModal, setModalEvent }: CardProps) {
  const handleRVSPButton = () => {
    openModal()
    setModalEvent(event)
  }

  return (
    <div className='p-4 border border-gray-700 rounded-lg w-[800px]'>
      <h3 className='text-2xl font-bold'>{event.title}</h3>
      <p className='text-yellow-500'>@{event.club.name}</p>
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
        <Button
          onClick={handleRVSPButton}
          className='w-[100px] flex items-centerhover:bg-white hover:text-gray-600 transition-colors duration-300 bg-black'
        >
          RSVP
        </Button>
      </div>
    </div>
  )
}
