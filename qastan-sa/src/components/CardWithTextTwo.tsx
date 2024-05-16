import React from "react";


const cardData: CardProps[] = [
  {
    imageUrl: "https://www.qastan.be/swfiles/files/documenten-centraliseren.jpeg",
    tags: ["FITdoc"],
    title: "Bestanden centraliseren",
    description: "Nooit meer op zoek naar dossiers of documenten. Verzamel al je informatie op één centrale plek.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/Cyberawarenesstraining-ITpartner.png",
    tags: ["Veiligheid", "Phising"],
    title: "Cyberveiligheid: awarenesstraining",
    description: "Behoed jouw bedrijf op mogelijk cyberaanvallen door alle medewerkers attent te maken op de gevaren van phishing en het belang van een veilig werkomgeving.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/itsupport.jpeg",
    tags: ["IT"],
    title: "Eén aanspreekpunt voor jouw volledige IT",
    description: "Op zoek naar een partner die je kan bijstaan op vlak van IT én die altijd bereikbaar is?",
  },
];

const CardWithDynamicContent: React.FC = () => {
  return (
    <>
      <div className="pb-20">
        <h2 className="text-4xl md:text-5xl font-semibold text-center">Gerelateerde toepassingen</h2>
        <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-orange-500 block mt-4 mb-6" />
        <div className="flex flex-wrap container mx-auto justify-around xxl:w-3/4">
          {cardData.map((card, index) => (
            <div key={index} className="bg-white p-4 shadow-lg w-3/4 sm:w-min mb-8 flex flex-col">
              <div className="sm:w-96 sm:h-96 overflow-hidden flex items-center">
                <img src={card.imageUrl} alt={card.title} />
              </div>
              <div className="overflow-hidden relative flex-grow">
                <ul className="list-none my-5 flex">
                  {card.tags.map((tag, index) => (
                    <li key={index} className="bg-orange-200 text-orange-700 px-4 py-2 font-semibold text-xs mr-2">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h1>
                  <p className="text-base font-light text-gray-700 mb-4">{card.description}</p>
                </div>
              </div>
              <div className="mt-auto justify-end">
                <a href="#" className="block h-10 flex items-center w-fit md:mt-0 mt-2 font-base text-white bg-orange-500 px-5 py-3 hover:bg-transparent border-2 border-orange-500 hover:text-orange-500 transition duration-300">
                  Meer informatie
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardWithDynamicContent;
