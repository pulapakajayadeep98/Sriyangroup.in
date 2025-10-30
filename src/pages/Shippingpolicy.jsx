import React from "react";
import "./shipping.css";

export default function ShippingPolicy() {
  return (
    <>
      {/* ===== Simple Hero Section ===== */}
      <section className="shipping-hero-top">
        <h1>Shipping & Delivery Policy</h1>
        <p className="last-updated">Last updated on Oct 29th 2025</p>
      </section>

      {/* ===== Content ===== */}
      <main className="shipping-wrapper">
        <p>
          For international buyers, orders are shipped and delivered through
          registered international courier companies and/or international speed
          post only. For domestic buyers, orders are shipped through registered
          domestic courier companies and/or speed post only.
        </p>

        <p>
          Orders are shipped within <strong>Not Applicable</strong> or as per
          the delivery date agreed at the time of order confirmation and delivery
          of the shipment is subject to courier company or post office norms.
        </p>

        <p>
          <strong>Sriyan Group</strong> is not liable for any delay in delivery
          by the courier company or postal authorities and only guarantees to hand
          over the consignment to the courier company or postal authorities within{" "}
          <strong>Not Applicable</strong> from the date of the order and payment,
          or as per the delivery date agreed at the time of order confirmation.
        </p>

        <p>
          Delivery of all orders will be made to the address provided by the buyer.
          Delivery confirmation will be sent to your registered email ID as specified
          during registration.
        </p>

        <p>
          For any issues in utilizing our services, please contact our helpdesk at{" "}
          <a href="tel:+919885524320">+91 9885524320</a> or email{" "}
          <a href="mailto:anwarpasha@live.in">anwarpasha@live.in</a>.
        </p>
      </main>
    </>
  );
}
