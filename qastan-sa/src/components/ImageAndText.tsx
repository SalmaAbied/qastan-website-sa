import React from "react";

const featuresData: FeatureData[] = [
  {
    imageUrl: "https://www.qastan.be/swfiles/files/teamqastan-it-partner-kortrijk.jpeg?nc=1700596957",
    title: "Maak kennis met ons team",
    description: "Bij Qastan zijn we dol op automatisering en digitalisering. Maar een geweldig team bestaat natuurlijk uit échte mensen met een passie voor IT en bakken ervaring! Ze hebben elk hun eigen sterktes, maar delen allemaal dezelfde mindset: enthousiast en gemotiveerd om jouw onderneming te ondersteunen.",
  },
];

const CardWithText: React.FC = () => {
  return (
    <div className="p-8 xxl:p-20 mx-auto md:w-3/4 mt-20">
      {featuresData.map((feature, index) => (
        <div key={index} className={`bg-[#fcac0027] mb-8 md:mb-20 flex flex-col xl:flex-row md:items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse bg-blue-500"}`}>
          <div className="w-full xl:w-1/2 mx-auto px-10 py-5">
            <h1 className="text-gray-800 text-2xl md:text-4xl font-medium mb-4 mt-5 md:mt-0">{feature.title}</h1>
            <p className="text-gray-800 text-base leading-7 mb-5 md:mb-0">{feature.description}</p>
            <div className="flex justify-start my-10 text-white">
              <a href="#" className="block w-fit md:mt-0 mt-2 font-medium md:mr-5 mr-2 bg-orange-500 px-5 py-3 hover:bg-transparent border-2 border-orange-500 hover:text-orange-500 transition duration-300">
                Ontmoet het team
              </a>
              <a href="#" className="block w-fit md:mt-0 mt-2 text-orange-500 font-medium md:mr-0 mr-2 border-2 border-orange-500 px-5 py-3 hover:bg-orange-500 hover:text-white transition duration-300">
                Deel uitmaken van ons team
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 mx-auto flex justify-end">
            <img src={feature.imageUrl} alt={feature.title} className="w-full md:max-w-xl block mx-auto md:mx-0 scale-105" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardWithText;
