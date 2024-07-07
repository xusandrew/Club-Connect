import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { updateSession } from '@/auth'

const restrictedUrls = ['/login', '/signup']

export async function middleware(request: NextRequest) {
  const session = request.cookies.get('session')?.value

  if (restrictedUrls.includes(request.nextUrl.pathname)) {
    if (session) {
      return NextResponse.redirect('/')
    }
  }

  return await updateSession(request)
}
