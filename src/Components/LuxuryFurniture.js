import React from "react";
import bed from '../assets/images/bed.png';

import './LuxuryFurniture.css';;

function LuxuryFurniture() {
    return (
        <div className="luxury">
            <div className="luxury_title">
                <h1>Experience Unmatched    Comfort and Luxury with Relaxing <span>Furniture Designs</span> 
                </h1>
                <p>Blending high-end materials with ergonomic designs that soothe your body and elevate your space.</p>
            </div>

            <div className="luxury_content">
                <div className="luxury_left">
                    <img src={bed} alt="chair" />
                </div>
                <div className="luxury_right">
                    <h3>Enjoying a serene night's sleep on a luxurious bed.<br /> <span>Our collection ensures you experience the ultimate comfort and style.</span></h3>
                    <button>Shop Now</button>
                </div>
            </div>

        </div>
    );
}

export default LuxuryFurniture
