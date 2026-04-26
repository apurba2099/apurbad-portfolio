import { useNavigate } from "react-router-dom";
import profileImage from "..//../assets/images/profile.jpg";
import project_10 from "..//../assets/images/project-10.png";
import project_11 from "..//../assets/images/project-11.png";
import project_3 from "..//../assets/images/project-3.png";
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
} from "react-icons/si";
import "./Home.css";

// ─── DATA ────────────────────────────────────────────────────────────────────

// GHL logo icon — uses actual GoHighLevel logo, sized to 22×22px
const GHLIcon = () => (
  <img
    src="https://i.ibb.co/PvWhbdKN/ghl.jpg"
    alt="GHL"
    width="22"
    height="22"
    style={{ borderRadius: "4px", objectFit: "contain", display: "block" }}
  />
);

const techStack = [
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "React.js", icon: <FaReact color="#61DAFB" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
  { name: "Express.js", icon: <SiExpress color="#888" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "C", icon: <SiC color="#00599C" /> },
  { name: "SQL Database", icon: <FaDatabase color="#336791" /> },
  { name: "Git", icon: <FaGitAlt color="#F05033" /> },
  { name: "GitHub", icon: <FaGithub /> },
  // ── GHL (Go High Level) ──────────────────────
  { name: "Funnel", icon: <GHLIcon /> },
  { name: "Pipeline", icon: <GHLIcon /> },
  { name: "Automation", icon: <GHLIcon /> },
  { name: "AI Agents", icon: <GHLIcon /> },
];

// Only 3 featured / recent projects shown on home
const recentProjects = [
  {
    id: 1,
    title: "BhaiLog Chat App",
    description:
      "A real-time chat application where users can connect, send messages, and share media instantly from anywhere with a smooth and simple login experience.",
    backgroundImage: project_10,
    type: "Chat Application",
    class: "Chat Application",
    color: "#4f46e5",
    liveLink: "https://bhai-log.vercel.app/",
  },
  {
    id: 12,
    title: "Doctor Appointment System",
    description:
      "A role-based appointment system where patients can search and book doctors by location, and pharmacy admins can manage and schedule patient appointments efficiently.",
    backgroundImage: project_11,
    type: "personal-project",
    class: "Healthcare Application",
    color: "#0895d9",
    liveLink: "https://doctor-appointment-apd.vercel.app/",
  },
  {
    id: 3,
    title: "MUTE MARKETING",
    description:
      "A digital marketing agency website designed to showcase services and client success stories and portfolio.",
    backgroundImage: project_3,
    type: "Digital Marketing Agency",
    class: "Digital Marketing Agency",
    color: "#f1e504",
    liveLink: "https://mutemarketing.com/",
  },
];

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

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* ── Hero Section ──────────────────────────────────────── */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">Hey 👋 I am</p>
            <h1 className="name">Apurba Dutta</h1>
            <p className="title">&lt;Web Developer /&gt;</p>
          </div>
          <div className="profile-image">
            <img src={profileImage} alt="Apurba Dutta — Web Developer" />
            <span
              className="status-indicator"
              title="Available for work"
            ></span>
          </div>
        </div>
      </section>

      {/* ── Who am I Section ──────────────────────────────────── */}
      <section className="about-section">
        <h2 className="section-heading">Who am I ?</h2>
        <p className="about-text">
          I&apos;m <strong>Apurba Dutta</strong> — a passionate full-stack web
          developer from West Bengal, India. I love crafting beautiful,
          performant web applications that solve real problems. With hands-on
          experience in
          <strong> React, Node.js, Express</strong>, and{" "}
          <strong>MongoDB</strong>, I build complete products from design to
          deployment. <br />
          <br />
          Whether it&apos;s a client landing page, a data-driven dashboard, or
          an e-commerce flow — I bring ideas to life with clean code and an eye
          for detail. I believe great software is not just functional, it&apos;s
          a pleasure to use.
        </p>

        {/* DTS Experience Badge */}
        <div className="experience-badge">
          <span className="badge-dot"></span>
          <span>
            Currently interning at{" "}
            <strong>Dynamic Pro Technology Solutions (DTS)</strong> — my first
            paid internship 🎉
          </span>
        </div>
      </section>

      {/* ── Tech Stack Section ────────────────────────────────── */}
      <section className="tech-section">
        <h2 className="section-heading">Tech Stack &lt;/&gt;</h2>
        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-item">
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Recent Projects Section ───────────────────────────── */}
      <section id="projects" className="projects-section">
        <div className="projects-section-header">
          <h2 className="section-heading" style={{ marginBottom: 0 }}>
            Recent Projects ⚙️
          </h2>
          <button
            className="view-all-link"
            onClick={() => navigate("/project")}
          >
            View all →
          </button>
        </div>

        <div className="projects-grid">
          {recentProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-preview">
                <div className="project-overlay"></div>
                <img src={project.backgroundImage} alt={project.title} />
              </div>
              <div className="project-info">
                <div className="project-links">
                  <p className="project-name">{project.title}</p>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-external-link"
                    title={`Visit ${project.title}`}
                    aria-label={`Open ${project.title} live demo`}
                  >
                    <i className="fa fa-external-link"></i>
                  </a>
                </div>
                <span
                  className="project-type"
                  style={{
                    color: project.color,
                    border: `1.5px solid ${project.color}`,
                  }}
                >
                  {project.class}
                </span>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Find Me Here Section ──────────────────────────────── */}
      <section className="social-section">
        <h2 className="section-heading">
          Find Me Here{" "}
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ fontSize: "1.1rem" }}
          ></i>
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
    </div>
  );
}
