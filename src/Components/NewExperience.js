import React from 'react'
import halfSeat from '../assets/images/halfSeat.jpg'

import './NewExperience.css'

function NewExperience() {
  return (
    <div className='new_experience'>
      <div className='new_experience_left'>
        <img src={halfSeat}  alt='Furniture'/>
      </div>

      <div className='new_experience_right'>
        <h1>New Experience Is Going To Unlock</h1>
        <p>Indulge in the perfect blend of comfort, luxury, and relaxation with our exclusive furniture collection.</p>
        <button>Shop Now</button>
      </div>
    </div>
  )
}

export default NewExperience
