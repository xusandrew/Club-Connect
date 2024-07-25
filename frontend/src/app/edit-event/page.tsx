'use client'
import { editEvent } from '@/lib/editEvents';
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

const initialState = {
  error: '',
  message: '',
}


export default function EditEventPage() {

  const searchParams = useSearchParams();

  const [state, formAction] = useFormState(
    (state: typeof initialState, payload: FormData) => editEvent(Number(searchParams.get("eid")), state, payload),
    initialState,
  )


  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='flex items-center justify-center h-full '>
        <form action={formAction} className=''>
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
                      defaultValue={searchParams.get('title')?.toString()}
                      placeholder={searchParams.get('title')?.toString()}
                      name='title'
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='description'>Description</Label>
                    <Textarea
                      id='description'
                      defaultValue={searchParams.get('description')?.toString()}
                      placeholder={searchParams.get('description')?.toString()}
                      name='description'
                      className='min-h-[100px]'
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='location'>Location</Label>
                    <Input
                      id='location'
                      type='text'
                      defaultValue={searchParams.get('location')?.toString()}
                      placeholder={searchParams.get('location')?.toString()}
                      name='location'
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='start_time'>Start Time</Label>
                    <Input
                      id='start_time'
                      type='datetime-local'
                      name='start_time'
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='end_time'>End Time</Label>
                    <Input
                      id='end_time'
                      type='datetime-local'
                      name='end_time'
                      required
                    />
                  </div>
                  {state?.error && <p className='text-red-500 text-xs'>{state.error}</p>}
                  {state?.message && <p className='text-green-500 text-xs'>{state.message}</p>}
                  <Button type='submit' className='w-full' variant='outline'>
                    Make Changes
                  </Button>
                </CardContent>
              </Card>
        </form>
      </div>
    </div>
  )
}
