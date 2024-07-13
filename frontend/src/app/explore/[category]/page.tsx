import Filter from '@/components/ui/FilterBar'
import ClubCard from '@/components/explore/ClubCard'
import { fetchCategories, fetchClubs } from '@/lib/data'

export default async function FilteredPage({
  params,
}: {
  params: { category?: string | undefined }
}) {
  const category = params.category || ''
  const categories = await fetchCategories()
  const clubs = await fetchClubs(category)

  return (
    <>
      <section className='w-full py-4 md:py-10 lg:py-20'>
        <div className='container px-4 md:px-6 text-center space-y-4'>
          <h1 className='text-2xl font-bold tracking-tighter sm:text-5xl'>Clubs Directory</h1>
        </div>
      </section>
      <div className='flex h-full flex-col md:flex-row'>
        <div className='w-full flex-none md:w-64 '>
          <Filter categories={categories} />
        </div>
        <div className='flex flex-col gap-3 '>
          {clubs.map((club) => (
            <ClubCard key={club.cid} club={club} />
          ))}
        </div>
      </div>
    </>
  )
}
