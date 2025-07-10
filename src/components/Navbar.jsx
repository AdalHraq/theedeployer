import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { text: "HOME", path: "/home" },
    { text: "ABOUT", path: "/about" },
    { text: "SERVICES", path: "/services" },
    { text: "PORTFOLIO", path: "/portfolio" },
    { text: "CONTACT", path: "/contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div className="container">
        <div className="logo">THEE <span className="highlight">DEPLOYER</span></div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((item, index) => (
            <Link key={index} to={item.path} onClick={closeMenu}>
              {item.text}
            </Link>
          ))}
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

