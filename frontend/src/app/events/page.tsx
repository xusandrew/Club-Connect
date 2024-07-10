import FilteredPage from './[category]/page'

export default function Page({
  searchParams,
}: {
  searchParams: {
    category?: string
    byPopularity?: boolean
  }
}) {
  return <FilteredPage params={searchParams} />
}
