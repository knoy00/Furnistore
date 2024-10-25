import React from "react";
import { Link } from "react-scroll";
import './Footer.css';

function Footer({ item }) {
  const { title, link1, link2, link3, link4 } = item;

  return (
    <div className="footer_container">
      <div className="footer_column">
        <h1>{title}</h1>
        <Link>{link1}</Link>
        <Link>{link2}</Link>
        <Link>{link3}</Link>
        <Link>{link4}</Link>
      </div>
    </div>
  );
}

export default Footer;
