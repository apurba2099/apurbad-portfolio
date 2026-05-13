import { useNavigate, useLocation } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="bottom-nav">
      {/* Home */}
      <button
        className={`nav-item tooltip ${currentPath === "/" ? "active" : ""}`}
        onClick={() => navigate("/")}
        aria-label="Home"
      >
        <i className="fa-solid fa-house"></i>
        <span className="tooltip-text">Home</span>
      </button>

      {/* Projects */}
      <button
        className={`nav-item tooltip ${currentPath === "/project" ? "active" : ""}`}
        onClick={() => navigate("/project")}
        aria-label="Projects"
      >
        <i className="fa-solid fa-screwdriver-wrench"></i>
        <span className="tooltip-text">Projects</span>
      </button>

      {/* Contact */}
      <button
        className={`nav-item tooltip ${currentPath === "/contact" ? "active" : ""}`}
        onClick={() => navigate("/contact")}
        aria-label="Contact"
      >
        <i className="fa-solid fa-envelopes-bulk"></i>
        <span className="tooltip-text">Contact</span>
      </button>

      {/* Archive */}
      <button
        className={`nav-item tooltip ${currentPath === "/archive" ? "active" : ""}`}
        onClick={() => navigate("/archive")}
        aria-label="Archive"
      >
        <i className="fa-solid fa-box-archive"></i>
        <span className="tooltip-text">Archive</span>
      </button>

      {/* Guestbook */}
      <button
        className={`nav-item tooltip ${currentPath === "/guestbook" ? "active" : ""}`}
        onClick={() => navigate("/guestbook")}
        aria-label="Guestbook"
      >
        <i className="fa-solid fa-book-open"></i>
        <span className="tooltip-text">Guestbook</span>
      </button>
    </nav>
  );
}
