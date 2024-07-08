import {
  AcademicCapIcon,
  CpuChipIcon,
  FilmIcon,
  HeartIcon,
  PaintBrushIcon,
  UserGroupIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline'
import { SoccerBallIcon, GameControllerIcon, IconGlobalLine, LeafIcon } from '.'

type CategoryIconProps = {
  category: string
}
export function CategoryIcon({ category }: CategoryIconProps) {
  switch (category) {
    case 'Academic':
      return <AcademicCapIcon className='size-8 text-yellow-500' />
    case 'Business & Entrepreneurial':
      return <BriefcaseIcon className='size-8 text-yellow-500' />
    case 'Charitable & Community Service':
    case 'Creative Arts & Music':
      return <PaintBrushIcon className='size-8 text-yellow-500' />
    case 'Cultural':
      return <UserGroupIcon className='size-8 text-yellow-500' />
    case 'Environmental and Sustainability':
      return <LeafIcon className='size-8 text-yellow-500' />
    case 'Games & Recreational':
      return <GameControllerIcon className='size-8 text-yellow-500' />
    case 'Athletic':
      return <SoccerBallIcon className='size-8 text-yellow-500' />
    case 'Tech':
      return <CpuChipIcon className='size-8 text-yellow-500' />
    case 'Health':
      return <HeartIcon className='size-8 text-yellow-500' />
    case 'Media':
      return <FilmIcon className='size-8 text-yellow-500' />
    case 'Political & Social':
      return <IconGlobalLine className='size-8 text-yellow-500' />
    default:
      return null // Return null or handle unrecognized category
  }
}
