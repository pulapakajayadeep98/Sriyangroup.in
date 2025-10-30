import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./privacy.css"; // reuse same styling

export default function TermsConditions() {
  useEffect(() => {
    AOS.init({
      duration: 480,
      once: true,
      easing: "ease-out",
      offset: 80,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="privacy-hero">
        <div className="privacy-hero-overlay">
          <div className="privacy-hero-content">
            <h1 data-aos="fade-up">Terms &amp; Conditions</h1>

            {/* Breadcrumb */}
            <nav
              className="pp-breadcrumb"
              aria-label="Breadcrumb"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Terms &amp; Conditions</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="privacy-container">
        <section className="privacy-section" data-aos="fade-up">
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Sriyan Group</strong> (“we”, “us”, “our”). These
            Terms &amp; Conditions (“Terms”) govern your access to and use of
            the website{" "}
            <a
              href="https://www.sriyangroup.in/"
              target="_blank"
              rel="noreferrer"
            >
              https://sriyangroup.in
            </a>{" "}
            (the “Site”), and your purchase of any products or services offered
            on the Site. By using the Site or placing an order, you agree to be
            bound by these Terms.
          </p>
        </section>

        <section className="privacy-section" data-aos="fade-up">
          <h2>2. Eligibility &amp; Registration</h2>
          <p>
            You must be at least the minimum legal age in your jurisdiction to
            form a binding contract (typically 18 years old) to use the Site.
            When you register for an account or place an order, you must provide
            accurate, up-to-date information and keep your login credentials
            secure.
          </p>
        </section>

        <section className="privacy-section" data-aos="fade-up">
          <h2>3. Products / Services</h2>
          <p>
            We make every effort to display products and services as accurately
            as possible on the Site. However, we do not warrant that the
            description, images, or other content are complete, accurate,
            reliable, current, or error-free. We reserve the right to limit
            sales to certain persons, regions, or quantities and to refuse or
            cancel orders at our discretion (for example, if a product is listed
            incorrectly or unavailable).
          </p>
        </section>

        <section className="privacy-section" data-aos="fade-up">
          <h2>4. Order Acceptance &amp; Payment</h2>
          <p>
            Your order constitutes an offer to purchase. We will send you an
            email acknowledging receipt of your order. The contract between you
            and us is formed only when we send the “Order Shipped” email (or
            equivalent). Payment must be made by the methods we accept at the
            time of purchase. All payments are processed securely.
          </p>
        </section>

        <section className="privacy-section" data-aos="fade-up">
          <h2>5. Prices &amp; Taxes</h2>
          <p>
            All prices shown on the Site are in [currency] and may include or
            exclude applicable taxes (VAT/GST) as indicated. We reserve the
            right to change prices at any time and to correct errors in pricing.
            If an error is discovered after you place an order, we may contact
            you for instructions and allow you to cancel the order if you wish.
          </p>
        </section>

        <section className="privacy-section" data-aos="fade-up">
          <h2>6. Delivery</h2>
          <p>
            We will use our best efforts to deliver products in accordance with
            any estimated delivery times shown on the Site. These are estimates
            only. Risk of loss or damage to goods passes to you when the goods
            are delivered to the carrier or to you (depending on the delivery
            method).
          </p>
        </section>

        <section className="privacy-section" data-aos="fade-up">
          <h2>7. Intellectual Property</h2>
          <p>
            All content on the Site (text, images, logos, graphics, videos,
            software) is owned by or licensed to us and is protected by
            copyright, trademark, and other intellectual property laws. You may
            view, download, or print pages from the Site for your personal,
            non-commercial use only. Any other use requires our prior written
            consent.
          </p>
        </section>

        <section className="privacy-section" data-aos="fade-up">
          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, we will not be
            liable for any indirect, special, incidental, or consequential loss
            or damage (including loss of profits, data, production, or business
            interruption) arising out of or in connection with the Site or any
            products or services purchased from the Site. Our total aggregate
            liability arising from or relating to these Terms, the Site, or any
            order will in no event exceed the amount you paid us for the product
            or service that gave rise to the claim.
          </p>
        </section>

        <section className="privacy-section" data-aos="fade-up">
          <h2>9. Governing Law &amp; Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of the State. Any dispute
            arising under or in connection with these Terms shall be subject to
            the exclusive jurisdiction of the courts of Telangana.
          </p>
        </section>

        <section className="privacy-section" data-aos="fade-up">
          <h2>10. Severability</h2>
          <p>
            If any provision of these Terms is held to be invalid or
            unenforceable, that provision will be deemed deleted, and the
            remaining provisions will continue in full force and effect.
          </p>
        </section>

        <section className="privacy-section" data-aos="fade-up">
          <h2>11. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of
            material changes by posting a prominent notice on the Site. Your
            continued use of the Site after such changes constitutes acceptance
            of the revised Terms.
          </p>
        </section>

        <section className="privacy-section" data-aos="fade-up">
          <h2>12. Contact Information</h2>
          <p>
            If you have questions or concerns about these Terms or our data
            processing, you may contact us at:
          </p>
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
