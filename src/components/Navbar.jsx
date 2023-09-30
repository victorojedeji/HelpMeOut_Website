import React from 'react'
import logo from '../assets/logo.svg'
export default function Navbar() {
  return (
    <header className='w-full h-[80px] md:px-[100px] py-[14px] flex justify-between items-center px-[20px]'>
      <div className='flex items-center gap-[10px]'>
        <img src={logo} alt="logo" className='w-[40px] h-[40px]' />
        <h1 className='hidden md:block'>HelpMeOut</h1>
      </div>

      <ul className='flex items-center gap-[20px] md:gap-[40px] mr-[20px] md:mr-[0px] ml-auto md:ml-[0px]'>
        <li>Features</li>
        <li>How It Works</li>
      </ul>

      <h1>Get started</h1>
    </header>
  )
}
