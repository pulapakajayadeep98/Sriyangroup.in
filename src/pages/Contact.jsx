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
      <main className="c-container">
        <div className="c-grid">
          {/* LEFT INFO */}
          <aside className="c-info">
            <div className="c-card">
              <div className="c-label">Mobile</div>
              <a className="c-value" href={`tel:${phone.replace(/\s+/g, "")}`}>
                {phone}
              </a>
            </div>

            <div className="c-card">
              <div className="c-label">Email</div>
              <a className="c-value" href={`mailto:${email}`}>
                {email}
              </a>
            </div>

            <div className="c-card">
              <div className="c-label">Address</div>
              <p className="c-value c-value--paragraph">{addressLine}</p>
              <a
                className="c-link"
                href="https://maps.app.goo.gl/ukJoM8J4Brrr2rkp8"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </div>
          </aside>

          {/* RIGHT FORM / SUCCESS */}
          <section className="c-form">
            {status.type === "success" ? (
              <div className="c-card c-card--success">
                <h3 className="c-h3">Thank you!</h3>
                <p className="c-note">{status.msg}</p>
              </div>
            ) : (
              <div className="c-card">
                <h3 className="c-h3">Send us a message</h3>
                <form onSubmit={onSubmit} className="c-formgrid">
                  <div className="c-field">
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

                  <div className="c-field">
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

                  <div className="c-field">
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

                  <div className="c-field c-field--full">
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

                  <div className="c-actions">
                    <button disabled={status.type === "loading"} type="submit">
                      {status.type === "loading" ? "Sending..." : "Send Message"}
                    </button>
                  </div>

                  {status.type === "error" && (
                    <p className="c-alert">{status.msg}</p>
                  )}
                </form>
              </div>
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
