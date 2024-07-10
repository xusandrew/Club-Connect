import Filter from '@/components/events/FilterBar'
import EventsList from '@/components/events/EventsList'
import PopularEventsList from '@/components/events/PopularEventsList'
import { fetchCategories } from '@/lib/data'

export default async function FilteredPage({
  params,
}: {
  params: { category?: string; byPopularity?: boolean }
}) {
  const category = params.category || ''
  const byPopularity = params.byPopularity || false

  const categories = await fetchCategories()

  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='w-full flex-none md:w-64 '>
        <Filter categories={categories} />
      </div>
      <main>
        {byPopularity ? (
          <PopularEventsList category={category} />
        ) : (
          <EventsList category={category} />
        )}
      </main>
    </div>
  )
}
