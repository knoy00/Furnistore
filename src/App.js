import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Exclusive from './Components/Exclusive';
import LuxuryFurniture from './Components/LuxuryFurniture';
import Interior from './Components/Interior';
import NewExperience from './Components/NewExperience';
import Projects from './Components/Projects';
import ProjectsData from './Components/ProjectsData';
import Footer from './Components/Footer';
import footerData from './Components/FooterData';


import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { Link } from 'react-scroll';

function App() {
const projects = ProjectsData.projects;
const footerLinks = footerData.data;

  return (
    <div className="App">
      <Link to='Hero' offset={0} spy={true} smooth={true} duration={1500}>
      <i className="fa fa-arrow-up" />
      </Link>
      
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

      <div>
        {footerLinks.map((link) => (
          <Footer id={link.id} item={link} />
        ))}
      </div>

      <div className="footer_bottom">
                <div>
                    <h1></h1>
                    <p></p>
                </div>
                <div>
                    <input type="text" />
                    <button>Sign Up</button>
                </div>
            </div>

    </div>
  );
}

export default App;
