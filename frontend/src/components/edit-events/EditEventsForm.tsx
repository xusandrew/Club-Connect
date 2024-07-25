'use client'
import { editEvent } from '@/lib/editEvents'
import { useSearchParams } from 'next/navigation'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/data/components/ui/card'
import { Textarea } from '@/data/components/ui/textarea'
import { Label } from '@/data/components/ui/label'
import { Input } from '@/data/components/ui/input'
import { Button } from '@/data/components/ui/button'

import { useFormState } from 'react-dom'
import { getEvent } from '@/lib/getEvent'
import { useEffect, useState } from 'react'
import type { Event } from '@/types/Event'
import { useRouter } from 'next/navigation'

const initialState = {
  error: '',
  message: '',
}

type Props = {
  clubID: number
}

export default function EditEventForm(props: Props) {
  const searchParams = useSearchParams()
  const eventID = Number(searchParams.get('eid'))
  const router = useRouter()
  const [event, setEvent] = useState<Event | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  const [state, formAction] = useFormState(
    (state: typeof initialState, payload: FormData) => editEvent(eventID, state, payload),
    initialState,
  )

  useEffect(() => {
    if (eventID) {
      const fetchAndSetEvent = async () => {
        const fetchedEvent = await getEvent(eventID, props.clubID)
        setEvent(fetchedEvent)
        if (!fetchedEvent) {
          setLoading(false)
          return
        }
        setLoading(false)
      }
      fetchAndSetEvent()
    }
  }, [eventID])

  useEffect(() => {
    if (!state.error && state.message) {
      const queryString = new URLSearchParams({ eid: eventID.toString(), cid : props.clubID.toString() })
      router.push(`/overlap-event?${queryString}`)
    }
  })

  if (loading) {
    return <p>Loading...</p>
  }

  if (!event) {
    return <p>{`You don't have access to this event!`}</p>
  }

  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='flex items-center justify-center h-full '>
        <form action={formAction} className=''>
          {!state.message && !state.error && (
            <Card className='w-full max-w-md'>
              <CardHeader className='space-y-1 text-center'>
                <CardTitle className='text-3xl font-bold'>Edit Your Event</CardTitle>
                <CardDescription>Enter your changes to your event below.</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='title'>Title</Label>
                  <Input
                    id='title'
                    type='text'
                    defaultValue={event.title}
                    placeholder={event.title}
                    name='title'
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='description'>Description</Label>
                  <Textarea
                    id='description'
                    defaultValue={event.description != null ? event.description : ''}
                    placeholder={event.description != null ? event.description : ''}
                    name='description'
                    className='min-h-[100px]'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='location'>Location</Label>
                  <Input
                    id='location'
                    type='text'
                    defaultValue={event.location != null ? event.location : ''}
                    placeholder={event.location != null ? event.location : ''}
                    name='location'
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='start_time'>Start Time</Label>
                  <Input id='start_time' type='datetime-local' name='start_time' required />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='end_time'>End Time</Label>
                  <Input id='end_time' type='datetime-local' name='end_time' required />
                </div>
                {state?.error && <p className='text-red-500 text-xs'>{state.error}</p>}
                {state?.message && <p className='text-green-500 text-xs'>{state.message}</p>}
                <Button type='submit' className='w-full' variant='outline'>
                  Make Changes
                </Button>
              </CardContent>
            </Card>
          )}
        </form>
      </div>
    </div>
  )
}
