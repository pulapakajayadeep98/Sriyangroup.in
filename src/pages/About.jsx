import React from "react";
import "./AboutPage.css";
import aboImage from "/abo.jpg";      // existing image
import aboutImage from "/about.jpg";  // newly added image

export default function AboutPage() {
  return (
    <div className="about-wrapper">
      {/* ===== Hero Section ===== */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${aboutImage})`, 
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="about-hero__overlay">
          <h1 className="about-hero__title">About Sriyan Group</h1>
        </div>
      </section>


      {/* ===== About Us: text LEFT, image RIGHT ===== */}
      <section className="about-content container">
        <div className="about-grid about-grid--text-left">
          {/* LEFT: About text (real estate marketing agency) */}
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              <strong>Sriyan Group</strong> is a specialized <b>real estate marketing agency</b>&nbsp;
              that helps developers and ventures achieve faster, more reliable sales through
              integrated marketing and on-ground execution. We work with trusted partners like
              <b> Vishnu Nivas, Milestone Enclave,</b> and <b>City Makers</b> to position projects
              for maximum visibility, credibility, and conversions.
            </p>
            <p>
              We blend <b>field marketing, digital campaigns, and customer engagement</b> to build
              qualified pipelines and real buyer interest for open plots, residential townships,
              and gated communities. From campaign strategy and lead capture to site visits and
              assisted bookings, our team manages the full funnel with transparency and accountability.
            </p>
            <p>
              Backed by an experienced network of marketers and field executives, we act as your
              <b> marketing partner</b>—aligning with your goals, brand standards, and timelines to
              deliver steady, measurable growth.
            </p>
          </div>

          {/* RIGHT: Image */}
          <div className="about-image">
            <img
              src="/abo.jpg"
              alt="Sriyan Group – real estate marketing in action"
            />
          </div>
        </div>
      </section>

      {/* ===== Mission • Vision ===== */}
      <section className="about-mvc container">
        <div className="mvc-grid">
          <div className="mvc-card">
            <div className="mvc-head">
              <span className="mvc-icon" aria-hidden>
                {/* Target icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
              <h3>Our Mission</h3>
            </div>
            <p>
              To enable real estate developers and ventures to scale with confidence by delivering
              integrated marketing and field sales support that drives qualified leads, high–intent
              site visits, and consistent conversions.
            </p>
          </div>

          <div className="mvc-card">
            <div className="mvc-head">
              <span className="mvc-icon" aria-hidden>
                {/* Eye icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
              <h3>Our Vision</h3>
            </div>
            <p>
              To be the most trusted <b>real estate marketing partner</b> known for transparent
              execution, innovation, and measurable outcomes for developers and customers alike.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Core Values ===== */}
   <section className="about-values container">
  <h2 className="values-title">Core Values</h2>

  <div className="values-grid">
    {/* Integrity */}
    <article className="value-card">
      <span className="value-ico" aria-hidden>
        {/* Shield check */}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3l8 4v5c0 5-3.4 8.6-8 9-4.6-.4-8-4-8-9V7l8-4Z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      </span>
      <h3>Integrity</h3>
      <p>Transparent processes, honest updates, and ethical marketing in every engagement.</p>
    </article>

    {/* Commitment */}
    <article className="value-card">
      <span className="value-ico" aria-hidden>
        {/* Target */}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9"></circle>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </span>
      <h3>Commitment</h3>
      <p>Ownership mindset—clear SLAs, timely delivery, and dependable results.</p>
    </article>

    {/* Innovation */}
    <article className="value-card">
      <span className="value-ico" aria-hidden>
        {/* Lightbulb */}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 18h6"></path>
          <path d="M10 22h4"></path>
          <path d="M12 2a7 7 0 00-4 12c.7.7 1 1.5 1 2.5V17h6v-.5c0-1 .3-1.8 1-2.5A7 7 0 0012 2z"></path>
        </svg>
      </span>
      <h3>Innovation</h3>
      <p>Blending digital, data, and on-ground strategies for smarter campaigns.</p>
    </article>

    {/* Collaboration */}
    <article className="value-card">
      <span className="value-ico" aria-hidden>
        {/* Handshake */}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 8l-6 6-4-4-6 6"></path>
          <path d="M3 8l6 6"></path>
        </svg>
      </span>
      <h3>Collaboration</h3>
      <p>Working in lockstep with partner goals—from launch to sell-out.</p>
    </article>

    {/* Customer Focus */}
    <article className="value-card">
      <span className="value-ico" aria-hidden>
        {/* Heart */}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 22l7.8-8.6 1-1a5.5 5.5 0 000-7.8z"></path>
        </svg>
      </span>
      <h3>Customer Focus</h3>
      <p>Clear communication, guided site visits, and a buyer-first experience.</p>
    </article>
  </div>
</section>

    </div>
  );
}
