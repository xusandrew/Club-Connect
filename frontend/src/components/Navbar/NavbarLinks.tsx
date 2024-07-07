'use client'

import { HomeIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/events', icon: HomeIcon },
  { name: 'Explore', href: '/explore', icon: BookOpenIcon },
]

export default function NavbarLinks() {
  const pathname = usePathname()

  return (
    <nav className='flex space-x-4'>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('text-gray-500', { 'text-yellow-500': pathname === link.href })}
          >
            <div className='flex items-center space-x-2'>
              <LinkIcon className='w-6' />
              <p className='hidden md:block'>{link.name}</p>
            </div>
          </Link>
        )
      })}
    </nav>
  )
}
