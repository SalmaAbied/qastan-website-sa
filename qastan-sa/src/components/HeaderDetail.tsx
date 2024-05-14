import React from "react";

function HeaderDetail() {
  return (
    <>
      <div className="container mx-auto mt-20 mb-5 bg-gray-800 relative h-72">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 flex">
            <div className="w-4 h-4 md:w-8 md:h-8 bg-red-500"></div>
            <div className="w-4 h-4 md:w-8 md:h-8 bg-blue-500"></div>
            <div className="flex flex-col">
              <div className="w-4 h-4 md:w-8 md:h-8 bg-orange-500"></div>
              <div className="w-4 h-4 md:w-8 md:h-8 bg-yellow-500"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <div className="flex flex-col">
              <div className="w-4 h-4 md:w-8 md:h-8 bg-orange-500"></div>
              <div className="flex">
                <div className="w-4 h-4 md:w-8 md:h-8 bg-yellow-500"></div>
                <div className="w-4 h-4 md:w-8 md:h-8 bg-red-500"></div>
                <div className="w-4 h-4 md:w-8 md:h-8 bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 md:p-20 text-white">
          <h1 className="text-lg md:text-4xl absolute bottom-14 md:bottom-28">Digitaliseren</h1>
          <h4 className="text-sm md:text-2xl font-light absolute bottom-8 md:bottom-20">Digitale documentoplossingen voor elke onderneming</h4>
        </div>
      </div>
    </>
  );
}

export default HeaderDetail;
