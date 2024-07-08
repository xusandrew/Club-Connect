import { Card } from './PostCard'
import { Event } from '@/types/Event'
import { WeekCard } from './WeekCard'

type WeekListProps = {
  events: Event[]
  week: Date
}

export default function WeekList({ events, week }: WeekListProps) {
  return (
    <div className='mb-20'>
      <WeekCard week={week} numberOfEvents={events.length} />
      <div className='flex flex-col gap-3'>
        {events.map((event) => (
          <Card key={event.eid} event={event} />
        ))}
      </div>
    </div>
  )
}
