import React from 'react'
import myImage from '../img/logo.png';

function Navbar() {
  return (
    <>
    <div className='container mx-auto flex justify-between'>
        <div className='mx-2'>
            <a href="/" className="flex items-center">
                <img src={myImage} alt="qastan logo" className="h-14" />
            </a>
        </div>
        <div className='flex'>
            <a href='/' className='mx-2'>oplossingen</a>
            <a href='/' className='mx-2'>toepassingen</a>
            <a href='/' className='mx-2'>over ons</a>
            <a href='/' className='mx-2'>jobs</a>
            <a href='/' className='mx-2'>contact</a>
            <a href='/' className='mx-2'>blog</a>
        </div>
        <div>
            <button className='mx-2'>support</button>
            <button className='mx-2'>taal</button>
        </div>
    </div>
    </>
  )
}

export default Navbar
