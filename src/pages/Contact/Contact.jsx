import { useState } from "react";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const connectLinks = [
  {
    name: "Resume",
    url: "/ApurbaDutta_Resume.pdf",
    download: "ApurbaDutta_Resume.pdf",
    isPrimary: true,
  },
  {
    name: "Github",
    url: "https://github.com/apurba2099",
  },
  {
    name: "Twitter",
    url: "https://x.com/apurbadutta2003",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/apurba-dutta-079230240/",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/apurba2099/",
  },
  {
    name: "Email",
    url: "mailto:contact@apurbadutta.lol",
  },
];

export default function Contact() {
  const navigate = useNavigate();
  usePageTitle("Contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameTrimmed = formData.name.trim();
    const emailTrimmed = formData.email.trim();
    const messageTrimmed = formData.message.trim();

    if (!nameTrimmed || !emailTrimmed || !messageTrimmed) {
      toast.error("Please fill in all fields before sending.");
      return;
    }

    if (isSubmitting) return; // Prevent duplicate submission
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: nameTrimmed,
          email: emailTrimmed,
          message: messageTrimmed,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success(result.message || "Message sent successfully! ✨");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorMsg =
          result.message || "Failed to send message. Please try again.";
        toast.error(errorMsg);
      }
    } catch {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-container">
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Top Header with Back Button */}
      <div className="page-header-row">
        <button
          type="button"
          className="back-icon-btn"
          onClick={() => navigate("/")}
          aria-label="Go back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
        </button>
        <h1 className="section-heading !mb-0">Contact</h1>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="ref-contact-form">
        <div className="form-col">
          <label htmlFor="contact-name" className="form-label">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            className="ref-input"
            placeholder="Your name"
            autoComplete="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        <div className="form-col">
          <label htmlFor="contact-email" className="form-label">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className="ref-input"
            placeholder="you@email.com"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        <div className="form-col-full">
          <label htmlFor="contact-message" className="form-label">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="4"
            className="ref-textarea"
            placeholder="Your message..."
            required
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
          ></textarea>
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="ref-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {/* Connect Section */}
      <section className="page-section" style={{ marginTop: "2rem" }}>
        <h2 className="section-heading">Connect</h2>
        <div className="connect-pills">
          {connectLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              download={item.download || undefined}
              target={item.download ? undefined : "_blank"}
              rel={item.download ? undefined : "noopener noreferrer"}
              className={item.isPrimary ? "pill-btn pill-btn-primary" : "pill-btn pill-btn-secondary"}
            >
              <span>{item.name}</span>
              {item.download ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pill-icon"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pill-icon"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              )}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
