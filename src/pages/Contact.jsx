import React, { useState } from "react";
import "./Contact.css";
import heroImage from "/cooo.jpg"; // ✅ Local image import

export default function ContactPage() {
  const phone = "+91 83416 76712";
  const email = "anwarpasha@live.in";
  const addressLine =
    "817-7th floor, Vasavi Mpm Grand, Ameerpet, Hyderabad, Telangana 500073, India";

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", msg: "" }); // idle | loading | success | error

  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    addressLine
  )}&output=embed`;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "" });

    try {
      const data = new FormData();
      data.append("access_key", "c67b3658-a0b5-43ff-af9e-2afaa64073ad");
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("mobile", form.mobile);
      data.append("message", form.message);
      data.append("subject", "New contact from website");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus({
          type: "success",
          msg:
            "Thank you for submitting the form. Our team will reach you in 24 hrs.",
        });
        setForm({ name: "", email: "", mobile: "", message: "" });
      } else {
        setStatus({
          type: "error",
          msg: json.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        msg: "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <div className="c-wrap">
      {/* HERO SECTION */}
      <section
        className="c-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        role="img"
        aria-label="Contact hero"
      >
        <div className="c-hero__overlay">
          <h1 className="c-hero__title">Contact Us</h1>
        </div>
      </section>


      {/* MAIN */}
   <main className="contact-wrap">
  <div className="contact-head">
    <h2>Let’s Talk</h2>
    <p>We help brands grow with strategy, creativity, and performance.</p>
  </div>

  <div className="contact-grid">
    {/* LEFT: Info */}
    <aside className="contact-info">
      <div className="info-row">
        <a className="info-tile" href={`tel:${phone.replace(/\s+/g, "")}`}>
          <span className="tile-icon">
            {/* phone icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.2 1h2a2 2 0 0 1 2 1.72c.12.9.34 1.77.65 2.6a2 2 0 0 1-.45 2.11L7.1 8.9a16 16 0 0 0 6 6l1.47-1.3a2 2 0 0 1 2.11-.45c.83.31 1.7.53 2.6.65A2 2 0 0 1 22 16.92Z" fill="#fff"/>
            </svg>
          </span>
          <div className="tile-body">
            <span className="tile-label">Call us</span>
            <span className="tile-value">{phone}</span>
          </div>
        </a>

        <a className="info-tile" href={`mailto:${email}`}>
          <span className="tile-icon">
            {/* mail icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" fill="#fff" opacity=".15"/>
              <path d="M22 6l-10 7L2 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div className="tile-body">
            <span className="tile-label">Email</span>
            <span className="tile-value">{email}</span>
          </div>
        </a>
      </div>

      <div className="address-card">
        <div className="addr-icon">
          {/* pin icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 22s7-6.73 7-12a7 7 0 1 0-14 0c0 5.27 7 12 7 12Z" stroke="#3730a3" strokeWidth="2" fill="#eef2ff"/>
            <circle cx="12" cy="10" r="2.8" fill="#3730a3"/>
          </svg>
        </div>
        <div>
          <div className="addr-label">Address</div>
          <p className="addr-text">{addressLine}</p>
          <a
            className="addr-btn"
            href="https://maps.app.goo.gl/ukJoM8J4Brrr2rkp8"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H9M17 7v8" stroke="#1e2b50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Open in Google Maps
          </a>
        </div>
      </div>
    </aside>

    {/* RIGHT: Form */}
    <section className="contact-form">
      {status.type === "success" ? (
        <div className="success-box">
          <h3>Thank you!</h3>
          <p>{status.msg}</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="form-box">
          <div className="form-head">
            <h3>Send us a message</h3>
            <p>We usually reply within one business day.</p>
          </div>

          <div className="form-body">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="mobile">Mobile</label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit Indian mobile number"
                  placeholder="10-digit mobile number"
                  value={form.mobile}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="field full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </div>
            </div>

            <div className="form-actions">
              <button disabled={status.type === "loading"} type="submit">
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>

            {status.type === "error" && (
              <p className="error-alert">{status.msg}</p>
            )}
          </div>
        </form>
      )}
    </section>
  </div>
</main>


      {/* MAP (full-bleed, no extra space) */}
      <section className="c-map">
        <iframe
          title="Vasavi MPM Grand Location"
          src={mapsEmbed}
          width="100%"
          height="460"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
