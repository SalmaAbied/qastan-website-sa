import React from 'react';

const featuresData: FeatureData[] = [
  {
    imageUrl: "https://th.bing.com/th/id/OIG2.OHE7w.x.y10IEggmgsx9?pid=ImgGn",
    title: "Jouw digitale bouwstenen",
    description: "Op zoek naar een IT-partner om de digitalisering van je organisatie in goede banen te leiden? Software op maat, document management of personeelsplanning, bij Qastan kunnen we het allemaal. We duiken in je business, zwemmen samen richting een optimale digitale workflow en laten je bedrijf vliegen! Wij zijn de digitale architecten voor jouw organisatie of bedrijf. Net als de papegaaiduiker in ons logo, zijn onze medewerkers multi-getalenteerd en kunnen ze het hele spectrum van digitale transformatie aan."
  }
];

const Cards: React.FC = () => {
  return (
    <div className="p-8 md:p-20 w-3/4 mx-auto">
      <div>
        {featuresData.map((feature, index) => (
          <div key={index} className={`bg-[#fcac0027] mb-8 md:mb-20 flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse bg-blue-500'}`}>
            <div className="">
              <img src={feature.imageUrl} alt={feature.title} className="w-96 block transform scale-105 transition duration-300 ease-in-out" />
            </div>
            <div className="md:w-1/2 mx-auto">
              <h1 className="text-black text-4xl font-medium mb-4">{feature.title}</h1>
              <p className="text-gray-800 text-base leading-7">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
