import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
