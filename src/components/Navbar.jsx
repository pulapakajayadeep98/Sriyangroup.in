import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close if clicked outside on mobile
  useEffect(() => {
    function handleClickOutside(e) {
      if (!open) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <header className={`navbar ${open ? "open" : ""}`}>
      <div className="nav-inner ">
        {/* Brand / Logo */}
        <Link to="/" className="brand" aria-label="Sriyan Group Home">
          <img src="/logo.png" alt="Sriyan Group Logo" className="nav-logo" />
          <span className="brand-name">Sriyan Group</span>
        </Link>

        {/* Hamburger */}
        <button
          ref={btnRef}
          className={`burger ${open ? "active" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        {/* Navigation Links */}
        <nav
          id="primary-navigation"
          ref={menuRef}
          className={`nav-links ${open ? "show" : ""}`}
        >
          <NavLink to="/" end>HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/services">SERVICES</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </nav>
      </div>
    </header>
  );
}
