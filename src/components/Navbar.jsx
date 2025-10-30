import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showPolicies, setShowPolicies] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setShowPolicies(false);
  }, [location.pathname]);

  // Close burger if clicking outside
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
        setShowPolicies(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <header className={`navbar ${open ? "open" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="brand" aria-label="Sriyan Group Home">
          <img src="/logo.png" alt="Sriyan Group Logo" className="nav-logo" />
          <span className="brand-name">Sriyan Group</span>
        </Link>

        <button
          ref={btnRef}
          className={`burger ${open ? "active" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </button>

        <nav
          id="primary-navigation"
          ref={menuRef}
          className={`nav-links ${open ? "show" : ""}`}
        >
          <NavLink to="/" end>HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/services">SERVICES</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>

          {/* POLICIES */}
          <div className={`nav-dropdown ${showPolicies ? "open" : ""}`}>
            <button
              className="nav-dropdown-btn"
              aria-expanded={showPolicies}
              onClick={() => setShowPolicies(v => !v)}
              type="button"
            >
              POLICIES
            </button>

            <div className="nav-dropdown-menu">
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <NavLink to="/terms-and-conditions">Terms &amp; Conditions</NavLink>
              <NavLink to="/refund-cancellation">Cancellation &amp; Refund Policy</NavLink>
              <NavLink to="/shipping-policy">Shipping &amp; Delivery Policy</NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
