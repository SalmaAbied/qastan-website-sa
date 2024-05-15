import React from "react";

const CardBlock: React.FC = () => {
  const cardsData = [
    {
      imageUrl: "https://www.qastan.be/swfiles/files/ocr-herkenning-facturen.jpeg",
      backgroundColor: "#fcac0027",
      title: "Digitalisering",
      subtitle: "elo",
      description: "Al je documenten op één plaats maar toch overal bij de hand hebben? Documenten sneller terugvinden, delen en beheren? Efficiënter werk en de administratieve last verkleinen? Kleine digitaliseringsoplossingen of grote automatiseringstrajecten, we passen onze oplossing aan naar de grootte van jouw onderneming. De mogelijkheden zijn eindeloos!",
      button: "Praktische voorbeelden",
      buttonlink: "/Toepassingen",
      buttontwo: "Meer info",
      buttontwolink:"/Oplossingen/Digitaliseren"
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/klantenportaal-digitaalportaal.jpeg",
      backgroundColor: "#b400001d",
      title: "Automatiseren",
      description: "Automatisering zorgt voor sterkere integraties tussen verschillende systemen en pakketten waardoor jouw IT-omgeving ten volle kan renderen via ons ERP, CRM, Power apps-toepassingen of webportalen. Bedrijfsprocessen worden gesystematiseerd of manueel en repetitief werk wordt geminimaliseerd.",
      button: "Praktische voorbeelden",
      buttonlink: "/Toepassingen",
      buttontwo: "Meer info",
      buttontwolink:"/Oplossingen/Automatiseren"
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/scheduling-en-planning.jpeg",
      backgroundColor: "#fcac0027",
      title: "Plannen",
      description: "Plannen is een tijdrovende klus waarbij het vaak moeilijk is om het overzicht te bewaren. Kleine of grote organisaties hebben steeds andere noden en zoeken schaalbare oplossingen die kunnen meegroeien binnen de organisatie. Planningsystemen die ontzorgen? Daar gaan we voor.",
      button: "Praktische voorbeelden",
      buttonlink: "/Toepassingen",
      buttontwo: "Meer info",
      buttontwolink:"/Oplossingen/Plannen"
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/hardware-leverancier-itpartner.jpeg",
      backgroundColor: "#b400001d",
      title: "IT-beheer",
      description: "We staan jouw organisatie bij in de dagdagelijkse taken. Bij ons ben je geen nummer maar praat je rechtstreeks met jouw contactpersonen. Echte mensen die jouw vanop afstand of ter plaatse helpen waar nodig. Zo ontzorgen wij jouw organisatie.",
      button: "Vraag een verkennend gesprek aan",
      buttonlink: "/Support",
      buttontwo: "Meer info",
      buttontwolink: "/Oplossingen/IT"
    },
  ];

  return (
    <>
    <section className="container mx-auto my-20 px-5 md:px-20">
      <h2 className="text-center text-3xl font-bold md:mb-5 pt-10">Jouw digitale bouwstenen</h2>
      <p className="text-center text-sm lg:text-lg max-w-3xl mx-auto mb-10">Op zoek naar een IT-partner om de digitalisering van je organisatie in goede banen te leiden? Software op maat, document management of personeelsplanning, bij Qastan kunnen we het allemaal. We duiken in je business, zwemmen samen richting een optimale digitale workflow en laten je bedrijf vliegen! Wij zijn de digitale architecten voor jouw organisatie of bedrijf. Net als de papegaaiduiker in ons logo, zijn onze medewerkers multi-getalenteerd en kunnen ze het hele spectrum van digitale transformatie aan.</p>
      <div className="flex flex-col gap-6 mt-16">
        {cardsData.map((card, index) => (
          <div key={index} className={`flex flex-col md:flex-row md:gap-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
            <div style={{ backgroundColor: card.backgroundColor }} className={`w-full lg:w-3/4 flex flex-col justify-center p-8 lg:p-14 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
              <h3 className="text-2xl  font-semibold mb-5">{card.title}</h3>
              <p className="opacity-75">{card.description}</p>
              <div className="flex justify-start my-10 text-white">
                <a href={card.buttonlink} className="text-sm block w-fit md:mt-0 mt-2 font-medium md:mr-5 mr-2 bg-orange-500 px-5 py-3 hover:bg-transparent border-2 border-orange-500 hover:text-orange-500 transition duration-300">
                  {card.button}
                </a>
                <a href={card.buttontwolink} className="text-sm block w-fit md:mt-0 mt-2 text-orange-500 font-medium md:mr-0 mr-2 border-2 border-orange-500 px-5 py-3 hover:bg-orange-500 hover:text-white transition duration-300">
                  {card.buttontwo}
                </a>
              </div>
            </div>
            <div className={`w-full lg:w-1/4 overflow-hidden ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
              <img src={card.imageUrl} alt="Case" className="w-full h-full object-cover aspect-video lg:aspect-square" />
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default CardBlock;
