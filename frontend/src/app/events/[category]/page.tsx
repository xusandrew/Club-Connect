import Filter from '@/components/events/filter-bar'
import EventsList from '@/components/events/events-list'
import { fetchCategories, fetchEvents } from '@/lib/data'

const INITIAL_EVENTS_TO_FETCH = 10

export default async function FilteredPage({
  params,
}: {
  params: { category?: string | undefined }
}) {
  const category = params.category || ''
  const [posts, categories] = await Promise.all([
    fetchEvents(INITIAL_EVENTS_TO_FETCH, undefined, category),
    fetchCategories(),
  ])

  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='w-full flex-none md:w-64 '>
        <Filter categories={categories} />
      </div>
      <main>
        <section className='mb-8 border-l-8 border-yellow-500 pl-6'>
          <p className='text-gray-400'>{posts.length} event(s) taking place!</p>
          <h2 className='text-4xl font-bold'>Week of Jun 2</h2>
        </section>
        <EventsList initialEvents={posts} category={category} />
      </main>
    </div>
  )
}
