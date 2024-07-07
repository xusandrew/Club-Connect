import { logout } from '@/auth'
import React from 'react'

const LogoutButton: React.FC = () => {
  return (
    <form action={logout}>
      <button
        className={
          'inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
        }
        type='submit'
      >
        Logout
      </button>
    </form>
  )
}

export default LogoutButton
