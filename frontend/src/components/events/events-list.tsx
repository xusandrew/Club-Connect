import { Card } from './post-card'
import type { Event } from '@/types/Event'

type EventsListProps = {
  initialEvents: Event[]
}

export default function EventsList({ initialEvents }: EventsListProps) {
  return (
    <div className='flex flex-col gap-3'>
      {initialEvents.map((event) => (
        <Card key={event.eid} event={event} />
      ))}
    </div>
  )
}
