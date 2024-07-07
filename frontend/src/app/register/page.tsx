import { register } from '@/auth'
import { Register } from '@/data/components/register'

const RegisterPage: React.FC = () => {
  return (
    <form action={register}>
      <Register />
    </form>
  )
}

export default RegisterPage
