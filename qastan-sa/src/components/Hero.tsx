import React, { useEffect } from 'react';
import Typed from 'typed.js';

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
    <section className="container mx-auto h-screen relative">
      <div className="flex flex-col h-full justify-center items-center">
        <div className="relative inner-text text-left lg:text-center lg:absolute lg:left-0 lg:top-1/2 lg:transform lg:-translate-y-1/2">
          <p className="p1 text-3xl md:text-5xl lg:text-7xl">Helemaal</p>
          <p className="p2 text-3xl md:text-5xl lg:text-7xl font-bold text-orange-500">digitaal</p>
        </div>
        <div className="lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2">
          <img src="https://www.qastan.be/swfiles/files/penguin.svg?nc=1714642186" alt="puffin" className="object-cover w-64 h-90" />
        </div>
        <div className="lg:absolute lg:left-0 lg:bottom-10 lg:w-full lg:text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Neem contact op!</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
