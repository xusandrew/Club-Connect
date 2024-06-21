import Filter from '@/components/events/filter-bar'
import { Card } from '@/components/events/post-card'
import { fetchCategories, fetchEvents } from '@/lib/data'

export default async function Component({ params }: { params: { category?: string } }) {
  const category = params.category ? params.category : ''

  const [posts, categories] = await Promise.all([fetchEvents(category), fetchCategories()])

  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='w-full flex-none md:w-64 '>
        <Filter categories={categories} />
      </div>
      <main>
        <section className='mb-8 border-l-8 border-yellow-500 pl-6'>
          <p className='text-gray-400'>7 events taking/took place!</p>
          <h2 className='text-4xl font-bold'>Week of Jun 2</h2>
        </section>
        <section className='space-y-8'>
          {posts.map((event, index) => (
            <Card key={index} event={event} />
          ))}
        </section>
      </main>
    </div>
  )
}
