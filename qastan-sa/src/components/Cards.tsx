import React from "react";

function Oplossingen() {
  return (
    <section className="container mx-auto pb-40">
      <h2 className="text-4xl md:text-5xl font-bold text-center">Oplossingen</h2>
      <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-orange-500 block mt-4 mb-6" />
      <div className="gap-2 flex flex-wrap justify-center">
        <div className="relative bg-gray-800 overflow-hidden shadow-lg w-72 h-72 border-t-4 border-orange-500 shadow-2xl group">
          <div className="relative w-full h-96">
            <img src="https://th.bing.com/th/id/OIG3.ftLTbgmg9wTyyDxvCyr.?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="digitalisering" className="absolute opacity-30 lg:opacity-65 w-full object-contain transition duration-300 group-hover:opacity-10" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-start p-6">
            <h3 className="text-white text-2xl font-semibold mb-2">Digitaliseren</h3>
            <p className="text-white font-medium text-sm mb-4 lg:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">Archiveren, document management, digitaal ondertekenen, documentherkenning, structuur, workflow management, … Kies voor een papierloze organisatie!</p>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end items-center p-6">
            <a href="/Digitaliseren" className="block w-fit md:mt-0 mt-2 font-medium md:mr-0 mr-2 bg-[#fff2dd] px-5 py-3">
              Meer informatie
            </a>
          </div>
        </div>
        <div className="relative bg-gray-800 overflow-hidden shadow-lg w-72 h-72 border-t-4 border-pink-500 shadow-2xl group">
        <div className="relative w-full h-96">
            <img src="https://th.bing.com/th/id/OIG3.F5nsU2ETP0w_caYzeO3y?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="automatiseren" className="absolute opacity-30 lg:opacity-65 w-full object-contain transition duration-300 group-hover:opacity-10" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-start p-6">
            <h3 className="text-white text-2xl font-semibold mb-2">Automatiseren</h3>
            <p className="text-white font-medium text-sm mb-4 lg:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">100% focus op het maximaliseren van efficiëntie en productiviteit via integraties, koppelingen tussen systemen of een maatwerktoepassing om jouw organisatie aan te sturen.</p>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end items-center p-6">
            <a href="/Automatiseren" className="block w-fit md:mt-0 mt-2 font-medium md:mr-0 mr-2 bg-[#fff2dd] px-5 py-3">
              Meer informatie
            </a>
          </div>
        </div>
        <div className="relative bg-gray-800 overflow-hidden shadow-lg w-72 h-72 border-t-4 border-blue-500 shadow-2xl group">
        <div className="relative w-full h-96">
            <img src="https://th.bing.com/th/id/OIG2.OEHBq1JW7Z7_zmAqMZl0?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="plannen" className="absolute opacity-30 lg:opacity-65 w-full object-contain transition duration-300 group-hover:opacity-10" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-start p-6">
            <h3 className="text-white text-2xl font-semibold mb-2">Plannen</h3>
            <p className="text-white font-medium text-sm mb-4 lg:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">Reduceer tijdverlies en optimaliseer productiviteit van werknemers, taken of machines. Optimaal aansturen van werknemers op basis van competenties, skills en taken.</p>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end items-center p-6">
            <a href="/Plannen" className="block w-fit md:mt-0 mt-2 font-medium md:mr-0 mr-2 bg-[#fff2dd] px-5 py-3">
              Meer informatie
            </a>
          </div>
        </div>
        <div className="relative bg-gray-800 overflow-hidden shadow-lg w-72 h-72 border-t-4 border-green-500 shadow-2xl group">
        <div className="relative w-full h-96">
            <img src="https://th.bing.com/th/id/OIG1.VgM1jFInMMX6h0InRZEG?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="IT-beheer" className="absolute opacity-30 lg:opacity-65 w-full object-contain transition duration-300 group-hover:opacity-10" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-start p-6">
            <h3 className="text-white text-2xl font-semibold mb-2">IT-beheer</h3>
            <p className="text-white font-medium text-sm mb-4 lg:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">Één aanspreekpunt voor alle IT-uitdagingen in jouw organisatie. Heldere communicatie, sterke expertise en duidelijk visie. Wij zijn de IT-partner die je nodig hebt!</p>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end items-center p-6">
            <a href="/IT" className="block w-fit md:mt-0 mt-2 font-medium md:mr-0 mr-2 bg-[#fff2dd] px-5 py-3">
              Meer informatie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Oplossingen;
