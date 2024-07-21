import { ClubInfo } from '@/data/components/club-info'
import { fetchClubById } from '@/lib/data'

export default async function ClubPage({ params }: { params: { cid?: string | undefined } }) {
  const cid = params.cid || ''
  const club = await fetchClubById(parseInt(cid))

  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <main>
        <section className='mb-8 border-l-8 border-yellow-500 pl-6'></section>
        {club ? <ClubInfo club={club} /> : <div>Club not found</div>}
      </main>
    </div>
  )
}
