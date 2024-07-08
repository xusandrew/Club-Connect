import ScrollTopButton from '@/components/events/BackToTopButton'
import FilteredPage from './[category]/page'

export default function Page({
  searchParams,
}: {
  searchParams: {
    category?: string
  }
}) {
  return (
    <div className='h-full mb-20'>
      <FilteredPage params={searchParams} />
      <ScrollTopButton />
    </div>
  )
}
