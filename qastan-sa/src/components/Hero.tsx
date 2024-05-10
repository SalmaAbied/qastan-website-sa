import React, { useEffect } from 'react';
import Typed from 'typed.js';
import left from '../img/left.png'
import middle from '../img/middle.png'
import right from '../img/right.png'
import puffin from '../img/puffin.jpeg'


const Hero: React.FC = () => {

  useEffect(() => {
    const options = {
      strings: ["digitaal", "Qastan"],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      showCursor: false,
      loop: false
    };
    const typed = new Typed('.p2', options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center sm:p-5 md:p-10 min-h-screen overflow-hidden">
      <div className="flex flex-col items-left gap-5 p-10 md:p-20">
        <p className="text-gray-800 text-3xl md:text-5xl lg:text-7xl h-10 lg:h-20">Helemaal</p>
        <p className="p2 text-3xl md:text-5xl lg:text-7xl font-bold text-orange-500 h-10 lg:h-20 mb-5">digitaal</p>
        <p className="text-gray-800 text-lg md:text-xl lg:text-lg">Op zoek naar een IT-partner om de digitalisering van je organisatie in goede banen te leiden? Software op maat, document management of personeelsplanning, bij Qastan kunnen we het allemaal. </p>
        <a href="/Support" className='w-fit text-white border-2 bg-orange-500 hover:border-2 border-orange-500 hover:bg-white hover:text-orange-500 font-medium px-4 h-8 m-2 flex items-center'>Neem contact op</a>      
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-end">
        <img className="lg:hidden" src={puffin} alt="puffin" />
        <img className="hidden lg:block max-w-full w-48 mr-2 mb-5 lg:mb-0 " src={left} alt="left side puffin" />
        <img className="hidden lg:block max-w-full w-48 -translate-y-6 mb-5 lg:mb-0" src={middle} alt="middle side puffin" />
        <img className="hidden lg:block max-w-full w-48 ml-2 mb-5 lg:mb-0" src={right} alt="right side puffin" />
      </div>
    </section>
  );
}

export default Hero;


