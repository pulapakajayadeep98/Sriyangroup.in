
import "./HomePage.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
export default function HomeHero() {
  const words = ["Sales ", "Field Sales", "Marketing "];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // change every 2.5s
    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <div className="home-wrap">
      {/* ===== HERO ===== */}
   <section className="hero-wrap">
  <div className="hero-inner">
    <h1 className="hero-title" data-aos="fade-up">
      Built for <span className="highlight">high-impact</span><br />
      <span className="animated-word"> {words[index]} </span>
    </h1>

    <p className="hero-sub" data-aos="fade-up" data-aos-delay="120">
      Unite sales, marketing, field, and service teams on one powerful execution platform…
    </p>

<div className="hero-actions" data-aos="zoom-in" data-aos-delay="220">
  <Link to="/contact" className="btn btn--primary">Book a demo</Link>
  <Link to="/services" className="btn btn--outline">See Services</Link>
</div>
  </div>
</section>


      {/* ===== ABOUT SNAPSHOT ===== */}
<section className="about-band">
  <div className="about-inner">
    <div className="about-col text">
      <h2>About Sriyan Group</h2>
      <p>
        We are a specialised marketing and sales agency focused on executing
        high-impact field campaigns, disciplined sales follow-through, and
        data-driven reporting. Our teams align with your goals and brand
        standards to deliver steady, measurable growth.
      </p>
      <ul>
        <li>Integrated sales + field sales + marketing engine</li>
        <li>Qualified pipelines, assisted visits, clear SLAs</li>
        <li>Transparent MIS with daily/weekly dashboards</li>
      </ul>
      <a className="btn-link" href="/about">Learn more about us →</a>
    </div>

    <div className="about-col media">
      <img
        src="/abo.jpg"
        alt="Sriyan Group team at work"
        loading="lazy"
      />
    </div>
  </div>
</section>





      {/* ===== SERVICES PREVIEW ===== */}
      <section className="home-container services-preview">
        <header className="section-head">
          <h2>What We Do</h2>
          <p>
            Sales acceleration you can measure — coordinated field execution,
            disciplined follow-ups, and campaigns that actually convert.
          </p>
        </header>

        <div className="svc-grid">
          {/* Sales */}
          <article className="svc-card">
            <div className="svc-head">
              <span className="svc-icon" aria-hidden>
                {/* Plus crosshair icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 12h18M12 3v18"></path>
                </svg>
              </span>
              <h3>Sales</h3>
            </div>
            <p>
              Lead qualification, assisted site visits, documentation support,
              and conversion-oriented SLAs.
            </p>
            <ul>
              <li>CRM hygiene & nurturing</li>
              <li>Follow-ups & show-ups</li>
              <li>Target-based reporting</li>
            </ul>
          </article>

          {/* Field Sales */}
          <article className="svc-card">
            <div className="svc-head">
              <span className="svc-icon" aria-hidden>
                {/* Home/roof icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 21V10l4-3 4 3v11"></path>
                </svg>
              </span>
              <h3>Field Sales</h3>
            </div>
            <p>
              On-ground teams for activations, community drives, kiosks, and
              geo-tagged daily MIS.
            </p>
            <ul>
              <li>Promoter staffing & training</li>
              <li>Route planning & coverage</li>
              <li>Compliance & brand safety</li>
            </ul>
          </article>

          {/* Marketing */}
          <article className="svc-card">
            <div className="svc-head">
              <span className="svc-icon" aria-hidden>
                {/* Badge icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 10h4l4-6 4 6h6v10H3z"></path>
                </svg>
              </span>
              <h3>Marketing</h3>
            </div>
            <p>
              Campaign strategy, digital + offline lead gen, launch support, and
              brand-safe execution.
            </p>
            <ul>
              <li>Consistent messaging</li>
              <li>Performance insights</li>
              <li>ROI & attribution</li>
            </ul>
          </article>
        </div>

        <div className="center-cta">
          <a className="btn btn--primary" href="/services">View all services</a>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-strip">
        <div className="home-container">
          <header className="section-head">
            <h2>Why Choose Sriyan Group</h2>
            <p>We combine on-ground coverage with transparent, data-driven execution.</p>
          </header>

          <div className="why-grid">
            <div className="why-card">
              <span className="why-ico">
                {/* Shield check */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 3l8 4v5c0 5-3.4 8.6-8 9-4.6-.4-8-4-8-9V7l8-4Z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </span>
              Trusted partnerships
            </div>
            <div className="why-card">
              <span className="why-ico">
                {/* Target */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
              Measurable performance
            </div>
            <div className="why-card">
              <span className="why-ico">
                {/* Users */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M16 11c1.66 0 3-1.57 3-3.5S17.66 4 16 4s-3 1.57-3 3.5S14.34 11 16 11zM8 11c1.66 0 3-1.57 3-3.5S9.66 4 8 4 5 5.57 5 7.5 6.34 11 8 11z"></path>
                  <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4"></path>
                </svg>
              </span>
              Experienced teams
            </div>
            <div className="why-card">
              <span className="why-ico">
                {/* Bar chart */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 3v18h18"></path>
                  <path d="M7 15v-6M12 19V8M17 19V5"></path>
                </svg>
              </span>
              Transparent reporting
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS / PARTNERS ===== */}
   {/* ===== PARTNERS / CLIENTS (highlighted) ===== */}
<section className="partners-fw">
  <div className="partners-halo" aria-hidden />
  <div className="partners-inner">
    <header className="partners-head">
      <span className="partners-badge">Trusted by</span>
      <h2>Partners &amp; Clients</h2>
      <p>Brands that trust our execution and governance.</p>
    </header>

    <div className="partners-logos">
      <a className="partner-pill" href="#" aria-label="Vishnu Nivas">
        <span className="dot" /> Vishnu Nivas
      </a>
      <a className="partner-pill" href="#" aria-label="Milestone Enclave">
        <span className="dot" /> Milestone Enclave
      </a>
      <a className="partner-pill" href="#" aria-label="City Makers">
        <span className="dot" /> City Makers
      </a>
      <a className="partner-pill" href="#" aria-label="Your Project Here">
        <span className="dot" /> Your Project Here
      </a>
    </div>
  </div>
</section>




      {/* ===== FINAL CTA ===== */}
      <section className="home-cta">
        <div className="home-container cta-inner">
          <h2>Ready to grow your sales?</h2>
          <p>Let’s align on targets, deployment, and reporting — then get moving.</p>
          <div className="cta-actions">
            <a className="btn btn--primary" href="/contact">Contact Us</a>
            <a className="btn btn--ghostDark" href="/services">See Services</a>
          </div>
        </div>
      </section>
    </div>
  );
}
