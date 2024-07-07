'use client'
import { Card } from './PostCard'
import type { Event } from '@/types/Event'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
type EventsListProps = {
  initialEvents: Event[]
  category: string
}

const NUMBER_OF_EVENTS_TO_FETCH = 10

export default function EventsList({ initialEvents, category }: EventsListProps) {
  const [cursor, setCursor] = useState<number>(initialEvents[initialEvents.length - 1].eid)
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const [hasMoreData, setHasMoreData] = useState<boolean>(true)
  const { ref, inView } = useInView()

  const loadMoreEvents = async () => {
    if (!hasMoreData) return

    const params = new URLSearchParams({
      category: category,
      limit: NUMBER_OF_EVENTS_TO_FETCH.toString(),
      idCursor: cursor?.toString() || '',
    })

    const response = await fetch(`/api/events?${params.toString()}`)
    const data = await response.json()
    const newEvents = data.events.map((event: any) => ({
      ...event,
      start_time: event.start_time ? new Date(event.start_time) : null,
      end_time: event.end_time ? new Date(event.end_time) : null,
      posted_time: event.posted_time ? new Date(event.posted_time) : null,
    }))
    if (newEvents.length === 0) {
      setHasMoreData(false)
    } else {
      setEvents([...events, ...newEvents])
      setCursor(newEvents[newEvents.length - 1].eid)
    }
  }

  // when category changes, reset states
  useEffect(() => {
    setEvents(initialEvents)
    setHasMoreData(true)
    setCursor(initialEvents[initialEvents.length - 1].eid)
  }, [initialEvents])

  useEffect(() => {
    if (inView) {
      loadMoreEvents()
    }
  }, [inView])

  return (
    <div className='flex flex-col gap-3'>
      {events.map((event) => (
        <Card key={event.eid} event={event} />
      ))}
      {hasMoreData && (
        <div ref={ref}>
          <div className='flex justify-center items-center py-10 mb-8 '>
            <div className='flex items-center space-x-2'>
              <div className='w-3 h-3 bg-white rounded-full animate-bounce' />
              <div className='w-3 h-3 bg-white rounded-full animate-bounce animation-delay-200' />
              <div className='w-3 h-3 bg-white rounded-full animate-bounce animation-delay-400' />
            </div>
          </div>
        </div>
      )}
      {!hasMoreData && (
        <div className='flex flex-col items-center justify-center py-10 mb-8'>
          <p className='text-muted-foreground'>That&apos;s all the events!</p>
        </div>
      )}
    </div>
  )
}
