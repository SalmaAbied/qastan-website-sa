import React from "react";

const featuresData: FeatureData[] = [
  {
    imageUrl: "https://th.bing.com/th/id/OIG2.OHE7w.x.y10IEggmgsx9?pid=ImgGn",
    title: "Jouw digitale bouwstenen",
    description: "Op zoek naar een IT-partner om de digitalisering van je organisatie in goede banen te leiden? Software op maat, document management of personeelsplanning, bij Qastan kunnen we het allemaal. We duiken in je business, zwemmen samen richting een optimale digitale workflow en laten je bedrijf vliegen! Wij zijn de digitale architecten voor jouw organisatie of bedrijf. Net als de papegaaiduiker in ons logo, zijn onze medewerkers multi-getalenteerd en kunnen ze het hele spectrum van digitale transformatie aan.",
    button: "Meer over Qastan",
  },
];

const Card: React.FC = () => {
  return (
    <div className="px-8 xxl:p-20 mx-auto md:w-3/4">
      {featuresData.map((feature, index) => (
        <div key={index} className={`bg-[#fcac0027] mb-8 md:mb-20 flex flex-col xl:flex-row md:items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse bg-blue-500"}`}>
          <div className="w-full md:w-1/2 mx-auto">
            <img src={feature.imageUrl} alt={feature.title} className="w-full md:max-w-xl block mx-auto md:mx-0 scale-105" />
          </div>
          <div className="w-full xl:w-1/2 mx-auto px-10 py-5">
            <h1 className="text-2xl md:text-4xl font-medium mb-4 mt-5 md:mt-0">{feature.title}</h1>
            <p className="text-base leading-7 mb-5 md:mb-0">{feature.description}</p>
            <a href="/Support" className="mt-5 w-fit text-white border-2 bg-orange-500 hover:border-2 border-orange-500 hover:bg-[#fcac0027] hover:text-orange-500 font-medium px-4 h-8  flex items-center transition duration-300">
              {feature.button}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
