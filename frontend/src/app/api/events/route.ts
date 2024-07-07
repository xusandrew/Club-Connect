import { fetchEvents } from '@/lib/data' // Adjust the import path according to your project structure
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const limit = searchParams.get('limit')
  const idCursor = searchParams.get('idCursor')
  const category = searchParams.get('category')
  try {
    const events = await fetchEvents(
      limit ? Number(limit) : 10,
      idCursor ? Number(idCursor) : undefined,
      category ? String(category) : undefined,
    )
    return NextResponse.json({ events })
  } catch (error) {
    console.error('Database Error:', error)
    return NextResponse.json({ error: 'Failed to fetch post data.' }, { status: 500 })
  }
}
