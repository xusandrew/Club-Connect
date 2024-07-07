'use server'

import { cookies } from 'next/headers'
import bcrypt from 'bcrypt'
import prisma from 'lib/prisma'
import { encrypt } from './utils'

export const login = async (formData: FormData) => {
  const clubLoginInfo = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  if (!(clubLoginInfo.email && clubLoginInfo.password)) {
    throw new Error('Missing required fields')
  }

  const club = await prisma.club.findUnique({
    where: { email: clubLoginInfo.email },
  })

  if (!club) {
    throw new Error('Club not found')
  }

  const match = await bcrypt.compare(clubLoginInfo.password, club.password)

  if (!match) {
    throw new Error('Invalid password')
  }

  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) // 1 year
  const session = await encrypt({ club, expires })

  cookies().set('session', session, { expires, httpOnly: true })
}
