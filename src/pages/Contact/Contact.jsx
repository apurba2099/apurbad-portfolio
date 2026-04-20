import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

// ─── DATA ────────────────────────────────────────────────────────────────────

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin color="#0A66C2" />,
    username: "Apurba Dutta",
    url: "https://www.linkedin.com/in/apurba-dutta-079230240/",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    username: "apurba2099",
    url: "https://github.com/apurba2099",
  },
  {
    name: "Twitter / X",
    icon: <SiX />,
    username: "apurbadutta2003",
    url: "https://x.com/apurbadutta2003",
  },
  {
    name: "Instagram",
    icon: <FaInstagram color="#E1306C" />,
    username: "apurba2099",
    url: "https://www.instagram.com/apurba2099/",
  },
  {
    name: "Facebook",
    icon: <FaFacebook color="#1877F2" />,
    username: "apurba2099",
    url: "https://www.facebook.com/apurba2099",
  },
  {
    name: "Discord",
    icon: <FaDiscord color="#5865F2" />,
    username: "apurba_2003",
    url: "https://discordapp.com/users/1144705121385713816",
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const WEB3_ACCESS_KEY = "d16f0bec-44b1-4c37-8c33-4d264b2b50a2";

export default function Contact() {
  const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: WEB3_ACCESS_KEY, ...formData }),
      });
      const result = await res.json();
      if (result.success) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      toast.error(`An error occurred: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-header">
          <button
            className="back-btn"
            onClick={() => navigate("/")}
            aria-label="Go back home"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <h2>
            Contact Me <i className="fa-regular fa-message"></i>
          </h2>
        </div>

        {/* Success Banner */}
        {showSuccess && (
          <div className="success-message" role="alert">
            <div className="success-icon">✓</div>
            <div className="success-text">
              <h3>Message sent successfully!</h3>
              <p>Thank you for reaching out. I&apos;ll get back to you soon.</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
          </div>
        </form>
      </section>

      {/* Social Links */}
      <section className="social-section">
        <h2>
          Find me on social media <i className="fa-solid fa-message"></i>
        </h2>
        <div className="social-grid">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              aria-label={`Visit ${social.name}`}
            >
              <div className="social-icon">{social.icon}</div>
              <p className="social-username">{social.username}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Mail Box */}
      <section className="envelop">
        <div className="mail-box">
          <a href="mailto:apurbadutta2099@gmail.com">
            <i className="fa fa-envelope"></i> apurbadutta2099@gmail.com
          </a>
          <h2>&lt; Apurba Dutta /&gt;</h2>
          <a href="https://apurbadutta.lol" target="_blank" rel="noopener noreferrer">
            🔗 apurbadutta.lol
          </a>
        </div>
      </section>

      {/* Resume Download */}
      <section className="resume-section">
        <a
          className="resume-btn"
          href="./ApurbaDutta_Resume.pdf"
          download="ApurbaDutta_Resume.pdf"
        >
          <i className="fa-solid fa-download"></i>
          Download My CV
        </a>
      </section>

      {/* Toast notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
