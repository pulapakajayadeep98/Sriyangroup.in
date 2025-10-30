import React from "react";
import "./terms.css"; // minimal styles for hero + content

export default function TermsConditions() {
  return (
    <>
      {/* Simple hero */}
      <section className="terms-hero-top ">
        <h1>Terms & Conditions</h1>
        <p className="last-updated">Last updated on Oct 29th 2025</p>
      </section>

      {/* Content */}
      <main className="terms-wrapper">
        <p>
          Welcome to <strong>Sriyan Group</strong> (“we”, “us”, “our”). These
          Terms & Conditions (“Terms”) govern your access to and use of the website{" "}
          <a
            href="https://www.sriyangroup.in/"
            target="_blank"
            rel="noreferrer"
          >
            https://sriyangroup.in
          </a>{" "}
          (the “Site”), and your purchase of any products or services offered on the Site.
          By using the Site or placing an order, you agree to be bound by these Terms.
        </p>

        <p>
          <strong>1. Eligibility & Registration:</strong> You must be at least the minimum
          legal age in your jurisdiction (typically 18) to use the Site. When you register
          or place an order, provide accurate, up-to-date information and keep your
          credentials secure.
        </p>

        <p>
          <strong>2. Products / Services:</strong> We strive to display products/services
          accurately; however, we do not warrant that descriptions, images, or other content
          are complete, current, or error-free. We may limit sales, quantities, regions, or
          refuse/cancel orders (e.g., if a product is mislisted or unavailable).
        </p>

        <p>
          <strong>3. Order Acceptance & Payment:</strong> Your order is an offer to purchase.
          We acknowledge receipt by email; the contract forms when we send the “Order Shipped”
          (or equivalent) email. Payments must use methods we accept and are processed securely.
        </p>

        <p>
          <strong>4. Prices & Taxes:</strong> Prices shown are in the stated currency and may
          include/exclude applicable taxes as indicated. We may change prices and correct
          errors. If a pricing error is discovered after you order, we may contact you for
          instructions or allow cancellation.
        </p>

        <p>
          <strong>5. Delivery:</strong> We use reasonable efforts to deliver in line with any
          estimates shown on the Site (estimates only). Risk of loss or damage passes per the
          delivery method when goods are handed to the carrier or delivered to you.
        </p>

        <p>
          <strong>6. Intellectual Property:</strong> All Site content (text, images, logos,
          graphics, software) is owned by or licensed to us and protected by law. You may
          view/download/print for personal, non-commercial use only. Other use requires our
          prior written consent.
        </p>

        <p>
          <strong>7. Limitation of Liability:</strong> To the fullest extent permitted by law,
          we are not liable for indirect, special, incidental, or consequential damages
          (including lost profits/data/production) arising from the Site or purchases.
          Our aggregate liability will not exceed the amount you paid for the relevant product
          or service.
        </p>

        <p>
          <strong>8. Governing Law & Dispute Resolution:</strong> These Terms are governed by
          the laws of the State. Disputes are subject to the exclusive jurisdiction of the
          courts of Telangana.
        </p>

        <p>
          <strong>9. Severability:</strong> If any provision is invalid or unenforceable, it
          will be deemed deleted and the remainder will continue in full force.
        </p>

        <p>
          <strong>10. Changes to Terms:</strong> We may update these Terms by posting a
          revised version on the Site. The “Last updated” date will change accordingly.
          Continued use after changes constitutes acceptance.
        </p>

        <p>
          <strong>Contact:</strong> For questions about these Terms, contact:
          <br />
          <strong>Email:</strong>{" "}
          <a href="mailto:anwarpasha@live.in">anwarpasha@live.in</a>
          <br />
          <strong>Address:</strong> Vasavi MPM Grand, Unit No – 1312, 12th Floor,
          Ameerpet X Road, Beside Ameerpet Metro Station, Telangana 500073
          <br />
          <strong>Mobile:</strong>{" "}
          <a href="tel:+91988524320">+91 988524320</a>
        </p>
      </main>
    </>
  );
}
