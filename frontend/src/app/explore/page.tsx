import Filter from '@/components/events/FilterBar'
import ClubCard from '@/components/explore/ClubCard'
import { fetchCategories, fetchClubs } from '@/lib/data'

export default async function Component() {
  const categories = await fetchCategories()
  const clubs = await fetchClubs()

  return (
    <div className='flex flex-col min-h-screen'>
      <section className='w-full py-4 md:py-10 lg:py-20'>
        <div className='container px-4 md:px-6 text-center space-y-4'>
          <h1 className='text-2xl font-bold tracking-tighter sm:text-5xl'>Clubs Directory</h1>
        </div>
      </section>
      <div className='container grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 py-12 md:py-24'>
        <Filter categories={categories} />
        <div className='flex flex-col gap-3'>
          {clubs.map((club) => (
            <ClubCard key={club.cid} club={club} />
          ))}
        </div>
      </div>
    </div>
  )
}
