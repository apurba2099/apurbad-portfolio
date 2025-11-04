import { useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

import { SiX } from "react-icons/si";
import "./Contact.css";

// ✅ Toastify import
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Routes
import { useNavigate } from "react-router-dom";

export default function Contact() {
  //Routes
  const navigate = useNavigate();

  // Navigate handler function
  const handleNavClick = (path) => {
    navigate(path);
  };
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [_, setIsSubmitting] = useState(false); //isSubmitting

  const Access_KEY = "d16f0bec-44b1-4c37-8c33-4d264b2b50a2";

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin color="#0A66C2" />,
      username: "Apurba (apurba) Dutta",
      url: "https://www.linkedin.com/in/apurba-dutta-079230240/",
    },
    {
      name: "GitHub",
      icon: <FaGithub color="#ffffff" />,
      username: "apurba2099",
      url: "https://github.com/apurba2099",
    },
    {
      name: "Twitter",
      icon: <SiX color="#ffffffff" />,
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

  // ✅ Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Submit form to Web3Forms
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: Access_KEY,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // ✅ Show your custom success box
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        // Hide it after 5s
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error(`An error occurred. Please try again. ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-header">
          <a className="back-btn" onClick={() => handleNavClick("/")}>
            <i className="fa-solid fa-arrow-left"></i>
          </a>
          <h2>
            Contact Me <i className="fa-regular fa-message"></i>
          </h2>
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
        <h2>
          Touch with me on social media <i className="fa-solid fa-message"></i>
        </h2>
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
            <i className="fa fa-envelope"></i> APURBADUTTA2099@GMAIL.COM
          </a>
          <h2>&lt;Apurba Dutta /&gt;</h2>
          <a href="https://apurbadutta.lol" target="_blank">
            &#128279; APURBAD-PORTFOLIO
          </a>
        </div>
      </section>

      {/* Resume Section */}
      <section className="resume-section">
        <a className="resume-btn" href="./ApurbaDutta_Resume.pdf" download="ApurbaDutta_Resume.pdf">
          <i className="fa-solid fa-download"></i>Download My CV
        </a>
      </section>

      {/* Toaster Section  */}
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
