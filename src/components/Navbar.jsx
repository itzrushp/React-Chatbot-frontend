import React from 'react';
import logo from '../assets/logo.webp'

function Navbar() {
  return (
    <>
    <div className='w-full h-[50px] bg-black flex flex-row justify-between align-center px-32'>
      <div className='logo h-10 w-10'> <img src={logo} alt="" /></div>
      
    </div>
    </>
  )
}

export default Navbar