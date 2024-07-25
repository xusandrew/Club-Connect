import Filter from '@/components/ui/FilterBar'
import { fetchCategories } from '@/lib/data'
import Search from '@/components/explore/Search'
import ClubsList from '@/components/explore/ClubsList'

export default async function FilteredPage({
  params,
}: {
  params: {
    category?: string
    query?: string
    byPopularity?: boolean
  }
}) {
  const category = params.category || ''
  const byPopularity = params.byPopularity || false
  const query = params.query || ''
  const categories = await fetchCategories()

  return (
    <>
      <section className='w-full py-4 md:py-10 lg:py-20'>
        <div className='container px-4 md:px-6 text-center space-y-4'>
          <h1 className='text-2xl font-bold tracking-tighter sm:text-5xl'>Clubs Directory</h1>
          <Search placeholder='search for a club...' />
        </div>
      </section>
      <div className='flex h-full flex-col md:flex-row'>
        <div className='w-full flex-none md:w-64 '>
          <Filter categories={categories} />
        </div>
        <div className='flex flex-col gap-3 '>
          <div className='w-[800px]'></div>
          <ClubsList query={query} byPopularity={byPopularity} category={category} />
        </div>
      </div>
    </>
  )
}
