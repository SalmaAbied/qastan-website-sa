import React from "react";

function CtaBanner() {
  return (
    <div className="relative bg-gray-800 py-12 px-6 md:py-24 md:px-12 text-center text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 flex">
          <div className="w-4 h-4 bg-red-500 md:w-8 md:h-8"></div>
          <div className="w-4 h-4 bg-blue-500 md:w-8 md:h-8"></div>
          <div className="flex flex-col">
            <div className="w-4 h-4 bg-orange-500 md:w-8 md:h-8"></div>
            <div className="w-4 h-4 bg-yellow-500 md:w-8 md:h-8"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0">
          <div className="flex flex-col">
            <div className="w-4 h-4 bg-orange-500 md:w-8 md:h-8"></div>
            <div className="flex">
              <div className="w-4 h-4 bg-yellow-500 md:w-8 md:h-8"></div>
              <div className="w-4 h-4 bg-red-500 md:w-8 md:h-8"></div>
              <div className="w-4 h-4 bg-blue-500 md:w-8 md:h-8"></div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl font-semibold mb-4">Samen duiken in de digitalisering van jouw onderneming?</h1>
      <p className="text-base md:text-xl w-3/4 mx-auto">We helpen je graag verder na een verkennend gesprek. We luisteren naar jouw noden, stellen een gepaste oplossing voor en laten je bedrijf vliegen!</p>
      <div className="flex flex-col justify-end items-center p-6">
        <a href="#" className="block w-fit md:mt-0 mt-2 font-medium md:mr-0 mr-2 bg-orange-500 px-5 py-3">
          Vraag een gesprek aan
        </a>
      </div>
    </div>
  );
}

export default CtaBanner;
