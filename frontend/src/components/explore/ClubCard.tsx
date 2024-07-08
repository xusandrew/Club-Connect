import { Card } from '@/data/components/ui/card'
import { Club } from '@/types/Club'
import Link from 'next/link'
import { DiscordIcon, InstagramIcon, UsersIcon } from '../icons/icons'

type ClubCardProps = {
  club: Club
}

export default function Component({ club }: ClubCardProps) {
  return (
    <div className='p-4 border border-gray-700 rounded-lg w-[800px]'>
      <UsersIcon />
      <h3 className=' text-2xl font-bold'>{club.name}</h3>
      <p className='mt-2 '>{club.description}</p>
      <section className='flex mt-4 mr-6 gap-4 justify-end'>
        {club.instagram && (
          <a href={`${club.instagram}`} target='_blank' rel='noopener noreferrer'>
            <InstagramIcon />
          </a>
        )}
        {club.discord && (
          <a href={`${club.discord}`} target='_blank' rel='noopener noreferrer'>
            <DiscordIcon />
          </a>
        )}
      </section>
    </div>
  )
}
