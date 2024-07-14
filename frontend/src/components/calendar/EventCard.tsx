import { format } from 'date-fns'
import type { Event } from '@/types/Event'

export default function CalendarEvent(props: Event) {
  if (!props.start_time || !props.end_time) {
    throw "Event doesn't have a start time! (It's NULL)."
  }
  return (
    <div className='bg-black/10 p-2 text-s'>
      <div className='font-bold text-base text-wrap sm:text-sm truncate'> {props.title} </div>
      <p className='text-yellow-500 sm:text-xs truncate'>@{props.club.name}</p>
      <div className='flex text-secondary text-xs'> {props.location} </div>
      <div className='flex text-secondary italic text-xs'>
        {format(props.start_time, 'p')} - {format(props.end_time, 'p')}
      </div>
    </div>
  )
}
