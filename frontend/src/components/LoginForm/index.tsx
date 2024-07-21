'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/data/components/ui/card'
import { login } from '@/auth'
import { Label } from '@/data/components/ui/label'
import { Input } from '@/data/components/ui/input'
import { Button } from '@/data/components/ui/button'
import Link from 'next/link'
import { useFormState } from 'react-dom'

const initialState = {
  error: '',
  message: '',
}

export function LoginForm() {
  const [state, formAction] = useFormState(login, initialState)

  return (
    <form action={formAction} className='flex items-center justify-center h-full bg-background'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-1 text-center'>
          <CardTitle className='text-3xl font-bold'>Welcome Back</CardTitle>
          <CardDescription>
            Enter your email and password to sign in to your club account.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' type='email' placeholder='m@example.com' name='email' required />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' type='password' name='password' required />
          </div>
          {state?.error && <p className='text-red-500 text-xs'>{state.error}</p>}
          {state?.message && <p className='text-green-500 text-xs'>{state.message}</p>}
          <Button type='submit' className='w-full' variant='outline'>
            Sign in
          </Button>
        </CardContent>
        <CardFooter className='flex-col text-xs'>
          Don&apos;t have an account?
          <Link href='/register' className='text-xs underline' prefetch={false}>
            Register your club
          </Link>
        </CardFooter>
      </Card>
    </form>
  )
}
