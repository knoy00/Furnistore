import React from 'react'
import { Link } from 'react-scroll';
import bedroom from '../assets/images/bedroom1.jpg';
import softChair from '../assets/images/softChair.jpg';
import living from '../assets/images/livingRoom.jpg';

import './Interior.css'

function Interior() {
  return (
      <div className='interior'>
        
        <div className='interior_header'>
            <div className='interior_title'><h2><span>Inspiring Interiors</span> Crafted With Passion</h2></div>
            <div className='interior_subtitle'><p>Indulge in the perfect blend of comfort, luxury, and relaxation with our exclusive furniture collection. Each item is designed to provide a serene, inviting atmosphere, making your home a true heaven.</p>
            <Link className='view_more' to='luxuryFurniture' spy={true} smooth={true} duration={500}>View More</Link>
            </div>
        </div>
        <div className='interior_content'>
            <div className='interior_left'>
                <div className='top_image'>
                    <img src={bedroom} alt="bedroom" />
                </div>
                <div className='bottom_image'>
                <img src={softChair} alt="bedroom" />
                </div>
            </div>
            <div className='interior_right'>
            <img src={living} alt="bedroom" />
            </div>
        </div>
    </div>
  )
}

export default Interior
