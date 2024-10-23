import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Exclusive from './Components/Exclusive';
import LuxuryFurniture from './Components/LuxuryFurniture';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Exclusive />
      <LuxuryFurniture />
    </div>
  );
}

export default App;
