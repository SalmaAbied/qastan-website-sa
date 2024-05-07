// import React, { useEffect } from "react";
// import Lottie from "../components/Lottie";
// import Typed from 'typed.js';

// function Hero() {
//   useEffect(() => {
//     const options = {
//       strings: ["digitaal", "Qastan"],
//       typeSpeed: 80,
//       backSpeed: 40,
//       backDelay: 2000,
//       showCursor: false,
//       loop: false
//     };
//     const typed = new Typed('.p2', options);

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//       <div className="container mx-auto flex justify-evenly h-1/2 my-10">
//         <div className="flex flex-col justify-center items-left text-left z-10 h-60 m-10">
//           <p className="p1 text-3xl md:text-5xl lg:text-7xl h-20">Helemaal</p>
//           <p className="p2 text-3xl md:text-5xl lg:text-7xl font-bold text-orange-500 h-20 mb-5">digitaal</p>
//           <p className="text-md w-96">Op zoek naar een IT-partner om de digitalisering van je organisatie in goede banen te leiden? Bij Qastan kunnen we het allemaal.</p>
//           <a href="/Support" className='text-white border-2 w-fit bg-orange-500 hover:border-2 border-orange-500 hover:bg-white hover:text-orange-500 font-medium px-4 h-8 my-2 flex items-center'>Neem contact op!</a>
         
//         </div>
//          <Lottie />
//       </div>
//   )
// }

// export default Hero
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import left from '../img/left.png'
import middle from '../img/middle.png'
import right from '../img/right.png'
import puffin from '../img/puffin.png'


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
    <section className="grid grid-cols-1 md:grid-cols-2 place-items-center p-10 min-h-screen overflow-hidden">
      <div className="info flex flex-col items-left gap-5 p-10 md:p-20">
        <p className="p1 text-3xl md:text-5xl lg:text-7xl h-20">Helemaal</p>
        <p className="p2 text-3xl md:text-5xl lg:text-7xl font-bold text-orange-500 h-20 mb-5">digitaal</p>
        <p className="text-lg md:text-xl lg:text-2xl text-center"></p>
        <a href="#content" className="button explore">Neem contact op</a>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-end">
        <img className="" src={puffin} alt="puffin" />
        <img className="max-w-full w-56 mr-2 mb-5 md:mb-0 " src={left} alt="left side puffin" />
        <img className="max-w-full w-56 -translate-y-6 mb-5 md:mb-0" src={middle} alt="middle side puffin" />
        <img className="max-w-full w-56 ml-2 mb-5 md:mb-0" src={right} alt="right side puffin" />
      </div>
    </section>
  );
}

export default Hero;


