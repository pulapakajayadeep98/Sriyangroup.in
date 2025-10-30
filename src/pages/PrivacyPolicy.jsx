import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./privacy.css";

export default function PrivacyPolicy() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      {/* Hero */}
  <section
  className="privacy-hero"
  style={{ "--hero-url": "url('/images/privacy-hero.jpg')" }}
>
  <div className="privacy-hero-overlay">
    <div className="privacy-hero-content">
      <h1 data-aos="fade-up">Privacy Policy</h1>
      <nav className="pp-breadcrumb" aria-label="Breadcrumb" data-aos="fade-up" data-aos-delay="250">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span>Privacy Policy</span>
      </nav>
    </div>
  </div>
</section>


      {/* Main */}
      <main className="privacy-container">
        {/* Intro */}
        <section className="privacy-section" data-aos="fade-up">
          <h2>Introduction</h2>
          <p>
            Welcome to <strong>Sriyan Group</strong> (“we”, “us”, “our”). We operate the website{" "}
            <a href="https://www.sriyangroup.in/" target="_blank" rel="noreferrer">https://sriyangroup.in</a> (the “Site”).
            We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect,
            use, share, and protect your personal data when you visit or use our Site.
          </p>
        </section>

        {/* Two-column layout: left (What we collect) | right (How we use) */}
        <section className="privacy-grid" data-aos="fade-up">
          {/* LEFT: Information We Collect */}
          <div className="privacy-card">
            <h2>Information We Collect</h2>
            <p>We may collect and process the following personal data about you:</p>

            {/* STRAIGHT HORIZONTAL ROW on large screens */}
            <div className="info-row">
              <div className="info-item" data-aos="zoom-in" data-aos-delay="50">
                <h3>Contact Details</h3>
                <p>
                  Name, email address, postal address, and telephone number (as provided when you register,
                  subscribe, contact us or make a purchase).
                </p>
              </div>

              <div className="info-item" data-aos="zoom-in" data-aos-delay="100">
                <h3>Transaction Data</h3>
                <p>Details of products or services you have purchased or requested from us.</p>
              </div>

              <div className="info-item" data-aos="zoom-in" data-aos-delay="150">
                <h3>Technical Data</h3>
                <p>IP address, browser type/version, time zone setting, plug-ins, OS and platform.</p>
              </div>

              <div className="info-item" data-aos="zoom-in" data-aos-delay="200">
                <h3>Usage Data</h3>
                <p>Information about how you use our Site, products and services.</p>
              </div>

              <div className="info-item" data-aos="zoom-in" data-aos-delay="250">
                <h3>Marketing & Communications</h3>
                <p>Your marketing preferences and communication choices.</p>
              </div>
            </div>
          </div>

          {/* RIGHT: How We Use */}
          <div className="privacy-card" data-aos="fade-left">
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To provide, operate, maintain and improve our Site and our products and services.</li>
              <li>To process your purchase, deliver your order, manage your account, verify your identity, and respond to enquiries.</li>
              <li>To send service-related communications such as confirmations, technical updates, and alerts.</li>
              <li>To deliver marketing communications (if you have consented) about our products and services.</li>
              <li>To analyse usage to assess and improve functionality, performance, and user experience.</li>
            </ul>
          </div>
        </section>

        {/* Legal Basis */}
        <section className="privacy-section" data-aos="fade-up">
          <h2>Legal Basis for Processing</h2>
          <ul>
            <li>Your consent (you have explicitly agreed).</li>
            <li>Performance of a contract with you.</li>
            <li>Compliance with a legal obligation.</li>
            <li>Our legitimate interests, where these are not overridden by your rights.</li>
          </ul>
        </section>

        {/* Disclosure */}
        <section className="privacy-section" data-aos="fade-up">
          <h2>Disclosure of Your Information</h2>
          <p>We may share your personal data with:</p>
          <ul>
            <li>Service providers and subcontractors (payment, delivery, hosting, analytics, marketing).</li>
            <li>Affiliates or other companies in our corporate group.</li>
            <li>Legal/regulatory authorities where required by law or to protect our rights.</li>
          </ul>
        </section>

        {/* Transfers */}
        <section className="privacy-section" data-aos="fade-up">
          <h2>International Transfers</h2>
          <p>
            Your information may be transferred to and stored at a destination outside your country of residence.
            Where required, we will ensure appropriate safeguards in accordance with applicable data-protection laws.
          </p>
        </section>

        {/* Security & Retention */}
        <section className="privacy-section" data-aos="fade-up">
          <h2>Data Security & Retention</h2>
          <p>
            We employ administrative, technical and physical security measures to protect your personal data.
            We retain it for as long as reasonably necessary for the purposes set out in this Policy (including legal obligations),
            after which we securely delete or anonymise it.
          </p>
        </section>

        {/* Rights */}
        <section className="privacy-section" data-aos="fade-up">
          <h2>Your Rights</h2>
          <ul>
            <li>Access to the personal data we hold about you.</li>
            <li>Correction or deletion of your personal data.</li>
            <li>Restriction or objection to processing.</li>
            <li>Data portability.</li>
            <li>Withdraw consent at any time (where processing is based on consent).</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:anwarpasha@live.in">anwarpasha@live.in</a>. We will respond in a reasonable timeframe.
          </p>
        </section>

        {/* Cookies */}
        <section className="privacy-section" data-aos="fade-up">
          <h2>Cookies & Similar Technologies</h2>
          <p>
            We may use cookies and similar technologies to collect and store information when you visit our Site.
            You can manage cookies via your browser settings. Disabling certain cookies may affect functionality.
          </p>
        </section>

        {/* Updates */}
        <section className="privacy-section" data-aos="fade-up">
          <h2>Updates to this Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will publish the revised Policy on this Site and update
            the “Last updated” date. Your continued use of the Site after such changes constitutes your acceptance.
          </p>
        </section>

        {/* Contact */}
        <section className="privacy-section" data-aos="fade-up">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> <a href="mailto:anwarpasha@live.in">anwarpasha@live.in</a></p>
          <p><strong>Address:</strong> Vasavi MPM Grand, Unit No – 1312, 12th Floor, Ameerpet X Road, Beside Ameerpet Metro Station, Telangana 500073</p>
          <p><strong>Mobile:</strong> <a href="tel:+91988524320">+91 988524320</a></p>
        </section>
      </main>
    </>
  );
}
