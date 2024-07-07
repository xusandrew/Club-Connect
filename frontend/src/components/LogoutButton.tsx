import { logout } from '@/auth'
import React from 'react'

const LogoutButton: React.FC = () => {
  return <button onClick={logout}>Logout</button>
}

export default LogoutButton
