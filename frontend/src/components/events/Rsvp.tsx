'use client'

import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/data/components/ui/card'
import { Dialog, DialogContent } from '@/data/components/ui/dialog'
import { Label } from '@/data/components/ui/label'
import { Input } from '@/data/components/ui/input'
import { Button } from '@/data/components/ui/button'
import React from 'react'
import { Event } from '@/types/Event'
import { rsvp } from '@/lib/rvsp'

type RSVPProps = {
  event: Event
  closeModal: () => void
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export function RSVP({ event, closeModal, isOpen, setIsOpen }: RSVPProps) {
  const [email, setEmail] = useState('')
  const [RsvpFailureMessage, setRsvpFailureMessage] = useState<null | string>(null)
  const onSubmit = async (formData: FormData) => {
    const failure = await rsvp(formData)
    if (failure) {
      setRsvpFailureMessage(failure)
      return
    }

    closeModal()
    return
  }

  const RsvpContent = () => {
    return (
      <form action={onSubmit}>
        <div className='flex items-center justify-center'>
          <Card className='w-full max-w-md border-0'>
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

                <Input id='eid' type='hidden' name='eid' value={event.eid} required />
              </div>
              <Button type='submit' className='w-full' variant='outline'>
                Sign Up for Event Notifications
              </Button>
            </CardContent>
          </Card>
        </div>
      </form>
    )
  }

  const RsvpFailure = () => {
    return (
      <div className='flex items-center justify-center'>
        <Card className='w-full max-w-md border-0'>
          <CardHeader className='space-y-1 text-center'>
            <CardTitle className='text-3xl font-bold'>RSVP</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4 text-center'>{RsvpFailureMessage}</CardContent>
        </Card>
      </div>
    )
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>{RsvpFailureMessage ? RsvpFailure() : RsvpContent()}</DialogContent>
      </Dialog>
    </>
  )
}
