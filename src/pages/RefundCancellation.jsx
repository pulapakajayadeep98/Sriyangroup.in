import React from "react";
import "./cancel.css"; // keep your existing policy CSS

export default function RefundCancellation() {
  return (
    <>
      {/* ===== Simple Hero ===== */}
      <section className="refund-hero-top">
        <h1>Cancellation and Refund Policy</h1>
        <p className="last-updated">Last updated on Oct 29th 2025</p>
      </section>

      {/* ===== Content ===== */}
      <main className="refund-wrapper">
        <p>
          Thank you for choosing <strong>Sriyan Group</strong> (“we”, “us”,
          “our”). The following policy applies to all purchases of products and
          services from our website{" "}
          <a
            href="https://www.sriyangroup.in/"
            target="_blank"
            rel="noreferrer"
          >
            https://sriyangroup.in
          </a>
          .
        </p>

        <p>
          <strong>1. No Refunds & No Cancellations:</strong> All sales are final.
          We do not accept requests for refunds or cancellations once an order
          has been placed and payment has been processed. Please review your
          order carefully, including product information, pricing, and shipping
          details, before submitting the order.
        </p>

        <p>
          <strong>2. How to Request a Remedy:</strong> If you believe there is an
          issue with your order, please contact us at{" "}
          <a href="mailto:anwarpasha@live.in">anwarpasha@live.in</a>. Provide
          your order number, date of purchase, a clear description of the issue,
          and photographs (if applicable). We will investigate and communicate
          our decision within a reasonable timeframe.
        </p>

        <p>
          <strong>3. Modifications to this Policy:</strong> We may update this
          Refund & Cancellation Policy at any time by posting the revised version
          on our website. The “Last Updated” date will be modified accordingly.
          Your continued use of our services or ordering after such changes
          constitutes acceptance of the updated policy.
        </p>

        <p>
          <strong>4. Contact Us:</strong> If you have any questions or concerns
          about this policy, please reach out to us:
        </p>

        <p>
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
