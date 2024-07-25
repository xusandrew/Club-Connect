import { logout } from '@/auth'
import React from 'react'

const LogoutButton: React.FC = () => {
  return (
    <form action={logout}>
      <button
        className={
          'inline-flex h-10 items-center justify-center px-6 text-sm font-medium hover:bg-black/10'
        }
        type='submit'
      >
        Logout
      </button>
    </form>
  )
}

export default LogoutButton
