import { Facebook, Instagram, Linkedin, Send } from "lucide-react";
import React from "react";
import logo from "../img/logo-white.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt text-orange-500 text-2xl mr-3"></i>
            <div>
              <h4 className="text-lg font-semibold">Adres</h4>
              <hr className="w-12 h-0.5 bg-orange-500 border-0 mb-3" />
              <span>Brugsesteenweg 48, 8520 Kuurne</span>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fas fa-phone text-orange-500 text-2xl mr-3"></i>
            <div>
              <h4 className="text-lg font-semibold">Neem contact op met ons</h4>
              <hr className="w-12 h-0.5 bg-orange-500 border-0 mb-3" />
              <span>+32 (0)51 31 07 44</span>
            </div>
          </div>
          <div className="flex items-center">
            <i className="far fa-envelope-open text-orange-500 text-2xl mr-3"></i>
            <div>
              <h4 className="text-lg font-semibold">Mail ons</h4>
              <hr className="w-12 h-0.5 bg-orange-500 border-0 mb-3" />
              <span>info@qastan.be</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div>
            <div className="mb-5">
              <img src={logo} alt="logo" className="max-w-xs" />
            </div>
            <div className="flex space-x-3">
              <span className="text-lg font-semibold">Volg ons</span>
              <a href="https://www.facebook.com/profile.php?id=100090413298416&locale=nl_NL" target="_blank" className="text-2xl text-orange-500">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/qastan_it/" target="_blank" className="text-2xl text-orange-500">
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/company/qastan-it/posts/?feedView=all" target="_blank" className="text-2xl text-orange-500">
                <Linkedin />
              </a>
            </div>
          </div>
          <div>
            <div className="mb-5">
              <h3 className="text-lg font-semibold">Nuttige links</h3>
              <hr className="w-12 h-0.5 bg-orange-500 border-0 mb-3" />
              <ul className="grid grid-cols-2">
                <li className="hover:text-orange-500 transition duration-300">
                  <a href="/">Home</a>
                </li>
                <li className="hover:text-orange-500 transition duration-300">
                  <a href="/Oplossingen">Oplossingen</a>
                </li>
                <li className="hover:text-orange-500 transition duration-300">
                  <a href="/Toepassingen">Toepassingen</a>
                </li>
                <li className="hover:text-orange-500 transition duration-300">
                  <a href="/Over">Over ons</a>
                </li>
                <li className="hover:text-orange-500 transition duration-300">
                  <a href="/Contact">Contact</a>
                </li>
                <li className="hover:text-orange-500 transition duration-300">
                  <a href="/Team">Ons Team</a>
                </li>
                <li className="hover:text-orange-500 transition duration-300">
                  <a href="/Jobs">Jobs</a>
                </li>
                <li className="hover:text-orange-500 transition duration-300">
                  <a href="/Partners">Partners</a>
                </li>
                <li className="hover:text-orange-500 transition duration-300">
                  <a href="/Blog">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="mb-5">
              <h3 className="text-lg font-semibold">Schrijf je in</h3>
              <hr className="w-12 h-0.5 bg-orange-500 border-0 mb-3" />

              <p className="mb-3">Niet vergeten om je te abonneren op onze nieuwsbrief</p>
              <form className="relative">
                <div className="relative">
                  <input type="text" placeholder="E-mailadres" className="w-full py-2 px-3 bg-gray-800 border border-gray-600 text-gray-300 pr-12" />
                  <button type="submit" className="absolute top-0 right-0 bg-orange-500 text-gray-900 py-2 px-4 border border-orange-500">
                    <Send color="white" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-sm">Copyright &copy; 2024 Qastan</p>
            <ul className="flex flex-wrap">
              <li className="ml-5 border-r border-gray-400 pr-5">
                <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition duration-300">
                  Cookies &amp; Privacy
                </a>
              </li>
              <li className="ml-5 border-r border-gray-400 pr-5">
                <a href="#" className="text-sm text-gray-400 hover:text-orange-500 transition duration-300">
                  Algemene voorwaarden
                </a>
              </li>
              <li className="text-sm ml-5 text-gray-400">BTW BE0464 789 554</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
