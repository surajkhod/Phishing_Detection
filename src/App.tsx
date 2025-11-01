// src/App.tsx

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DetectionSection from './components/DetectionSection';
import ModelInfoSection from './components/ModelInfoSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <DetectionSection />
      <ModelInfoSection />
      <Footer />
    </div>
  );
}

export default App;
