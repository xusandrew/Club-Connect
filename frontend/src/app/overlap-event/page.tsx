'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/data/components/ui/card'
import { Button } from '@/data/components/ui/button'
import { useEffect, useState } from 'react'
import { isOverlap } from '@/lib/overlapEvents'
import { getEvent } from '@/lib/getEvent'
import type { Event } from '@/types/Event'
import { format } from 'date-fns'

export default function OverlapPopup() {
  const searchParams = useSearchParams()
  const eventID = Number(searchParams.get('eid'))
  const clubID = Number(searchParams.get('cid'))

  const router = useRouter()
  const [overlap, setOverlap] = useState(0)
  const [event, setEvent] = useState<Event | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  function handleEditEvent() {
    const queryString = new URLSearchParams({ eid: eventID.toString() }).toString()
    router.push(`/edit-event?${queryString}`)
  }

  function handleGoBack() {
    router.push('/')
  }

  useEffect(() => {
    if (eventID) {
      const fetchAndSetEvent = async () => {
        const fetchedEvent = await getEvent(eventID, clubID)
        setEvent(fetchedEvent)
      }
      fetchAndSetEvent()
    }
  }, [])

  useEffect(() => {
    if (event) {
      const fetchOverlapFcn = async () => {
        if (event.start_time != null && event.end_time) {
          const fetchOverlap = await isOverlap(event.start_time, event.end_time)
          setOverlap(fetchOverlap)
          setLoading(false)
        }
      }
      fetchOverlapFcn()
    }
  })

  useEffect(() => {
    if (!loading) {
      if (!overlap) {
        router.push('/')
      }
    }
  }, [loading])

  if (loading) {
    return <div>Loading...</div>
  }

  if (event?.start_time && event.end_time) {
    return (
      <div>
        {overlap && (
          <div className='flex'>
            <Card className='w-full max-w-md'>
              <CardHeader className='space-y-1 text-center'>
                <CardTitle className='text-3xl font-bold'>Warning</CardTitle>
                <CardDescription>
                  <p> Your event is scheduled for: </p>
                  <p>
                    {format(event.start_time, 'LLL, d @ p')} to{' '}
                    {format(event.end_time, 'LLL, d @ p')}
                  </p>
                  <p>
                    This timeslot overlaps with {overlap} {overlap > 1 ? 'events' : 'event'}. Would
                    you like to change it?
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <Button onClick={handleEditEvent} className='w-full' variant='outline'>
                  Change
                </Button>
                <Button onClick={handleGoBack} className='w-full' variant='outline'>
                  No
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    )
  }
}
