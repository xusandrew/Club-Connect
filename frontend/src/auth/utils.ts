'use server'

import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'
import { NextRequest, NextResponse } from 'next/server'

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET)

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

export const logout = () => {
  cookies().set('session', '', { expires: new Date(0) })
}

export const getSession = async () => {
  const session = cookies().get('session')?.value
  if (!session) return

  return await decrypt(session)
}

export const updateSession = async (request: NextRequest) => {
  const session = request.cookies.get('session')?.value
  if (!session) return

  const parsed = await decrypt(session)
  parsed.expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) // 1 year
  const res = NextResponse.next(request)

  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires as Date,
  })
  return res
}
