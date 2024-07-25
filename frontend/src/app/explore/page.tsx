import ScrollTopButton from '@/components/ui/BackToTopButton'
import FilteredPage from './[category]/page'

export default function Page({
  searchParams,
}: {
  searchParams: {
    category?: string
    byPopularity?: boolean
  }
}) {
  return (
    <div className='h-full mb-20'>
      <FilteredPage params={searchParams} />
      <ScrollTopButton />
    </div>
  )
}
