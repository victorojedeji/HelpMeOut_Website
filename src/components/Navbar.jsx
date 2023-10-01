import React from 'react'
import logo from '../assets/logo.svg'
export default function Navbar() {
  return (
    <header className='w-full h-[80px] md:px-[100px] py-[14px] flex justify-between items-center px-[20px] fixed left-0 top-0 shadow-md bg-white' style={{zIndex: 100}}>
      <div className='flex items-center gap-[10px]'>
        <img src={logo} alt="logo" className='w-[40px] h-[40px]' />
        <h1 className='hidden md:block text-[#0A0628] font-bold text-base'>HelpMeOut</h1>
      </div>

      <div className='hidden sm:flex items-center justify-between gap-[10px] sm:gap-[20px] md:gap-[40px] mr-[20px] md:mr-[0px] ml-auto md:ml-[0px]'>
        <h1 className='text-base font-medium'>Features</h1>
        <h1 className='text-base font-medium'>How It Works</h1>
      </div>

      <h1 className='text-base text-[#120B48] font-semibold'>Get started</h1>
    </header>
  )
}
