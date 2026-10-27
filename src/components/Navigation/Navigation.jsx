import { useNavigate, useLocation } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav aria-label="Primary" className="ref-nav-dock">
      {/* Home */}
      <button
        type="button"
        className={`ref-nav-btn ${currentPath === "/" ? "active" : ""}`}
        onClick={() => navigate("/")}
        aria-label="Home"
      >
        <span className="ref-nav-tooltip">Home</span>
        <span className="ref-nav-icon-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
        </span>
      </button>

      {/* Projects */}
      <button
        type="button"
        className={`ref-nav-btn ${currentPath === "/project" ? "active" : ""}`}
        onClick={() => navigate("/project")}
        aria-label="Projects"
      >
        <span className="ref-nav-tooltip">Projects</span>
        <span className="ref-nav-icon-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </svg>
        </span>
      </button>

      {/* Contact */}
      <button
        type="button"
        className={`ref-nav-btn ${currentPath === "/contact" ? "active" : ""}`}
        onClick={() => navigate("/contact")}
        aria-label="Contact"
      >
        <span className="ref-nav-tooltip">Contact</span>
        <span className="ref-nav-icon-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
          </svg>
        </span>
      </button>

      {/* Archive */}
      <button
        type="button"
        className={`ref-nav-btn ${currentPath.startsWith("/archive") ? "active" : ""}`}
        onClick={() => navigate("/archive")}
        aria-label="Archive"
      >
        <span className="ref-nav-tooltip">Archive</span>
        <span className="ref-nav-icon-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="21 8 21 21 3 21 3 8"></polyline>
            <rect x="1" y="3" width="22" height="5"></rect>
            <line x1="10" y1="12" x2="14" y2="12"></line>
          </svg>
        </span>
      </button>

      {/* Guestbook */}
      <button
        type="button"
        className={`ref-nav-btn ${currentPath === "/guestbook" ? "active" : ""}`}
        onClick={() => navigate("/guestbook")}
        aria-label="Guestbook"
      >
        <span className="ref-nav-tooltip">Guestbook</span>
        <span className="ref-nav-icon-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
            <path d="M6 6h10"></path>
            <path d="M6 10h10"></path>
          </svg>
        </span>
      </button>
    </nav>
  );
}
