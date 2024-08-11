import React from 'react'
import logo from '../utils/Netflix_Logo.png'

const Header = () => {
  return (
    <div className='absolute z-10'>
      <img className='w-40 px-0 py-0 bg-gradient-to-b from-black' src={logo}  alt='logo'/>
    </div>
  )
}

export default Header