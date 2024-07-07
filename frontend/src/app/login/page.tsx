import { login } from '@/auth'
import { Login } from 'data/components/login'

const LoginPage: React.FC = () => {
  return (
    <form action={login}>
      <Login />
    </form>
  )
}

export default LoginPage
