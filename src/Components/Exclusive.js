import React from 'react';
import sofa1 from '../assets/images/11288327 1.png';
import sofa2 from '../assets/images/11444657 1.png';
import { Link } from 'react-scroll';

import './Exclusive.css';

function Exclusive() {
  return (
    <div className='exclusive'>
        <div className='exc_title'>
            <h2>Our Latest Exclusive Collections

            </h2>

            <p>Each piece is thoughtfully designed to enhance your home, offering both style and functionality. <br /> Whether you're looking for a statement sofa, a cozy dinding set, or sleek storage solutions, our collection caters to every taste and need.</p>
        </div>

        <div className='exclusive_buttons'>
            <button className='exc_active'>Living Room</button>
            <button>Dining Room</button>
            <button>Bedroom</button>
            <button>Home Office</button>
        </div>

        <div className='exclusive_images'>
            <div className='exl_left'>
                <div>
                    <img src={sofa2} alt='Furniture'/>
                </div>
            </div>
            <div className='exl_right'>
                <div>
                    <img src={sofa1} alt='Furniture'/>
                </div>
            </div>
        </div>

        <div className='exc_see_more'>
            <ul>
                <li><Link>See more</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Exclusive
