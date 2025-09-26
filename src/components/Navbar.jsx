import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">THEE <span>DEPLOYER</span></Link>
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">Our Story</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Get Quote button */}
      <div>
        <Link to="/contact" className="btn">Get Quote</Link>


      </div>
    </nav>
  );
}

