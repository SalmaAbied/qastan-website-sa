import React from 'react'
import myImage from '../img/logo.png';
import { NavigationMenuDemo } from './shadcn/navDropdown';

function Navbar() {

  return (
    <>
    <nav className='bg-white text-gray-800 shadow-lg sticky top-0 z-50'>
    <div className='container mx-auto flex justify-between'>
        <div className='m-2'>
            <a href="/" className="flex items-center">
                <img src={myImage} alt="qastan logo" className="h-14" />
            </a>
        </div>
        <div className='flex'>
            <a href='/' className='m-2 flex items-center'>
                <NavigationMenuDemo />
            </a>
            <a href='/Toepassingen' className='m-2 px-4 font-medium flex items-center'>Toepassingen</a>
            <a href='/Over' className='m-2 px-4 font-medium flex items-center'>Over ons</a>
            <a href='/Jobs' className='m-2 px-4 font-medium flex items-center'>Jobs</a>
            <a href='/Contact' className='m-2 px-4 font-medium flex items-center'>Contact</a>
            <a href='/Blog' className='m-2 px-4 font-medium flex items-center'>Blog</a>
        </div>
        <div className='flex'>
            <a href="/Support" className='m-2 flex items-center'>Support</a>
            <a href='/' className='m-2 flex items-center'>Taal</a>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar
