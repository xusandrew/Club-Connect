import { login } from '@/auth'

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <form action={login}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input className='text-black' type='text' id='email' name='email' />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input className='text-black' type='password' id='password' name='password' />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
