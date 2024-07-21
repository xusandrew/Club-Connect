import { getSession } from '@/auth'
import { LoginForm } from '@/components/LoginForm'

export default async function LoginPage() {
  const session = await getSession()
  if (session) {
    return <div>Already logged in</div>
  }

  return <LoginForm />
}
