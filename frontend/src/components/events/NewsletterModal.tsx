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
import { newsletterSignup } from '@/lib/newsletterSignup'

type NewsletterModalProps = {
  closeModal: () => void
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export function NewsletterModal({ closeModal, isOpen, setIsOpen }: NewsletterModalProps) {
  const [email, setEmail] = useState('')
  const [NewsletterFailureMessage, setNewsletterFailureMessage] = useState<null | string>(null)
  const onSubmit = async (formData: FormData) => {
    const failure = await newsletterSignup(formData)
    if (failure) {
      setNewsletterFailureMessage(failure)
      return
    }

    closeModal()
    return
  }

  const NewsletterContent = () => {
    return (
      
      <form action={onSubmit}>
        <div className='flex items-center justify-center'>
          <Card className='w-full max-w-md border-0'>
            <CardHeader className='space-y-1 text-center'>
              <CardTitle className='text-3xl font-bold'>Weekly Newsletter</CardTitle>
              <CardDescription>
              Subscribe with your email to receive our weekly event digests every Monday!
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
              </div>
              <Button type='submit' className='w-full' variant='outline'>
                Sign Up for Weekly Newsletter
              </Button>
            </CardContent>
          </Card>
        </div>
      </form>
    )
  }

  const NewsletterFailure = () => {
    return (
      <div className='flex items-center justify-center'>
        <Card className='w-full max-w-md border-0'>
          <CardHeader className='space-y-1 text-center'>
            <CardTitle className='text-3xl font-bold'>Weekly Newsletter</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4 text-center'>{NewsletterFailureMessage}</CardContent>
        </Card>
      </div>
    )
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className='bg-primary text-white'>
          {NewsletterFailureMessage ? NewsletterFailure() : NewsletterContent()}
        </DialogContent>
      </Dialog>
    </>
  )
}
