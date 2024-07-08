import { formatDate } from '@/lib/utils'

type WeekCardProps = {
  week: Date
  numberOfEvents: number
}

export function WeekCard({ week, numberOfEvents }: WeekCardProps) {
  return (
    <section className='mb-8 border-l-8 border-yellow-500 pl-6'>
      <p className='text-gray-400'>{numberOfEvents} event(s) taking place!</p>
      <h2 className='text-4xl font-bold'>Week of {formatDate(week)}</h2>
    </section>
  )
}
