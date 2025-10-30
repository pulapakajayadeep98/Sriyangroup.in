import React from "react";
import "./privacy.css"; // uses the simple hero + wrapper styles below

export default function PrivacyPolicy() {
  return (
    <>
      {/* Simple hero */}
      <section className="privacy-hero-top">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated on Oct 29th 2025</p>
      </section>

      {/* Content */}
      <main className="privacy-wrapper">
        <section className="privacy-block">
          <p>
            Welcome to <strong>Sriyan Group</strong> (“we”, “us”, “our”). We
            operate the website{" "}
            <a
              href="https://www.sriyangroup.in/"
              target="_blank"
              rel="noreferrer"
            >
              https://sriyangroup.in
            </a>{" "}
            (the “Site”). We are committed to protecting and respecting your
            privacy. This Privacy Policy explains how we collect, use, share,
            and protect your personal data when you visit or use our Site.
          </p>
        </section>

        <section className="privacy-block">
          <h2>Information We Collect</h2>
          <p>We may collect and process the following personal data about you:</p>
          <ul>
            <li>
              <strong>Contact Details:</strong> Name, email address, postal
              address, and telephone number (as provided when you register,
              subscribe, contact us or make a purchase).
            </li>
            <li>
              <strong>Transaction Data:</strong> Details of products or services
              you have purchased or requested from us.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type/version,
              time zone setting, plug-ins, OS and platform.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our Site,
              products and services.
            </li>
            <li>
              <strong>Marketing &amp; Communications:</strong> Your marketing
              preferences and communication choices.
            </li>
          </ul>
        </section>

        <section className="privacy-block">
          <h2>How We Use Your Information</h2>
          <ul>
            <li>
              To provide, operate, maintain and improve our Site and our products
              and services.
            </li>
            <li>
              To process your purchase, deliver your order, manage your account,
              verify your identity, and respond to enquiries.
            </li>
            <li>
              To send service-related communications such as confirmations,
              technical updates, and alerts.
            </li>
            <li>
              To deliver marketing communications (if you have consented) about
              our products and services.
            </li>
            <li>
              To analyse usage to assess and improve functionality, performance,
              and user experience.
            </li>
          </ul>
        </section>

        <section className="privacy-block">
          <h2>Legal Basis for Processing</h2>
          <ul>
            <li>Your consent (you have explicitly agreed).</li>
            <li>Performance of a contract with you.</li>
            <li>Compliance with a legal obligation.</li>
            <li>Our legitimate interests, where these are not overridden by your rights.</li>
          </ul>
        </section>

        <section className="privacy-block">
          <h2>Disclosure of Your Information</h2>
          <p>We may share your personal data with:</p>
          <ul>
            <li>Service providers and subcontractors (payment, delivery, hosting, analytics, marketing).</li>
            <li>Affiliates or other companies in our corporate group.</li>
            <li>Legal/regulatory authorities where required by law or to protect our rights.</li>
          </ul>
        </section>

        <section className="privacy-block">
          <h2>International Transfers</h2>
          <p>
            Your information may be transferred to and stored at a destination
            outside your country of residence. Where required, we will ensure
            appropriate safeguards in accordance with applicable data-protection
            laws.
          </p>
        </section>

        <section className="privacy-block">
          <h2>Data Security &amp; Retention</h2>
          <p>
            We employ administrative, technical and physical security measures to
            protect your personal data. We retain it for as long as reasonably
            necessary for the purposes set out in this Policy (including legal
            obligations), after which we securely delete or anonymise it.
          </p>
        </section>

        <section className="privacy-block">
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
            <a href="mailto:anwarpasha@live.in">anwarpasha@live.in</a>. We will
            respond in a reasonable timeframe.
          </p>
        </section>

        <section className="privacy-block">
          <h2>Cookies &amp; Similar Technologies</h2>
          <p>
            We may use cookies and similar technologies to collect and store
            information when you visit our Site. You can manage cookies via your
            browser settings. Disabling certain cookies may affect functionality.
          </p>
        </section>

        <section className="privacy-block">
          <h2>Updates to this Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will publish
            the revised Policy on this Site and update the “Last updated” date.
            Your continued use of the Site after such changes constitutes your
            acceptance.
          </p>
        </section>

        <section className="privacy-block">
          <h2>Contact Information</h2>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:anwarpasha@live.in">anwarpasha@live.in</a>
            <br />
            <strong>Address:</strong> Vasavi MPM Grand, Unit No – 1312, 12th
            Floor, Ameerpet X Road, Beside Ameerpet Metro Station, Telangana
            500073
            <br />
            <strong>Mobile:</strong>{" "}
            <a href="tel:+91988524320">+91 988524320</a>
          </p>
        </section>
      </main>
    </>
  );
}
