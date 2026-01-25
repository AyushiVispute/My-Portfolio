import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <h2 className="contact-title">
        Contact <span>Me</span>
      </h2>

      <p className="contact-subtitle">
        Feel free to reach out for collaborations, opportunities, or just a
        friendly hello 👋
      </p>

      <div className="contact-container">
        {/* Left Info */}
        <div className="contact-info">
          <div className="info-box">
            <h4>Email</h4>
            <p>yourname@email.com</p>
          </div>

          <div className="info-box">
            <h4>Phone</h4>
            <p>+91 XXXXX XXXXX</p>
          </div>

          <div className="info-box">
            <h4>Location</h4>
            <p>India</p>
          </div>
        </div>

        {/* Right Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
