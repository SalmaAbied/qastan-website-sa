import React from "react";

function GridDetail() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-6 mb-10">
        <img src="https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-72 w-full object-cover md:col-span-1" alt="sfeerfoto" />
        <div className="bg-yellow-500 font-light h-72 p-5 text-base md:col-span-1">Al je documenten op één plaats maar toch overal bij de hand hebben? Documenten sneller terugvinden, delen en beheren? Efficiënter werk en de administratieve last verkleinen? Kleine digitaliseringsoplossingen of grote automatiseringstrajecten, we passen onze oplossing aan naar de grootte van jouw onderneming. De mogelijkheden zijn eindeloos!</div>
      </div>
    </>
  );
}

export default GridDetail;
