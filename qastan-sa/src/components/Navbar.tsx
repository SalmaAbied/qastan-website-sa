import React, { useState } from 'react';
import myImage from '../img/logo.png';
import { NavigationMenuDemo } from './shadcn/navDropdown';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className='bg-white text-gray-800 lg:shadow-lg sticky top-0 z-50'>
        <div className='container mx-auto flex justify-between'>
          <div className='m-2'>
            <a href="/" className="flex items-center">
              <img src={myImage} alt="qastan logo" className="h-14" />
            </a>
          </div>
          <div className='flex items-center lg:hidden'>
            <button onClick={toggleMobileMenu} className='block text-gray-800 hover:text-gray-900 focus:text-gray-900 focus:outline-none'>
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                {mobileMenuOpen ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                )}
              </svg>
            </button>
          </div>
          <div className={`hidden lg:flex ${mobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className='flex'>
              <a href='/' className='m-2 flex items-center'>
                <NavigationMenuDemo />
              </a>
              <a href='/Toepassingen' className='m-2 px-4 font-medium flex items-center'>Toepassingen</a>
              <a href='/Over' className='m-2 px-4 font-medium flex items-center'>Over ons</a>
              {/* <a href='/Jobs' className='m-2 px-4 font-medium flex items-center'>Jobs</a> */}
              <a href='/Contact' className='m-2 px-4 font-medium flex items-center'>Contact</a>
              <a href='/Blog' className='m-2 px-4 font-medium flex items-center'>Blog</a>
            </div>
            <div className='flex items-center'>
              <a href="/Support" className='text-white border-2 bg-orange-500 hover:border-2 border-orange-500 hover:bg-white hover:text-orange-500 font-medium px-4 h-8 m-2 flex items-center'>Support</a>
              <a href='/' className='m-2'>Taal</a>
            </div>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className='lg:hidden flex items-center justify-center'>
            <div className='h-screen w-screen py-4 px-2 flex flex-col items-center'>
            <a href='/' className='block py-2 px-4 font-medium'>Home</a>
            <a href='/' className='m-2 flex items-center'>
                <NavigationMenuDemo />
            </a>
            <a href='/Toepassingen' className='block py-2 px-4 font-medium'>Toepassingen</a>
            <a href='/Over' className='block py-2 px-4 font-medium'>Over ons</a>
            <a href='/Contact' className='block py-2 px-4 font-medium'>Contact</a>
            <a href='/Blog' className='block py-2 px-4 font-medium'>Blog</a>
            <div className='flex flex-col items-center'>
              <a href="/Support" className='text-white border-2 bg-orange-500 hover:border-2 border-orange-500 hover:bg-white hover:text-orange-500 font-medium px-4 h-8 m-2 flex items-center'>Support</a>
              <a href='/' className='m-2'>Taal</a>
            </div>
            </div>
        </div>
        )}
    </>
  );
}

export default Navbar;
