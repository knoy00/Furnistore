import React from "react";
import { Link } from "react-scroll";
import './Navbar.css';

function Navbar(){
    return(
        <div className="navbar">
            <div className="nav_logo">NICE</div>
            <div className="nav_links"> 
                <div>
                    <ul>
                        <li>
                            <Link>Shop</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link>Browse</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Navbar;