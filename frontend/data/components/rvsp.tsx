'use client'

import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/data/components/ui/card'
import { Label } from '@/data/components/ui/label'
import { Input } from '@/data/components/ui/input'
import { Button } from '@/data/components/ui/button'
import React from 'react'
import { Event } from '@/types/Event'
import { rvsp } from '@/lib/actions'

export function RVSP({ event }: { event: Event }) {
  const [modal, setModal] = useState(false)
  const [email, setEmail] = useState('')

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <Button onClick={toggleModal} className='w-full' variant='outline'>
        RVSP
      </Button>

      {modal && (
        <form action={rvsp}>
          <div className='fixed top-0 bottom-0 flex items-center justify-center z-50 bg-background'>
            <Card className='w-full max-w-md'>
              <CardHeader className='space-y-1 text-center'>
                <CardTitle className='text-3xl font-bold'>RSVP</CardTitle>
                <CardDescription>
                  Enter your email to receive notifications about this event.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='m@example.com'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <Input
                      id='eid'
                      type='hidden'
                      name='eid'
                      value={event.eid}
                      required
                    />
                  </div>
                  <Button type='submit' className='w-full' variant='outline'>
                    Sign Up for Event Notifications
                  </Button>
              </CardContent>
            </Card>
          </div>
        </form>
      )}
    </>
  )
}
