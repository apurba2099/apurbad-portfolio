import React, { useState } from "react";
import "./home.css";
import profileImage from "../../images/profile.jpg";
import project_1 from "./images/project-1.png";
import project_2 from "./images/project-2.png";
import project_3 from "./images/project-3.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaDatabase,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiC,
} from "react-icons/si";

function Portfolio() {
  const [activeNav, setActiveNav] = useState("home");

  const techStack = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "React.js", icon: <FaReact color="#61DAFB" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
    { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
    { name: "Express.js", icon: <SiExpress color="#ffffffff" /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "C", icon: <SiC color="#00599C" /> },
    { name: "SQL Database", icon: <FaDatabase color="#336791" /> },
    { name: "Git", icon: <FaGitAlt color="#F05033" /> },
    { name: "GitHub", icon: <FaGithub color="#ffffffff" /> },
  ];

  const projects = [
    {
      id: 1,
      title: "Pizzape",
      description: "Full-stack e-commerce application with payment integration",
      backgroundImage: project_1,
      type: "Food Website",
      color: "#ffe100ff",
    },
    {
      id: 2,
      title: "AdminLTE",
      description: "Productivity app with real-time collaboration features",
      backgroundImage: project_2,
      type: "CRUD APP",
      color: "#7c56fe",
    },
    {
      id: 3,
      title: "MUTE MARKETING",
      description: "Interactive weather app with beautiful data visualization",
      backgroundImage: project_3,
      type: "Client-Project",
      color: "#d0ff00ff",
    },
  ];

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

  const handleNavClick = (section) => {
    setActiveNav(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">Hey 👋 I am</p>
            <h1 className="name">Apurba Dutta</h1>
            <p className="title">Web Developer</p>
          </div>
          <div className="profile-image">
            <img src={profileImage} alt="Profile" />
            <span className="status-indicator"></span>
          </div>
        </div>
      </section>

      {/* Who am I Section */}
      <section className="about-section">
        <h2>Who am I ?</h2>
        <p className="about-text">
          Web developer passionate about building beautiful and functional web
          applications. Full-stack developer with experience in modern
          JavaScript frameworks and backend technologies. Now focused on
          creating responsive, user-friendly interfaces and scalable web
          solutions.
        </p>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-section">
        <h2>Tech Stack &lt;/&gt;</h2>
        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-item">
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Projects &#9881;</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-preview">
                <div className="project-overlay">
                  <img src={project.backgroundImage} alt={project.title} />
                </div>
              </div>
              <div className="project-info">
                <div className="project-links">
                  <p
                    style={{ padding: "2px 6px", color: "#fff", margin: "4px" }}
                    className="project-name"
                  >
                    <strong>{project.title}</strong>
                  </p>
                  <span>
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </span>
                </div>
                <span
                  style={{
                    color: project.color,
                    border: `2px solid ${project.color}`,
                    borderRadius: "12px",
                    padding: "2px 6px",
                    margin: "4px",
                  }}
                  className="project-type"
                >
                  <strong> {project.type}</strong>
                </span>
                <p style={{ padding: "2px 6px", margin: "4px" }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Find Me Here Section */}
      <section className="social-section">
        <h2>Find Me Here &#x1F50D;</h2>
        <div className="social-grid">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} className="social-card">
              <div className="social-icon">{social.icon}</div>
              <p className="social-username">{social.username}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button
          className={`nav-item ${activeNav === "home" ? "active" : ""}`}
          onClick={() => handleNavClick("home")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </button>
        <button
          className={`nav-item ${activeNav === "contact" ? "active" : ""}`}
          onClick={() => setActiveNav("contact")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </button>
        <button
          className={`nav-item ${activeNav === "projects" ? "active" : ""}`}
          onClick={() => handleNavClick("projects")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        </button>
        <button
          className={`nav-item ${activeNav === "tools" ? "active" : ""}`}
          onClick={() => setActiveNav("tools")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </button>
        <button
          className={`nav-item ${activeNav === "archive" ? "active" : ""}`}
          onClick={() => setActiveNav("archive")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="21 8 21 21 3 21 3 8" />
            <rect x="1" y="3" width="22" height="5" />
            <line x1="10" y1="12" x2="14" y2="12" />
          </svg>
        </button>
      </nav>
    </div>
  );
}

export default Portfolio;
