'use client'
import ClubCard from '@/components/explore/ClubCard'
import { Club } from '@prisma/client'
import { useEffect, useState } from 'react'

type ClubsListProps = {
  category?: string
  query?: string
  byPopularity?: boolean
}

export default function ClubsList(props: ClubsListProps) {
  const [clubs, setClubs] = useState<Club[]>([])

  useEffect(() => {
    const getClubs = async () => {
      const params = new URLSearchParams({
        category: props.category || '',
        query: props.query || '',
        byPopularity: String(props.byPopularity),
      })

      try {
        const response = await fetch(`/api/explore?${params.toString()}`)
        const data = await response.json()

        if (response.ok) {
          setClubs(data.clubs)
          console.log(data)
        } else {
          console.error('Error loading more events:', data.error)
        }
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    getClubs()
  }, [props.category, props.query, props.byPopularity])

  return (
    <>
      {clubs.map((club) => (
        <ClubCard key={club.cid} club={club} />
      ))}
    </>
  )
}
