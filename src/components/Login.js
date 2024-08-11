import React from 'react'
import Header from './Header'
import { useState } from 'react';


const Login = () => {

const [isSignInForm, setIsSignInForm] = useState(true);

const toggleSignInForm = () =>{
  setIsSignInForm(!isSignInForm);
};


  return (
    <div><Header/>
    <div className=' relative h-screen w-screen flex flex-col items-center justify-center'>
      <img className='absolute h-full w-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg' alt='background'/>
    
    <form className='relative  p-8 bg-black bg-opacity-75 w-80 rounded-lg shadow-lg'>
      <h2 className='text-white text-2xl mb-6 text-center'>{isSignInForm ? 'Sign In': 'Sign Up'}</h2>
      <input type='text' placeholder='Email address' className='p-3 mb-4 w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600'
      />
      <input type='text' placeholder='Password' className='p-3 mb-4 w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600'/>
      {
        !isSignInForm &&(
          <input type='text' placeholder='Confirm Password' className='p-3 mb-4 w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600'/>
        )
      };
      <button className='p-3 w-full bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300 '>{isSignInForm ? 'Sign In' : 'Sign up'}</button>
      <div className='text-gray-400 mt-4 text-sm text-center'>
      {isSignInForm ? (
              <>
                New to Netflix-gpt?{' '}
                <a href='#' className='text-white hover:underline' onClick={toggleSignInForm}>
                  Sign up now.
                </a>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <a href='#' className='text-white hover:underline' onClick={toggleSignInForm}>
                  Sign in here.
                </a>
              </>
            )}
 
      </div>
    </form>
    </div>
    </div>
    
    
  )
}

export default Login