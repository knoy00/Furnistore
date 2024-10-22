import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Exclusive from './Components/Exclusive';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Exclusive />
    </div>
  );
}

export default App;
