import { NextRequest, NextResponse } from 'next/server'
import { fetchPopularClubs, fetchClubs } from '@/lib/data'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get('category') || ''
  const query = searchParams.get('query') || ''
  const byPopularity = searchParams.get('byPopularity') === 'true'

  try {
    let clubs
    if (byPopularity) {
      clubs = await fetchPopularClubs(category, query)
    } else {
      clubs = await fetchClubs(category, query)
    }
    return NextResponse.json({ clubs })
  } catch (error) {
    console.error('Database Error:', error)
    return NextResponse.json({ error: 'Failed to fetch events data.' }, { status: 500 })
  }
}
