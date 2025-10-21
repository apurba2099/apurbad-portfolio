import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navigation.css";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [_, setActiveTooltip] = useState(null); //activeTooltip

  // detect active route automatically
  const currentPath = location.pathname;

  const handleNavClick = (path, index) => {
    // Check if on mobile/touch device
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      // Show tooltip immediately
      setActiveTooltip(index);

      // Navigate after a short delay (600ms to see tooltip)
      setTimeout(() => {
        setActiveTooltip(null);
        navigate(path);
      }, 500);
    } else {
      // Desktop: navigate immediately
      navigate(path);
    }
  };

  return (
    <nav className="bottom-nav">
      {/* Home */}
      <button
        className={`nav-item tooltip ${currentPath === "/" ? "active" : ""}`}
        onClick={() => handleNavClick("/", 0)}
      >
        <i className="fa-solid fa-house"></i>
        <span className="tooltip-text">Home</span>
      </button>

      {/* Projects */}
      <button
        className={`nav-item tooltip ${
          currentPath === "/project" ? "active" : ""
        }`}
        onClick={() => handleNavClick("/project", 1)}
      >
        <i className="fa-solid fa-screwdriver-wrench"></i>
        <span className="tooltip-text">Projects</span>
      </button>

      {/* Contact */}
      <button
        className={`nav-item tooltip ${
          currentPath === "/contact" ? "active" : ""
        }`}
        onClick={() => handleNavClick("/contact", 2)}
      >
        <i className="fa-solid fa-envelopes-bulk"></i>
        <span className="tooltip-text">Contact</span>
      </button>

      {/* Archive */}
      <button
        className={`nav-item tooltip ${
          currentPath === "/archive" ? "active" : ""
        }`}
        onClick={() => handleNavClick("/archive", 3)}
      >
        <i className="fa-solid fa-box-archive"></i>
        <span className="tooltip-text">Archive</span>
      </button>
    </nav>
  );
}
