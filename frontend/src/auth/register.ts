'use server'

import { cookies } from 'next/headers'
import bcrypt from 'bcrypt'
import prisma from 'lib/prisma'
import { encrypt } from './utils'

const saltRounds = 10

export const register = async (formData: FormData) => {
  const clubData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    name: formData.get('name') as string,
    description: formData.get('description') as string | null,
    instagram: formData.get('instagram') as string | null,
    discord: formData.get('discord') as string | null,
  }

  if (!(clubData.email && clubData.password && clubData.name)) {
    throw new Error('Missing required fields')
  }

  bcrypt.hash(clubData.password, saltRounds, (err, hash) => {
    if (err) {
      throw new Error('Failed to hash password')
    }

    clubData.password = hash
  })

  const club_db = await prisma.club
    .create({
      data: clubData,
    })
    .catch((error) => {
      if (error.code === 'P2002') {
        throw new Error('Club information already exists')
      }
      throw error
    })

  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) // 1 year
  const session = await encrypt({ club_db, expires })

  cookies().set('session', session, { expires, httpOnly: true })
}
