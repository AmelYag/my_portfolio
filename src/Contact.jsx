import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // أرسل البيانات يدوياً إلى FormSubmit
    const form = e.target;
    fetch("https://formsubmit.co/YOUR_EMAIL_HERE", {
      method: "POST",
      body: new FormData(form)
    }).then((response) => {
      if (response.ok) {
        setMessageSent(true);
        form.reset();
      }
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>

        {messageSent && (
          <div className="success-banner">
            ✅ Your message has been sent successfully!
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
