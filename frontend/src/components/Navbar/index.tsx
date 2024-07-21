import Link from 'next/link'
import { getSession } from '@/auth'
import NavbarLinks from './NavbarLinks'
import LogoutButton from '../LogoutButton'
import { RabbitIcon } from '../icons'

export default async function Navbar() {
  const session = await getSession()
  const club = session?.club

  return (
    <>
      <header className='flex items-center w-full justify-between p-4 border-b border-gray-700'>
        <div className='flex items-center w-full gap-10'>
          <div className='flex items-center space-x-2'>
            <Link href='/'>
              <div className='flex items-center space-x-5'>
                <RabbitIcon className='h-6 w-6' />
                <h1 className='text-xl font-bold'>ClubsConnect</h1>
              </div>
            </Link>
          </div>
          <NavbarLinks />
        </div>
        <div className='flex gap-10 items-center w-[350px]'>
          {club ? (
            <>
              <Link href={`/club/${club.cid}`}>{club.name}</Link>
              <LogoutButton />
            </>
          ) : (
            <Link
              href='/login'
              className={
                'text-nowrap inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              }
            >
              Login as a Club
            </Link>
          )}
        </div>
      </header>
    </>
  )
}
