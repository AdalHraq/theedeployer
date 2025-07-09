import React from "react";
import { Link } from "react-router-dom";
import "../pages/Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <h1 className="hero-title">
          INNOVATING THE <span>DIGITAL FRONTIER</span>
        </h1>
        <p className="hero-subtitle">
          Transform your vision into reality with cutting-edge technology solutions
        </p>
        <div className="hero-buttons">
          <Link to="/contact">
            <button className="btn btn-primary">Contact Us</button>
          </Link>
          <Link to="/services">
            <button className="btn btn-outline">Explore Services</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

