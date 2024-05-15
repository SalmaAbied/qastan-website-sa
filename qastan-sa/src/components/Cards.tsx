import React from "react";

const oplossingenData = [
  {
    id: 1,
    title: "Digitaliseren",
    imageSrc: "https://th.bing.com/th/id/OIG3.ftLTbgmg9wTyyDxvCyr.?w=1024&h=1024&rs=1&pid=ImgDetMain",
    altText: "digitalisering",
    description: "Archiveren, document management, digitaal ondertekenen, documentherkenning, structuur, workflow management, … Kies voor een papierloze organisatie!",
    link: "/Oplossingen/Digitaliseren",
    borderColor: "orange-500" 
  },
  {
    id: 2,
    title: "Automatiseren",
    imageSrc: "https://th.bing.com/th/id/OIG3.F5nsU2ETP0w_caYzeO3y?w=1024&h=1024&rs=1&pid=ImgDetMain",
    altText: "automatiseren",
    description: "100% focus op het maximaliseren van efficiëntie en productiviteit via integraties, koppelingen tussen systemen of een maatwerktoepassing om jouw organisatie aan te sturen.",
    link: "/Oplossingen/Automatiseren",
    borderColor: "pink-500" 
  },
  {
    id: 3,
    title: "Plannen",
    imageSrc: "https://th.bing.com/th/id/OIG2.OEHBq1JW7Z7_zmAqMZl0?w=1024&h=1024&rs=1&pid=ImgDetMain",
    altText: "plannen",
    description: "Reduceer tijdverlies en optimaliseer productiviteit van werknemers, taken of machines. Optimaal aansturen van werknemers op basis van competenties, skills en taken.",
    link: "/Oplossingen/Plannen",
    borderColor: "blue-500" 
  },
  {
    id: 4,
    title: "IT-beheer",
    imageSrc: "https://th.bing.com/th/id/OIG1.VgM1jFInMMX6h0InRZEG?w=1024&h=1024&rs=1&pid=ImgDetMain",
    altText: "IT-beheer",
    description: "Één aanspreekpunt voor alle IT-uitdagingen in jouw organisatie. Heldere communicatie, sterke expertise en duidelijk visie. Wij zijn de IT-partner die je nodig hebt!",
    link: "/Oplossingen/IT",
    borderColor: "green-500" 
  }
];

function Oplossingen() {
  return (
    <section className="container mx-auto mb-10">
      <h2 className="text-4xl md:text-5xl font-semibold text-center">Oplossingen</h2>
      <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-orange-500 block mt-4 mb-6" />
      <div className="gap-2 flex flex-wrap justify-around">
        {oplossingenData.map(oplossing => (
          <div key={oplossing.id} className={`relative bg-gray-800 overflow-hidden shadow-lg w-72 h-72 border-t-4 border-${oplossing.borderColor} shadow-2xl group`}>
            <div className="relative w-full h-96">
              <img src={oplossing.imageSrc} alt={oplossing.altText} className="absolute opacity-30 lg:opacity-65 w-full object-contain transition duration-300 group-hover:opacity-10" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-start p-6">
              <h3 className="text-white text-2xl font-semibold mb-2">{oplossing.title}</h3>
              <p className="text-white font-medium text-sm mb-4 lg:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">{oplossing.description}</p>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end items-center p-6">
              <a href={oplossing.link} className="block w-fit md:mt-0 mt-2 font-medium md:mr-0 mr-2 bg-[#fff2dd] px-5 py-3">
                Meer informatie
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Oplossingen;
