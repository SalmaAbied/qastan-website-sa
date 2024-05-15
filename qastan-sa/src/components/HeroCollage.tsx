import React from "react";

const HeroCollage: React.FC = () => {
  return (
    <>
      <div className="relative">
        <img src="https://www.qastan.be/swfiles/files/documenten-centraliseren.jpeg" alt="hero image" className="h-96 w-full object-cover brightness-50" />
        <div className="absolute top-1/2 left-1/4">
          <h1 className="text-white">Title</h1>
          <p className="text-white">Alle Oplossingen</p>
        </div>
      </div>
    </>
  );
};

export default HeroCollage;
