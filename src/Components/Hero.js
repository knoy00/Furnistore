import React from "react";
import image886 from '../assets/images/886.png';
import './Hero.css';

function Hero(){
    return(
        <div className="hero" id="Hero">
            <div className="hero_left">
                <h1>Discover Timeless Furniture Crafted for <span>Comfort</span>  and <span>Style</span></h1>

                <p>Experience the perfect balance and durability, and <br /> create a home you'll love to live in.</p>

                <button>Shop Now</button>
            </div>
            <div className="hero_right">
                <img src={image886} alt="chair"/>
            </div>
        </div>
    )
}

export default Hero;