// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home'; 
import Plannen from './components/pages/Plannen'; 
import Digitaliseren from './components/pages/Digitaliseren'; 
import IT from './components/pages/IT';
import Automatiseren from './components/pages/Automatiseren';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Plannen" element={<Plannen />} /> 
        <Route path="/Digitaliseren" element={<Digitaliseren />} /> 
        <Route path="/IT" element={<IT />} /> 
        <Route path="/Automatiseren" element={<Automatiseren />} /> 
      </Routes>
    </Router>
  );
}

export default App;
