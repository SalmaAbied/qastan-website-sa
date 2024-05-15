import React from "react";

const ServiceCard = ({ title, imageUrl, description, color }: { title: string; imageUrl: string; description: string; color: string }) => {
  return (
    <div className="relative">
      <div className={`card bg-gray-800 p-10 relative h-72`}>
        <div className="content relative z-10">
          <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">{title}</h2>
          <p className="text-white font-light text-base">{description}</p>
          <div className="absolute " style={{ backgroundImage: `url(${imageUrl})` }}></div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
      <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 flex items-center">Digitalisering</span>
      <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold max-w-3xl mx-auto mb-4 leading-snug">Klaar voor meer digitale efficiëntie?</h1>
      <p className=" mb-16 italic">Weg met papierwerk, Hallo efficiëntie: digitaliseer uw documenten vandaag nog!</p>
      <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto relative">
        <ServiceCard title="Documenten handmatig overtypen" imageUrl="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" description="Reduceer manuele en handmatige taken. Laat AI het werk van jouw team verlichten en verhoog de productiviteit." color="#FF5733" />
        <ServiceCard title="Onoverzichtelijk" imageUrl="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" description="Te veel verschillende type documenten, opzegtermijnen, contracttermijnen, opvolging van offertes en facturen,... Gebrek aan classificatie of overzicht maakt efficiënt werken in team moeilijk." color="#FF5733" />
        <ServiceCard title="Hoeveel tijd gaat er verloren aan opzoeken?" imageUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" description="Opzoeken en handmatig verwerken van documenten kost enorm veel tijd. Dit leidt tot inefficiëntie en vertragingen in bedrijfsprocessen." color="#FF5733" />
        <ServiceCard title="Organisation des documents" imageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" description="Mensen op de baan, verouderde mappenstructuur, dossiers hangen niet samen, papier moet opnieuw gescand worden,... Dit zorgt voor vertraging, frustraties en vooral meer fouten." color="#FF5733" />
      </div>
    </section>
  );
};

export default Services;
