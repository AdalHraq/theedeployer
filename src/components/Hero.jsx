import React from "react";
import "../pages/Hero.css";          // purely typographic tweaks (optional)
import { Link } from "react-router-dom";

export default function Hero() {
  // Inline layout guarantees (height/bleed); CSS handles the visual background too
  const heroStyle = {
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
    minHeight: "calc(100dvh - var(--nav-h))",
    display: "grid",
    placeItems: "center",
    overflow: "hidden",
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="inner">
        <h1 className="title">
          INNOVATING THE <br /> <span>DIGITAL FRONTIER</span>
        </h1>
        <p className="sub">
          Transform your vision into reality with cutting-edge technology solutions.
        </p>
        <div className="actions">
          <Link to="/contact" className="btn primary">Contact Us</Link>
          <Link to="/services" className="btn ghost">Explore Services</Link>
        </div>
      </div>
    </section>
  );
}

