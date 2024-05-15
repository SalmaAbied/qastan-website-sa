import React, { useState } from "react";
import Digitaliseren from "./pages/Oplossingen/Digitaliseren";
import Automatiseren from "./pages/Oplossingen/Automatiseren";
import Plannen from "./pages/Oplossingen/Plannen";
import IT from "./pages/Oplossingen/IT";
import Alle from "./pages/Oplossingen/AlleOplossingen";

const Tabs: React.FC = () => {
  const tabs = [
    { name: "Alle oplossingen", component: <Alle /> },
    { name: "Digitaliseren", component: <Digitaliseren /> },
    { name: "Automatiseren", component: <Automatiseren /> },
    { name: "Plannen", component: <Plannen /> },
    { name: "IT-beheer", component: <IT /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const handleClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <header className="flex flex-wrap w-full">
        <nav className="container mx-auto px-4 py-2 md:flex md:justify-between">
          <ul className="flex flex-wrap justify-between md:flex-grow">
            {tabs.map((tab) => (
              <li key={tab.name} className="w-full md:w-auto text-center md:text-left">
                <a
                  href={`#${tab.name}`}
                  className={`block py-4 border-b-2 hover:text-orange-500 hover:border-orange-500 transition duration-300 ${activeTab === tab.name ? "border-orange-500 text-orange-500" : "border-white"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(tab.name);
                  }}
                >
                  {tab.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section className="mt-12">
        <div className="content mx-auto w-11/12">{tabs.find((t) => t.name === activeTab)?.component}</div>
      </section>
    </>
  );
};

export default Tabs;
