import React, { useRef, useLayoutEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  // Set --nav-h to the real nav height so the hero calc is perfect
  useLayoutEffect(() => {
    if (!ref.current) return;
    const h = Math.ceil(ref.current.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--nav-h", `${h}px`);
  }, []);

  const items = [
    { to: "/home", label: "HOME" },
    { to: "/about", label: "ABOUT" },
    { to: "/services", label: "SERVICES" },
    { to: "/pricing", label: "PRICING" },
    { to: "/portfolio", label: "PORTFOLIO" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <header ref={ref} className="pro-nav-wrap">
      <nav className="pro-nav">
        <Link to="/home" className="brand" aria-label="TheeDeployer">
          <span className="brand-main">THEE</span>
          <span className="brand-accent">DEPLOYER</span>
        </Link>

        <div className="links">
          {items.map(({ to, label }) => (
            <NavLink key={to} to={to} className={({isActive}) => isActive ? "link active" : "link"}>
              {label}
            </NavLink>
          ))}
        </div>

        <Link to="/contact" className="nav-cta">Get Quote</Link>

        <button
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`drawer ${open ? "show" : ""}`}>
        {items.map(({ to, label }) => (
          <NavLink key={to} to={to} onClick={() => setOpen(false)} className="drawer-link">
            {label}
          </NavLink>
        ))}
        <Link to="/contact" className="drawer-cta" onClick={() => setOpen(false)}>Get Quote</Link>
      </div>
    </header>
  );
}

