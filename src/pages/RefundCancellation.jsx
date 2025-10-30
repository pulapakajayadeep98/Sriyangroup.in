import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./cancel.css"; // reuse the same CSS styling

export default function RefundCancellation() {
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
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="terms-hero-overlay">
          <div className="terms-hero-content">
            <h1 data-aos="fade-up">Refund &amp; Cancellation Policy</h1>

            {/* Breadcrumb */}
            <nav
              className="tc-breadcrumb"
              aria-label="Breadcrumb"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Refund &amp; Cancellation Policy</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="terms-container">
        <section className="tc-section" data-aos="fade-up">
          <h2>1. Introduction</h2>
          <p>
            Thank you for choosing <strong>Sriyan Group</strong> (the
            “Company”, “we”, “us”, “our”). The following policy applies to all
            purchases of products and services from our website{" "}
            <a
              href="https://sriyangroup.in"
              target="_blank"
              rel="noreferrer"
            >
              https://sriyangroup.com
            </a>
            .
          </p>
        </section>

        <section className="tc-section" data-aos="fade-up">
          <h2>2. No Refunds &amp; No Cancellations</h2>
          <ul>
            <li>
              All sales are final. We do not accept requests for refunds or
              cancellations once an order has been placed and payment has been
              processed.
            </li>
            <li>
              Please review your order carefully, including product information,
              pricing, and shipping details, before submitting the order.
            </li>
          </ul>
        </section>

        <section className="tc-section" data-aos="fade-up">
          <h2>3. How to Request a Remedy</h2>
          <ul>
            <li>
              If you believe there is an issue with your order, please contact
              us at{" "}
              <a href="mailto:anwarpasha@live.in">anwarpasha@live.in</a>.
            </li>
            <li>
              Provide your order number, date of purchase, a clear description
              of the issue, and photographs (if applicable).
            </li>
            <li>
              We will investigate and communicate our decision within a
              reasonable timeframe.
            </li>
          </ul>
        </section>

        <section className="tc-section" data-aos="fade-up">
          <h2>4. Modifications to this Policy</h2>
          <ul>
            <li>
              We may update this Refund &amp; Cancellation Policy at any time by
              posting the revised version on the Site.
            </li>
            <li>
              The “Last Updated” date will be modified accordingly.
            </li>
            <li>
              Your continued use of our services or ordering after such changes
              constitutes acceptance of the updated policy.
            </li>
          </ul>
        </section>

        <section className="tc-section" data-aos="fade-up">
          <h2>5. Contact Us</h2>
          <p>
            If you have any questions or concerns about this policy, please
            contact us at:
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
