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
    <div>
      <FilteredPage params={searchParams} />
      <ScrollTopButton />
    </div>
  )
}
