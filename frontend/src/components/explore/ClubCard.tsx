import { Club } from '@/types/Club'
import { DiscordIcon, InstagramIcon } from '../icons/icons'
import { CategoryIcon } from '../icons/CategoryIcons'

type ClubCardProps = {
  club: Club
}

export default function Component({ club }: ClubCardProps) {
  return (
    <div className='p-4 border border-gray-700 rounded-lg w-[800px]'>
      <section className='flex mr-6 gap-4'>
        {club.category && club.category[0] && <CategoryIcon category={club.category[0].type} />}
        <h3 className=' text-2xl font-bold'>{club.name}</h3>
      </section>

      <p className='mt-2 '>{club.description}</p>
      {!club.description && <p className='mt-2 text-gray-400'>No club description.</p>}

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
      <div>More</div>
    </div>
  )
}
