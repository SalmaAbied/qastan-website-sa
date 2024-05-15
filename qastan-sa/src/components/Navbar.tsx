import React, { useState, useEffect } from "react";
import myImage from "../img/logo.png";
import { NavigationMenuDemo } from "./shadcn/navDropdown";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [activePage, setActivePage] = useState("");
  
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 10;
      setShowShadow(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    setActivePage(path);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className={`bg-white sticky top-0 z-50 ${showShadow ? "shadow-lg" : ""}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="m-2 mx-10 md:mx-0">
            <a href="/" className="flex items-center">
              <img src={myImage} alt="qastan logo" className="h-14" />
            </a>
          </div>
          <div className="mx-10 md:mx-0 flex items-center lg:hidden">
            <button onClick={toggleMobileMenu} className="block  hover: focus: focus:outline-none z-50">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex items-center">
            <div className="flex">
              <div className="">
                <NavigationMenuDemo />
              </div>
              <a href="/Toepassingen" className={`m-2 px-4 font-medium hover:text-orange-500 transition duration-300 flex items-center ${activePage === "/Toepassingen" ? "text-orange-500" : ""}`}>
                Toepassingen
              </a>
              <a href="/Over" className={`m-2 px-4 font-medium hover:text-orange-500 transition duration-300 flex items-center ${activePage === "/Over" ? "text-orange-500" : ""}`}>
                Over ons
              </a>
              <a href="/Contact" className={`m-2 px-4 font-medium hover:text-orange-500 transition duration-300 flex items-center ${activePage === "/Contact" ? "text-orange-500" : ""}`}>
                Contact
              </a>
              <a href="/Blog" className={`m-2 px-4 font-medium hover:text-orange-500 transition duration-300 flex items-center ${activePage === "/Blog" ? "text-orange-500" : ""}`}>
                Blog
              </a>
            </div>
            <div className="flex items-center">
              <a href="/Support" className="text-white border-2 bg-orange-500 hover:border-2 border-orange-500 hover:bg-white hover:text-orange-500 font-medium px-4 h-8 m-2 flex items-center transition duration-300">
                Support
              </a>
              <a href="/" className="m-2">
                Taal
              </a>
            </div>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex flex-col items-center bg-white pt-20">
          <div className="relative py-4 px-2 flex flex-col items-center">
            <a href="/" className="block py-2 px-4 font-medium mt-10">
              Home
            </a>
            <a href="/Oplossingen" className={`m-2 flex items-center font-medium mt-10 ${activePage === "/Oplossingen" ? "text-orange-500" : ""}`}>
              Oplossingen
            </a>
            <a href="/Toepassingen" className={`block py-2 px-4 font-medium mt-10 ${activePage === "/Toepassingen" ? "text-orange-500" : ""}`}>
              Toepassingen
            </a>
            <a href="/Over" className={`block py-2 px-4 font-medium mt-10 ${activePage === "/Over" ? "text-orange-500" : ""}`}>
              Over ons
            </a>
            <a href="/Contact" className={`block py-2 px-4 font-medium mt-10 ${activePage === "/Contact" ? "text-orange-500" : ""}`}>
              Contact
            </a>
            <a href="/Blog" className={`block py-2 px-4 font-medium mt-10 ${activePage === "/Blog" ? "text-orange-500" : ""}`}>
              Blog
            </a>
            <div className="flex flex-col items-center">
              <a href="/Support" className="text-white border-2 bg-orange-500 hover:border-2 border-orange-500 hover:bg-white hover:text-orange-500 font-medium mt-10 px-4 h-8 m-2 flex items-center transition duration-300">
                Support
              </a>
              <a href="/" className="m-2">
                Taal
              </a>
            </div>
            <div>
              <p className="text-sm font-light">&copy; Qastan 2024</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
