import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" aria-labelledby="footerTitle">
      <div className="footer-container">
        {/* INFORMATION */}
        <section className="footer-section" aria-label="Information">
          <h2 id="footerTitle" className="footer-heading">Information</h2>
          <div className="footer-underline" aria-hidden="true"></div>

          <img
            src="/logo.png"
            alt="Sriyan Group logo"
            className="footer-logo"
            width="160"
            height="auto"
          />

        <p className="footer-description">
  At <strong>Sriyan Group</strong>, we empower brands with innovative marketing
  solutions — combining creativity, strategy, and technology to drive real growth
  and lasting impact.
</p>

        </section>

        {/* QUICK LINKS */}
        <nav className="footer-section" aria-label="Quick links">
          <h3 className="footer-heading">Quick Links</h3>
          <div className="footer-underline" aria-hidden="true"></div>

          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
            <li><Link to="/refund-cancellation">Cancellation and Refund Policy</Link></li>
             <li><Link to="/refund-cancellation">Shipping and Delivery Policy</Link></li>
          </ul>
        </nav>

        {/* CONTACT */}
        <section className="footer-section" aria-label="Contact">
          <h3 className="footer-heading">Contact</h3>
          <div className="footer-underline" aria-hidden="true"></div>

          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt className="footer-icon" aria-hidden="true" />
              <span>
                Vasavi MPM Grand, Unit No. 1312, 12th Floor, Ameerpet ‘X’ Road,
                Beside Ameerpet Metro Station, TG – 500016.
              </span>
            </li>
            <li>
              <FaEnvelope className="footer-icon" aria-hidden="true" />
              <a href="mailto:anwarpasha@live.in">anwarpasha@live.in</a>
            </li>
         
            <li>
              <FaPhone className="footer-icon" aria-hidden="true" />
              <a href="tel:+918341676712">+91 83416 76712</a>
            </li>
          </ul>
        </section>
      </div>

      {/* subtle divider to match premium look */}
      <div className="footer-rule" aria-hidden="true"></div>

      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} &nbsp;<strong>Sriyan Group</strong>.
          All Rights Reserved. &nbsp;|&nbsp; Designed by{" "}
          <a
            href="http://www.pandjtechnologies.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            P &amp; J Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}
