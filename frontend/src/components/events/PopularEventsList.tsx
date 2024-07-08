'use client'
import { Card } from './PostCard'
import type { Event } from '@/types/Event'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { RVSP } from './Rvsp'
import { FireIcon } from '../icons'

type PopularEventsListProps = {
  category: string
}

const NUMBER_OF_EVENTS_TO_FETCH = 10

export default function PopularEventsList({ category }: PopularEventsListProps) {
  const [cursor, setCursor] = useState<number | undefined>()
  const [events, setEvents] = useState<Event[]>()
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [modalEvent, setModalEvent] = useState<Event | undefined>()
  const [hasMoreData, setHasMoreData] = useState<boolean>(true)

  const { ref, inView } = useInView()

  const loadMoreEvents = async () => {
    if (!hasMoreData) return

    const params = new URLSearchParams({
      category: category,
      limit: NUMBER_OF_EVENTS_TO_FETCH.toString(),
      idCursor: cursor?.toString() || '',
    })

    const response = await fetch(`/api/events/popularity?${params.toString()}`)
    const data = await response.json()
    const newEvents = data.events.map((event: any) => ({
      ...event,
      start_time: event.start_time ? new Date(event.start_time) : null,
      end_time: event.end_time ? new Date(event.end_time) : null,
      posted_time: event.posted_time ? new Date(event.posted_time) : null,
    }))
    if (newEvents.length === 0) {
      setHasMoreData(false)
    } else if (!events) {
      setEvents(newEvents)
      newEvents[newEvents.length - 1].eid
    } else {
      setEvents([...events, ...newEvents])
      setCursor(newEvents[newEvents.length - 1].eid)
    }
  }

  // Reset states when category changes
  useEffect(() => {
    setEvents([])
    setHasMoreData(true)
    setCursor(undefined)
  }, [category])

  useEffect(() => {
    if (inView) {
      loadMoreEvents()
    }
  }, [inView])

  return (
    <div>
      <h1 className='text-xl font-bold tracking-tighter sm:text-3xl mb-10'>Most Popular</h1>

      {modalEvent && modalIsOpen && (
        <RVSP
          setIsOpen={setModalIsOpen}
          isOpen={modalIsOpen}
          event={modalEvent}
          closeModal={() => setModalIsOpen(false)}
        />
      )}
      {events && (
        <div className='flex flex-col gap-3'>
          {events.map((event) => (
            <Card
              key={event.eid}
              event={event}
              setModalEvent={setModalEvent}
              openModal={() => setModalIsOpen(true)}
            />
          ))}
          {hasMoreData && <div ref={ref}>Loading...</div>}
        </div>
      )}
    </div>
  )
}
