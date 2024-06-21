import FilteredPage from './[category]/page'

export default function Page({
  searchParams,
}: {
  searchParams: {
    category?: string
  }
}) {
  return <FilteredPage params={searchParams} />
}
