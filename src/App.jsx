// src/App.jsx
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./global.css";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PageLoader from "./components/PageLoader.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Terms from "./pages/Terms.jsx";
import RefundCancellation from "./pages/RefundCancellation.jsx";
import ShippingPolicy from "./pages/Shippingpolicy.jsx"; // ✅ added new page

/** Scroll to top & focus <main> on route change */
function ScrollToTopAndFocus({ children, focusRef }) {
  const { pathname, search, hash } = useLocation();
  useLayoutEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (focusRef?.current) focusRef.current.focus({ preventScroll: true });
  }, [pathname, search, hash, focusRef]);
  return children;
}

export default function App() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // AOS once
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out", offset: 80, once: true });
    AOS.refresh();
  }, []);

  // Route-change loader
  useEffect(() => {
    setLoading(true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = prevOverflow;
    }, 500);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, [pathname]);

  return (
    <div className="app">
      <Navbar />

      {/* Full-screen route loader with your logo */}
      <PageLoader visible={loading} logoSrc="/logo.png" />

      <ScrollToTopAndFocus focusRef={mainRef}>
        <main id="main-content" ref={mainRef} tabIndex={-1} className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* ===== Policies ===== */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/refund-cancellation" element={<RefundCancellation />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} /> {/* ✅ new route */}

            {/* ===== Fallback ===== */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </ScrollToTopAndFocus>

      <Footer />
    </div>
  );
}
