// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home'; 
import Plannen from './components/pages/Oplossingen/Plannen'; 
import Digitaliseren from './components/pages/Oplossingen/Digitaliseren'; 
import IT from './components/pages/Oplossingen/IT';
import Automatiseren from './components/pages/Oplossingen/Automatiseren';
import Oplossingen from './components/pages/Oplossingen/Oplossingen';
import Toepassingen from './components/pages/Toepassingen';
import Over from './components/pages/Over';
import Jobs from './components/pages/Jobs';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import Support from './components/pages/Support';
import Footer from './components/Footer';
import Team from './components/pages/Team';
import Partners from './components/pages/Partners';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Oplossingen" element={<Oplossingen />} /> 
        <Route path="/Oplossingen/Plannen" element={<Plannen />} /> 
        <Route path="/Oplossingen/Digitaliseren" element={<Digitaliseren />} /> 
        <Route path="/Oplossingen/IT" element={<IT />} /> 
        <Route path="/Oplossingen/Automatiseren" element={<Automatiseren />} /> 
        <Route path="/Toepassingen" element={<Toepassingen />} /> 
        <Route path="/Over" element={<Over />} /> 
        <Route path="/Team" element={<Team />} /> 
        <Route path="/Jobs" element={<Jobs />} /> 
        <Route path="/Partners" element={<Partners />} /> 
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Blog" element={<Blog />} /> 
        <Route path="/Support" element={<Support />} /> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
