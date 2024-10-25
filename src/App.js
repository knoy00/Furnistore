import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Exclusive from './Components/Exclusive';
import LuxuryFurniture from './Components/LuxuryFurniture';
import Interior from './Components/Interior';
import NewExperience from './Components/NewExperience';
import Projects from './Components/Projects';
import ProjectsData from './Components/ProjectsData';

import './App.css';

function App() {
const projects = ProjectsData.projects;

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Exclusive />
      <LuxuryFurniture />
      <Interior />
      <NewExperience />

      <div className='projects_header'>
        <h1>Highlighting <span>Our Renowned Projects</span></h1>
        <p>Indulge in the perfect blend of comfort, luxury, and relaxation with our exclusive furniture collection. Each item is designed to provide a serene, inviting atmosphere, making your home a true haven.</p>
      </div>
      <hr />
      
      <div>
        {projects.map((project) => (
          <Projects key={project.id} mappedData={project} />
        ))}
      </div>
    </div>
  );
}

export default App;
