import Link from 'next/link'
import { getSession } from '@/auth'
import NavbarLinks from './NavbarLinks'
import LogoutButton from '../LogoutButton'
import { RabbitIcon } from '../icons'
import { ModeToggle } from './ThemeToggleButton'

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
          <NavbarLinks club={club} />
        </div>
        <div className='flex gap-6 items-center w-[200px]'>
          {club ? (
            <>
              <Link className='hover:bg-black/10 p-2 px-4' href='/create-event'>
                +
              </Link>
              <LogoutButton />
            </>
          ) : (
            <Link
              href='/login'
              className={
                'text-nowrap inline-flex h-10 items-center justify-center rounded-md border border-input px-8 text-sm font-medium transition-colors hover:bg-black/100'
              }
            >
              Login
            </Link>
          )}
        </div>
        <ModeToggle />
      </header>
    </>
  )
}
