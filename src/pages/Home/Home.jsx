import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import profileImage from "../../assets/images/profile.jpg";
import coverPhoto from "../../assets/images/cover-photo.png";
import project_10 from "../../assets/images/project-10.png";
import project_11 from "../../assets/images/project-11.png";
import project_3 from "../../assets/images/project-3.png";
import project_1 from "../../assets/images/project-1.png";
import Exp_1 from "../../assets/images/exp_1_dts.png";
import Exp_2 from "../../assets/images/exp_2_cloud_cad.png";
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
  FaInstagram,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiC,
  SiX,
  SiDocker,
} from "react-icons/si";
import "./Home.css";

// ─── GHL LOGO COMPONENT ─────────────────────────────────────────────────────
const GHLIcon = () => (
  <img
    src="https://i.ibb.co/PvWhbdKN/ghl.jpg"
    alt="GHL"
    width="24"
    height="24"
    style={{ borderRadius: "4px", objectFit: "contain", display: "block" }}
  />
);

// ─── TECH STACK DATA ────────────────────────────────────────────────────────
const techStack = [
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "React.js", icon: <FaReact color="#61DAFB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
  { name: "Express.js", icon: <SiExpress color="#888" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
  { name: "Docker CLI", icon: <SiDocker color="#2496ED" /> },
  { name: "GHL Automation", icon: <GHLIcon /> },
  { name: "GHL Pipeline", icon: <GHLIcon /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "SQL", icon: <FaDatabase color="#336791" /> },
  { name: "Git", icon: <FaGitAlt color="#F05033" /> },
  { name: "GitHub", icon: <FaGithub /> },
];

// ─── FEATURED PROJECTS (2x2 Grid like aksn.fun) ────────────────────────────
const featuredProjects = [
  {
    id: 1,
    title: "BhaiLog Chat App",
    category: "Full Stack App",
    description:
      "A real-time chat application where users can connect, send messages, and share media with instant synchronization.",
    backgroundImage: project_10,
    liveLink: "https://bhai-log.vercel.app/",
  },
  {
    id: 12,
    title: "Doctor Appointment System",
    category: "Healthcare Platform",
    description:
      "Role-based healthcare appointment booking and patient schedule management system.",
    backgroundImage: project_11,
    liveLink: "https://doctor-appointment-apd.vercel.app/",
  },
  {
    id: 3,
    title: "MUTE MARKETING",
    category: "Agency Website",
    description:
      "A high-converting digital marketing agency showcase with client work and lead flows.",
    backgroundImage: project_3,
    liveLink: "https://mutemarketing.com/",
  },
  {
    id: 2,
    title: "Pizzape",
    category: "Web Application",
    description:
      "Interactive food ordering application with customizable cart, real-time checkout, and responsive design.",
    backgroundImage: project_1,
    liveLink: "https://pizzape.vercel.app/",
  },
];

// ─── CONNECT LINKS ──────────────────────────────────────────────────────────
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

export default function Home() {
  const navigate = useNavigate();
  usePageTitle(null);

  return (
    <div className="home-container">
      {/* ── HERO HEADER (Title + Avatar with original cover background) ── */}
      <header className="hero-header">
        <img
          src={coverPhoto}
          alt=""
          className="hero-banner-bg"
          aria-hidden="true"
        />
        <div className="hero-banner-overlay"></div>
        <div className="hero-header-content">
          <div className="hero-intro-text">
            <h1 className="hero-name font-serif">Apurba Dutta</h1>
            <p className="subtitle hero-subtitle">
              Full Stack Developer | Building cool web apps :)
            </p>
          </div>
          <div className="hero-avatar-wrap">
            <img
              src={profileImage}
              alt="Apurba Dutta"
              className="hero-avatar"
              width="104"
              height="104"
              loading="eager"
              decoding="async"
            />
            <span
              className="hero-online-indicator"
              title="Available for work"
              aria-label="Online status: Available for work"
            ></span>
          </div>
        </div>
      </header>

      {/* ── ABOUT SECTION ── */}
      <section className="page-section">
        <h2 className="section-heading">About</h2>
        <p className="about-lead">
          A passionate full-stack developer who lives in code and terminal crafting modern, performant web applications.
        </p>
        <p className="about-secondary subtitle">
          I build full-stack web platforms, design intuitive interfaces, and automate business workflows. With hands-on experience in{" "}
          <span className="font-semibold text-highlight">React, Node.js, Express</span>, and{" "}
          <span className="font-semibold text-highlight">MongoDB</span>, I create products that are reliable, responsive, and a pleasure to use.
        </p>
      </section>

      {/* ── CONNECT SECTION ── */}
      <section className="page-section">
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

      {/* ── WORK EXPERIENCE ── */}
      <section className="page-section">
        <h2 className="section-heading">Experience</h2>
        <div className="experience-list">
          {/* DTS */}
          <div className="exp-card card-hover">
            <div className="exp-logo-wrap">
              <img src={Exp_1} alt="Dynamic Pro Technology Solutions" className="exp-logo" width="36" height="36" loading="lazy" />
            </div>
            <div className="exp-body">
              <div className="exp-top-row">
                <span className="exp-company">Dynamic Pro Technology Solutions</span>
                <span className="exp-status-badge">
                  <span className="exp-pulse-dot"></span>
                  Present
                </span>
              </div>
              <div className="exp-role-row">
                <span className="exp-role">Jr. Software Developer</span>
                <span className="exp-timeline">Apr 2025 – Present</span>
              </div>
              <p className="exp-desc subtitle">
                Building custom automation funnels, AI integrations, and responsive React frontend applications.
              </p>
              <div className="exp-tag-group">
                <span className="tag-badge">React Js</span>
                <span className="tag-badge">Automation</span>
                <span className="tag-badge">GHL</span>
              </div>
            </div>
          </div>

          {/* Cloud Cad AI */}
          <div className="exp-card card-hover">
            <div className="exp-logo-wrap">
              <img src={Exp_2} alt="Cloud Cad AI" className="exp-logo" width="36" height="36" loading="lazy" />
            </div>
            <div className="exp-body">
              <div className="exp-top-row">
                <span className="exp-company">Cloud Cad AI</span>
                <span className="exp-status-badge">
                  <span className="exp-pulse-dot"></span>
                  Present
                </span>
              </div>
              <div className="exp-role-row">
                <span className="exp-role">Jr. Software Engineering Intern</span>
                <span className="exp-timeline">Jun 2026 – Present</span>
              </div>
              <p className="exp-desc subtitle">
                Working on modern web architectures, Supabase backend integrations, and UI components.
              </p>
              <div className="exp-tag-group">
                <span className="tag-badge">React Js</span>
                <span className="tag-badge">Supabase</span>
                <span className="tag-badge">WordPress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="page-section">
        <h2 className="section-heading">Tech Stack</h2>
        <div className="tech-stack-grid">
          {techStack.map((tech) => (
            <div key={tech.name} className="tech-card card-hover">
              <div className="tech-icon-wrap">{tech.icon}</div>
              <span className="tech-label">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS (aksn.fun style cards) ── */}
      <section className="page-section">
        <h2 className="section-heading">Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <a
              key={project.id}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ref-project-card card-hover"
            >
              <div className="ref-project-thumb">
                <img
                  src={project.backgroundImage}
                  alt={project.title}
                  className="ref-thumb-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="ref-project-header">
                <span className="ref-project-title">{project.title}</span>
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
                  className="ref-project-arrow"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </div>
              <p className="ref-project-cat">{project.category}</p>
              <p className="ref-project-desc">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ── FINDING SOMETHING ELSE? (Footer link) ── */}
      <section className="page-section" style={{ marginTop: "3.5rem" }}>
        <h2 className="section-heading no-dot">Finding Something Else?</h2>
        <p className="finding-links">
          Check out my{" "}
          <button
            type="button"
            className="link-accent link-btn"
            onClick={() => navigate("/project")}
          >
            <span>Projects</span>
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
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </button>
          , browse the{" "}
          <button
            type="button"
            className="link-accent link-btn"
            onClick={() => navigate("/archive")}
          >
            <span>Archive</span>
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
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </button>
          , or leave a note on the{" "}
          <button
            type="button"
            className="link-accent link-btn"
            onClick={() => navigate("/guestbook")}
          >
            <span>Guestbook</span>
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
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </button>
          .
        </p>
      </section>
    </div>
  );
}
