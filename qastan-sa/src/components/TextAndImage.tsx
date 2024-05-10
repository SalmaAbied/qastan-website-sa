import React from 'react';

interface FeatureData {
  imageUrl: string;
  title: string;
  description: string;
}

const featuresData: FeatureData[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1715153871357-38602a145547?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Jouw digitale bouwstenen",
    description: "Op zoek naar een IT-partner om de digitalisering van je organisatie in goede banen te leiden? Software op maat, document management of personeelsplanning, bij Qastan kunnen we het allemaal. We duiken in je business, zwemmen samen richting een optimale digitale workflow en laten je bedrijf vliegen! Wij zijn de digitale architecten voor jouw organisatie of bedrijf. Net als de papegaaiduiker in ons logo, zijn onze medewerkers multi-getalenteerd en kunnen ze het hele spectrum van digitale transformatie aan."
  }
];

const Cards: React.FC = () => {
  return (
    <div id="features" className="p-8 md:p-20">
      <div className="features-inner">
        {featuresData.map((feature, index) => (
          <div key={index} className={`features-group bg-orange-500 mb-8 md:mb-20 flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse bg-blue-500'}`}>
            <div className="features-image md:w-1/2">
              <img src={feature.imageUrl} alt={feature.title} className="w-full block transform scale-105 transition duration-300 ease-in-out" />
            </div>
            <div className="features-text md:w-1/2  p-10">
              <h1 className="text-black text-2xl font-bold mb-4">{feature.title}</h1>
              <p className="text-gray-800 text-lg leading-7">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
