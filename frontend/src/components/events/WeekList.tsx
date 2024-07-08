import { Card } from './PostCard'
import type { Event } from '@/types/Event'
import { WeekCard } from './WeekCard'

type WeekListProps = {
  events: Event[]
  week: Date
  openModal: () => void
  setModalEvent: React.Dispatch<React.SetStateAction<Event | undefined>>
}

export default function WeekList({ events, week, openModal, setModalEvent }: WeekListProps) {
  return (
    <div className='mb-20'>
      <WeekCard week={week} numberOfEvents={events.length} />
      <div className='flex flex-col gap-3'>
        {events.map((event) => (
          <Card key={event.eid} event={event} openModal={openModal} setModalEvent={setModalEvent} />
        ))}
      </div>
    </div>
  )
}
