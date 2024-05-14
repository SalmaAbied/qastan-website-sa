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
    </>
  );
};

export default HeroCollage;
