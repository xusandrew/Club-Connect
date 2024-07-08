'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PVQ97cZdLW4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/data/components/ui/button'
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  getWeekOfMonth,
  addDays,
  format,
} from 'date-fns'
import CalendarEvent from '@/components/calendar/EventCard'
import { processEvents } from '@/scripts/splitWeek'
import { Event } from '@/types/Event'
import { useEffect, useState } from 'react'

export default function Component() {
  const [targetDate, setTargetDate] = useState(startOfWeek(new Date()))
  const [events, setEvents] = useState<Record<string, Event[]>>({})
  const start = startOfWeek(targetDate)
  const end = endOfWeek(targetDate)
  const daysOfWeek = eachDayOfInterval({ start, end })

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const params = new URLSearchParams({ weekDate: targetDate.toISOString() })
        const response = await fetch(`/api/events?${params.toString()}`)
        const data = await response.json()

        if (response.ok) {
          const newEvents = data.events.map((event: any) => ({
            ...event,
            start_time: event.start_time ? new Date(event.start_time) : null,
            end_time: event.end_time ? new Date(event.end_time) : null,
            posted_time: event.posted_time ? new Date(event.posted_time) : null,
          }))
          setEvents(processEvents(newEvents))
        } else {
          console.error('Error loading more events:', data.error)
        }
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }
    fetchEvents()
  }, [targetDate])

  if (!events) {
    console.log(events);
    return (null);
  }

  return (
    <>
      <div className='flex items-center justify-between mb-4'>
        <div className='text-lg font-semibold'>
          {format(start, 'MMM d, yyyy')} - {format(end, 'MMM d, yyyy')}
        </div>
        <div className='flex items-center gap-2'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => {
              setTargetDate(addDays(targetDate, -7))
            }}
          >
            <ChevronLeftIcon className='w-5 h-5' />
          </Button>
          <Button
            onClick={() => {
              setTargetDate(new Date())
            }}
          >

            Today
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => {
              setTargetDate(addDays(targetDate, 7))
            }}
          >
            <ChevronRightIcon className='w-5 h-5' />
          </Button>
        </div>
      </div>

      <div className='overflow h-[93%] overflow-scroll' style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        <div className='grid grid-cols-7 gap-4'>
          {daysOfWeek.map((day, i) => (
            <div key={i} className='flex flex-col items-center gap-1 text-sm text-muted-foreground'>
              <div className='sticky top-0 w-full bg-background text-center pb-2'>
                <div className='border-b p-2'>{format(day, 'ccc')} {format(day, 'd')}</div>
              </div>
              <div className='flex flex-col gap-1 w-full'>
                {(events[format(day, 'ccc')] ?? []).map((event, j) => (
                  <CalendarEvent key={j} {...event}></CalendarEvent>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m15 18-6-6 6-6' />
    </svg>
  )
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m9 18 6-6-6-6' />
    </svg>
  )
}
