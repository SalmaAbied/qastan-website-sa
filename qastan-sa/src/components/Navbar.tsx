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
        <NavigationMenuDemo />
        <div className='flex'>
            <a href='/' className='m-2 flex items-center'>Oplossingen</a>
            <a href='/' className='m-2 flex items-center'>Toepassingen</a>
            <a href='/' className='m-2 flex items-center'>Over ons</a>
            <a href='/' className='m-2 flex items-center'>Jobs</a>
            <a href='/' className='m-2 flex items-center'>Contact</a>
            <a href='/' className='m-2 flex items-center'>Blog</a>
        </div>
        <div className='flex'>
            <button className='m-2 items-center'>Support</button>
            <button className='m-2 items-center'>Taal</button>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar
