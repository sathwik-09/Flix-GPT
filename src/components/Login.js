import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignup = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg' alt='logo'/>
      </div>
      <form className='absolute p-12 w-3/12 m-36 mx-auto right-0 left-0 rounded-md bg-black bg-opacity-80'>
        <h1 className='text-3xl font-bold text-white my-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        {
          !isSignIn &&  <input type='text' placeholder='Enter your name' className='text-white my-2 p-4 w-full rounded-md border bg-gray-600 bg-opacity-20'/>
        }
        <input type='text' placeholder='Email or Mobile Number' className='text-white my-2 p-4 w-full rounded-md border bg-gray-600 bg-opacity-20'/>
        <input type='password' placeholder='Password' className='text-white my-2 p-4 w-full rounded-md border bg-gray-600 bg-opacity-20'/>
      <button className='my-4 p-4 bg-red-800 text-white rounded-lg w-full'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        <p className='py-4 px-2 text-white cursor-pointer' onClick={toggleSignup}>{isSignIn ? 'New to Netflix? Sign Up' : 'Already have an account? Sign In'}</p>
      </form>
      
    </div>
  )
}

export default Login