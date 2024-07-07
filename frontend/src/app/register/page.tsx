'use client'

import { register } from '@/auth'

const RegisterPage: React.FC = () => {
  return (
    <div>
      <h1>Register</h1>
      <form action={register}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input className='text-black' type='text' id='email' name='email' />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input className='text-black' type='password' id='password' name='password' />
        </div>
        <div>
          <label htmlFor='name'>Name:</label>
          <input className='text-black' type='text' id='name' name='name' />
        </div>
        <div>
          <label htmlFor='description'>Description:</label>
          <input className='text-black' type='text' id='description' name='description' />
        </div>
        <div>
          <label htmlFor='instagram'>Instagram:</label>
          <input className='text-black' type='text' id='instagram' name='instagram' />
        </div>
        <div>
          <label htmlFor='discord'>Discord:</label>
          <input className='text-black' type='text' id='discord' name='discord' />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
