'use client'
import type { Event } from '@/types/Event'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import WeekList from './WeekList'
import { addWeeks, startOfWeek } from 'date-fns'
import { RVSP } from './Rvsp'

type EventsListProps = {
  category: string
}

export default function EventsList({ category }: EventsListProps) {
  const [weekEvents, setWeekEvents] = useState<Event[][]>([])
  const [hasMoreData, setHasMoreData] = useState<boolean>(true)
  const [weekCursor, setWeekCursor] = useState<Date>(new Date())
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [modalEvent, setModalEvent] = useState<Event | undefined>()

  const { ref, inView } = useInView()

  // Reset states when category changes
  useEffect(() => {
    setWeekEvents([])
    setHasMoreData(true)
    setWeekCursor(new Date())
  }, [category])

  // Load more events when component is in view
  useEffect(() => {
    const loadMoreEvents = async () => {
      if (!hasMoreData) return

      const params = new URLSearchParams({
        category: category,
        weekDate: weekCursor.toISOString(),
      })

      try {
        const response = await fetch(`/api/events?${params.toString()}`)
        const data = await response.json()

        if (response.ok) {
          const newEvents = data.events.map((event: any) => ({
            ...event,
            start_time: event.start_time ? new Date(event.start_time) : null,
            end_time: event.end_time ? new Date(event.end_time) : null,
            posted_time: event.posted_time ? new Date(event.posted_time) : null,
          }))

          if (newEvents.length === 0) {
            setHasMoreData(false)
          } else {
            setWeekEvents([...weekEvents, newEvents])
            setWeekCursor(startOfWeek(addWeeks(weekCursor, 1)))
          }
        } else {
          console.error('Error loading more events:', data.error)
        }
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    if (inView) {
      loadMoreEvents()
    }
  }, [inView, category, hasMoreData, weekCursor, weekEvents])

  return (
    <div className='flex flex-col gap-3'>
      {modalEvent && modalIsOpen && (
        <RVSP
          setIsOpen={setModalIsOpen}
          isOpen={modalIsOpen}
          event={modalEvent}
          closeModal={() => setModalIsOpen(false)}
        />
      )}
      {weekEvents.map(
        (events, index) =>
          events[0].start_time && (
            <WeekList
              key={index}
              events={events}
              week={startOfWeek(new Date(events[0].start_time))}
              openModal={() => setModalIsOpen(true)}
              setModalEvent={setModalEvent}
            />
          ),
      )}
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
