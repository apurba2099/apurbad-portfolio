import { useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import "./Contact.css";
import Navigation from ".//..//../components/Navigation/Navigation";

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //Handler Functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success message
    setShowSuccess(true);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin color="#0A66C2" />,
      username: "Apurba (apurba) Dutta",
      url: "https://www.linkedin.com/in/apurba-dutta-079230240/",
    },
    {
      name: "GitHub",
      icon: <FaGithub color="#ffffffff" />,
      username: "apurba2099",
      url: "https://github.com/apurba2099",
    },
    {
      name: "Twitter",
      icon: <FaTwitter color="#1DA1F2" />,
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
  ];
  return (
    <div className="contact">
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-header">
          <a className="back-btn">
            <i class="fa-solid fa-arrow-left"></i>
          </a>
          <h2>Contact Me</h2>
        </div>

        {showSuccess && (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <div className="success-text">
              <h3>Message sent successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
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
                placeholder="email"
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
              placeholder="message"
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>

      {/* Find Me Here Section */}
      <section className="social-section">
        <h2>Connect With Me Also Here &#x1F50D;</h2>
        <div className="social-grid">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} className="social-card">
              <div className="social-icon">{social.icon}</div>
              <p className="social-username">{social.username}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Mail Box  */}
      <section className="envelop">
        <div className="mail-box">
          <a href="mailto:apurbadutta2099@gmail.com">
            <i class="fa fa-envelope"></i> APURBADUTTA2099@GMAIL.COM
          </a>
          <h2>&lt;Apurba Dutta /&gt;</h2>
          <a href="https://apurbad-portfolio.vercel.app" target="_blank">
            &#128279; APURBAD-PORTFOLIO
          </a>
        </div>
      </section>

      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
}
