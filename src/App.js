import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Exclusive from './Components/Exclusive';
import LuxuryFurniture from './Components/LuxuryFurniture';
import Interior from './Components/Interior';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Exclusive />
      <LuxuryFurniture />
      <Interior />
    </div>
  );
}

export default App;
