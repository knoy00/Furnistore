import React from 'react'

import './Projects.css'

function Projects({mappedData}) {
  const {number, title, text, img, link} = mappedData
  return (
    <div className='projects'>
      <div className='projects_content'>
        <h1>{number}</h1>

        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>

        <a href={link}>
          <button>View Projects</button>
        </a>

        <div className='projects_img'>
          <img src={img} alt='' />
        </div>
          
      </div>
      

    </div>
  )
}

export default Projects
