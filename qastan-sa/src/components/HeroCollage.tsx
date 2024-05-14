import React from "react";

const HeroCollage: React.FC<HeroCollageProps> = ({ images }) => {
  return (
    <>
      <div className="mt-10">
        <section className="grid grid-cols-3 grid-rows-4 h-96 gap-4 my-10">
          {/* Eerste kolom */}
          <div className="bg-cover bg-center col-span-1 row-span-4 object" style={{ backgroundImage: `url('${images[0]}')` }} />
          {/* Tweede kolom */}
          <div className="bg-cover bg-center col-span-1 row-span-3" style={{ backgroundImage: `url('${images[1]}')` }} />
          <div className="bg-cover bg-center col-span-1 row-span-1" style={{ backgroundImage: `url('${images[2]}')` }} />
          {/* Derde kolom */}
          <div className="bg-cover bg-center col-span-1 row-span-3" style={{ backgroundImage: `url('${images[3]}')` }} />
          <div className="bg-cover bg-center col-span-1 row-span-1" style={{ backgroundImage: `url('${images[4]}')` }} />
        </section>
      </div>
      <div className="container mx-auto grid grid-cols-9 grid-rows-3">
        <div className="border-2 border-orange-500 w-36 h-36 m-5"></div>
        <div className="col-span-3 row-span-3  m-5">
          <img src="https://www.qastan.be/swfiles/files/competentiematrix.jpeg" alt="" />
        </div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        <div className="border-2 border-blue-500 w-36 h-36 m-5"></div>
        {/* Voeg meer divs toe voor andere cellen */}
      </div>
    </>
  );
};

export default HeroCollage;
