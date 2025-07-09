import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { text: "HOME", path: "/home" },
  { text: "ABOUT", path: "/about" },
  { text: "SERVICES", path: "/services" },
  { text: "PORTFOLIO", path: "/portfolio" },
  { text: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <span style={{ color: "#38b6ff" }}>THEE</span> DEPLOYER
        </Link>
        <ul style={styles.navLinks}>
          {navItems.map((item, index) => (
            <li key={index} style={styles.navItem}>
              <Link
                to={item.path}
                style={{
                  ...styles.navLink,
                  color: hoveredIndex === index ? "#00ffff" : styles.navLink.color,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    background: "#0d1117",
    padding: "10px 0",
    width: "100%",
    borderBottom: "1px solid #1a1f24",
    overflowX: "hidden",
    position: "relative",
    zIndex: 1000,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
    whiteSpace: "nowrap",
    marginLeft: "-50px",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
    whiteSpace: "nowrap",
  },
  navItem: {
    display: "inline-block",
  },
  navLink: {
    color: "#38b6ff",
    fontWeight: 500,
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
};

export default Navbar;

