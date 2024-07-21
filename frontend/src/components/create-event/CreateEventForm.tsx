'use client'

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
import { createEvent } from '@/lib/createEvent'
import type { Club } from '@/types/Club'

type CreateEventFormProps = {
  club: Club
}

const initialState = {
  error: '',
  message: '',
}

export default function CreateEventForm({ club }: CreateEventFormProps) {
  const [state, formAction] = useFormState(
    (state: typeof initialState, payload: FormData) => createEvent(club, state, payload),
    initialState,
  )

  return (
    <form action={formAction}>
      <div className='flex h-screen flex-col md:flex-row'>
        <div className='flex items-center justify-center h-full '>
          <Card className='w-full max-w-md'>
            <CardHeader className='space-y-1 text-center'>
              <CardTitle className='text-3xl font-bold'>Create an Event</CardTitle>
              <CardDescription>Enter the details of your event below.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='title'>Title</Label>
                <Input
                  id='title'
                  type='text'
                  placeholder='General Meeting...'
                  name='title'
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='description'>Description</Label>
                <Textarea
                  id='description'
                  placeholder='Event description...'
                  name='description'
                  className='min-h-[100px]'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='location'>Location</Label>
                <Input
                  id='location'
                  type='text'
                  placeholder='STC 0050...'
                  name='location'
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='start_time'>Start Time</Label>
                <Input
                  id='start_time'
                  type='datetime-local'
                  placeholder=''
                  name='start_time'
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='end_time'>End Time</Label>
                <Input
                  id='end_time'
                  type='datetime-local'
                  placeholder=''
                  name='end_time'
                  required
                />
              </div>
              {state?.error && <p className='text-red-500 text-xs'>{state.error}</p>}
              {state?.message && <p className='text-green-500 text-xs'>{state.message}</p>}
              <Button type='submit' className='w-full' variant='outline'>
                Create Event
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  )
}
