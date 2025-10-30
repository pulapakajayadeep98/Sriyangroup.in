import React from "react";
import "./ServicesPage.css";
import heroImage from "/cooo.jpg"; // ✅ Adjust path if your image is in src/assets/
import { Link } from "react-router-dom";
export default function ServicesPage() {
  return (
    <div className="svc-wrap">
      {/* ===== Hero Section ===== */}
      <section
        className="svc-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="svc-hero__overlay">
          <h1 className="svc-hero__title">Our Services</h1>
        </div>
      </section>


      {/* ===== Intro (generic, no “built for real estate” callout) ===== */}
      <section className="svc-container">
        <header className="svc-intro">
          <h2>Sales acceleration you can measure</h2>
          <p>
            We combine <strong>Sales</strong>, <strong>Field Sales</strong>, and <strong>Marketing</strong> into
            one coordinated engine—so you get consistent pipeline growth, professional buyer handling,
            and transparent reporting.
          </p>
        </header>

        {/* ===== Services Grid ===== */}
        <div className="svc-grid">
          <div className="svc-card">
            <div className="svc-head">
              <span className="svc-icon" aria-hidden>
                {/* Sales icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 12h18M12 3v18"></path>
                </svg>
              </span>
              <h3>Sales</h3>
            </div>
            <ul>
              <li>Lead qualification, nurturing & CRM discipline</li>
              <li>Assisted site visits, follow-ups & documentation</li>
              <li>Clear SLAs: TAT, show-ups, conversion targets</li>
              <li>Weekly funnels & call recordings where applicable</li>
            </ul>
          </div>

          <div className="svc-card">
            <div className="svc-head">
              <span className="svc-icon" aria-hidden>
                {/* Field Sales icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 21V10l4-3 4 3v11"></path>
                </svg>
              </span>
              <h3>Field Sales</h3>
            </div>
            <ul>
              <li>On-ground teams for activations & hyperlocal outreach</li>
              <li>Community/RWA drives, kiosks, events & promotions</li>
              <li>Promoter staffing, training & route planning</li>
              <li>Daily MIS with geo-tagged photos and attendance</li>
            </ul>
          </div>

          <div className="svc-card">
            <div className="svc-head">
              <span className="svc-icon" aria-hidden>
                {/* Marketing icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 10h4l4-6 4 6h6v10H3z"></path>
                </svg>
              </span>
              <h3>Marketing</h3>
            </div>
            <ul>
              <li>Campaign strategy & creatives (consistent messaging)</li>
              <li>Digital + offline lead gen tuned for conversions</li>
              <li>Launch support: events, sampling, and footfall drives</li>
              <li>Brand-safe execution with approval workflows</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== What You Get (adds depth so it doesn’t feel “normal”) ===== */}
      <section className="svc-benefits">
        <div className="svc-container">
          <h2>What you get with Sriyan Group</h2>
          <div className="benefit-grid">
            <div className="benefit">
              <span className="benefit-dot" />
              <h4>Faster deployment</h4>
              <p>Quick ramp-up of staff, routes, and reporting without compromising brand safety.</p>
            </div>
            <div className="benefit">
              <span className="benefit-dot" />
              <h4>Qualified pipelines</h4>
              <p>Better lead hygiene, stronger buyer intent, and diligent follow-through.</p>
            </div>
            <div className="benefit">
              <span className="benefit-dot" />
              <h4>Transparent MIS</h4>
              <p>Daily/weekly dashboards with visits, inquiries, conversions, and actions.</p>
            </div>
            <div className="benefit">
              <span className="benefit-dot" />
              <h4>Scalable ops</h4>
              <p>Scale to new locations with consistent process, training, and governance.</p>
            </div>
          </div>
        </div>
      </section>

         {/* ===== Collaboration strip ===== */}
      <section className="svc-collab">
        <div className="collab-inner">
          <h2>Join us to collaborate and increase sales</h2>
          <p>
            Partner with a team that blends on-ground execution and
            data-driven strategy to drive steady site visits,
            engaged prospects, and predictable conversions.
          </p>
          <Link to="/contact" className="collab-btn">
  Contact Us
</Link>
        </div>
      </section>

    </div>
  );
}
