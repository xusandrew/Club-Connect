import { NextRequest, NextResponse } from 'next/server'
import { fetchEventsInWeek } from '@/lib/data'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const weekDate = searchParams.get('weekDate')
  const category = searchParams.get('category')

  if (!weekDate) {
    return NextResponse.json({ error: 'Missing weekDate parameter.' }, { status: 400 })
  }

  try {
    const week = new Date(weekDate)
    if (isNaN(week.getTime())) {
      return NextResponse.json(
        {
          error:
            'Invalid weekDate parameter. (Invalid date format, empty string, or null/undefined)',
        },
        { status: 400 },
      )
    }

    const events = await fetchEventsInWeek(week, category ? String(category) : undefined)
    return NextResponse.json({ events })
  } catch (error) {
    console.error('Database Error:', error)
    return NextResponse.json({ error: 'Failed to fetch events data.' }, { status: 500 })
  }
}
