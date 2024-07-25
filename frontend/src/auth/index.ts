'use server'

import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'
import prisma from '../lib/prisma'
import { SignJWT, jwtVerify } from 'jose'
import { NextRequest, NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
import type { Club } from '@/types/Club'

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET)
const saltRounds = 10

export const encrypt = (payload: any) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not set')
  }

  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(payload.expires)
    .sign(secretKey)
}

export const decrypt = async (token: string) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not set')
  }

  const { payload } = await jwtVerify(token, secretKey, { algorithms: ['HS256'] })
  return payload
}

export const getSession = async () => {
  const session = cookies().get('session')?.value
  if (!session) return

  return (await decrypt(session)) as { club: Club; [key: string]: any }
}

export const updateSession = async (request: NextRequest) => {
  const session = request.cookies.get('session')?.value
  if (!session) return

  const parsed = await decrypt(session)
  parsed.expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) // 1 year

  const res = NextResponse.next()

  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires as Date,
  })
  return res
}

export const login = async (_prevState: any, formData: FormData) => {
  const clubLoginInfo = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  if (!(clubLoginInfo.email && clubLoginInfo.password)) {
    return { error: 'Missing required fields', message: '' }
  }

  const club = await prisma.club.findUnique({
    where: { email: clubLoginInfo.email },
  })

  if (!club) {
    return { error: `Club not found with email`, message: '' }
  }

  const match = await bcrypt.compare(clubLoginInfo.password, club.password)

  if (!match) {
    return { error: `Invalid password`, message: '' }
  }

  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) // 1 year
  const session = await encrypt({ club, expires })

  cookies().set('session', session, { expires, httpOnly: true })
  redirect('/')
}

export const logout = () => {
  cookies().set('session', '', { expires: new Date(0) })
  redirect('/login') // TODO: Redirect to club page
}

export const hashPassword = async (password: string) => {
  return new Promise<string>((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) reject(err)
      else resolve(hash)
    })
  })
}

export const register = async (_prevState: any, formData: FormData) => {
  const clubData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    name: formData.get('name') as string,
    description: formData.get('description') as string | null,
    instagram: formData.get('instagram') as string | null,
    discord: formData.get('discord') as string | null,
  }

  if (!(clubData.email && clubData.password && clubData.name)) {
    return { error: 'Missing required fields', message: '' }
  }

  try {
    clubData.password = await hashPassword(clubData.password)

    const club = await prisma.club.create({
      data: clubData,
    })

    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) // 1 year

    const session = await encrypt({ club, expires })

    cookies().set('session', session, { expires, httpOnly: true })
    return { success: true, message: 'Registration successful', cid: club.cid }
  } catch (error: any) {
    if (error.code === 'P2002') {
      return { error: 'Club information already exists', message: '' }
    }
    return { error: 'An error occurred', message: '' }
  }
}
