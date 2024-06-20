import { Card } from '../components/events/post-card'
import { mockEvents } from 'types/mockEventData'

export default function Component() {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <header className='flex items-center justify-between p-4 border-b border-gray-700'>
        <div className='flex items-center space-x-2'>
          <RabbitIcon className='h-6 w-6' />
          <h1 className='text-xl font-bold'>ClubsConnect</h1>
        </div>
        <nav className='flex space-x-4'>
          <a href='#' className='text-yellow-500'>
            Home
          </a>
          <a href='#' className='text-gray-500'>
            Explore
          </a>
        </nav>
      </header>
      <main className='p-8'>
        <section className='mb-8'>
          <p className='text-yellow-500'>7 events taking/took place!</p>
          <h2 className='text-4xl font-bold'>Week of Jun 2</h2>
        </section>
        <section className='space-y-8'>
          {mockEvents.map((event, index) => (
            <Card key={index} event={event} />
          ))}
        </section>
      </main>
    </div>
  )
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M8 2v4' />
      <path d='M16 2v4' />
      <rect width='18' height='18' x='3' y='4' rx='2' />
      <path d='M3 10h18' />
    </svg>
  )
}

function LocateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='2' x2='5' y1='12' y2='12' />
      <line x1='19' x2='22' y1='12' y2='12' />
      <line x1='12' x2='12' y1='2' y2='5' />
      <line x1='12' x2='12' y1='19' y2='22' />
      <circle cx='12' cy='12' r='7' />
    </svg>
  )
}

function RabbitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M13 16a3 3 0 0 1 2.24 5' />
      <path d='M18 12h.01' />
      <path d='M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3' />
      <path d='M20 8.54V4a2 2 0 1 0-4 0v3' />
      <path d='M7.612 12.524a3 3 0 1 0-1.6 4.3' />
    </svg>
  )
}
