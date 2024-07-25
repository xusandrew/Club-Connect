import { ClubPage } from '@/components/ClubPage'
import { fetchClubById } from '@/lib/data'

export default async function ClubInfoPage({ params }: { params: { cid?: string | undefined } }) {
  const cid = params.cid || ''
  const club = await fetchClubById(parseInt(cid))

  return (
    <div className='flex h-full flex-col md:flex-row bg-background'>
      <main>
        <section className='mb-8 border-l-8 border-yellow-500 pl-6'></section>
        {club ? <ClubPage club={club} /> : <div>Club not found</div>}
      </main>
    </div>
  )
}
