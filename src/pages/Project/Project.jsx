import "./Project.css";
import { useNavigate } from "react-router-dom";

import project_1 from "..//../assets/images/project-1.png";
import project_2 from "..//../assets/images/project-2.png";
import project_3 from "..//../assets/images/project-3.png";
import project_4 from "..//../assets/images/project-4.png";
import project_5 from "..//../assets/images/project-5.png";
import project_6 from "..//../assets/images/project-6.png";
import project_7 from "..//../assets/images/project-7.png";
import project_8 from "..//../assets/images/project-8.png";
import project_9 from "..//../assets/images/project-9.png";
import project_10 from "..//../assets/images/project-10.png";

// ─── DATA ────────────────────────────────────────────────────────────────────
// To add a new project: just add an entry to this array.
// Set type: "client-project" to categorise under Client Projects.

const projects = [
  {
    id: 1,
    title: "Pizzape",
    description:
      "An online Pizza ordering website where users can browse menus and place pizza orders easily.",
    backgroundImage: project_1,
    type: "Pizza Ordering Website",
    class: "Pizza Ordering Website",
    color: "#facc15",
    techStack: ["React Js", "Tailwind CSS", "API"],
    liveLink: "https://pizzape.vercel.app/",
    githubLink: "https://github.com/apurba2099/Pizzape",
  },
  {
    id: 2,
    title: "AdminLTE",
    description:
      "A CRUD-based admin dashboard for managing users — login, add data, update data, delete data.",
    backgroundImage: project_2,
    type: "CRUD App",
    class: "CRUD App",
    color: "#4f46e5",
    techStack: [
      "React Js",
      "CSS",
      "Node Js",
      "Express Js",
      "MongoDB",
      "Postman",
    ],
    liveLink: "https://admin-lte-app.vercel.app/",
    githubLink: "https://github.com/apurba2099/AdminLTE_application",
  },
  {
    id: 3,
    title: "MUTE MARKETING",
    description:
      "A digital marketing agency website designed to showcase services and client success stories.",
    backgroundImage: project_3,
    type: "client-project",
    class: "Digital Marketing Agency",
    color: "#f1e504",
    techStack: ["React Js", "CSS", "WEB3 Form API"],
    liveLink: "https://mutemarketing.com/",
    githubLink: "https://github.com/apurba2099/mute-market-v2",
  },
  {
    id: 4,
    title: "RateIt",
    description:
      "A movie rating app where users can search films, view IMDB-based details, rate and bookmark watched movies.",
    backgroundImage: project_4,
    type: "Movie Search & Rating App",
    class: "Movie Search & Rating App",
    color: "#ffff8b",
    techStack: ["React Js", "CSS", "IMDB API"],
    liveLink: "https://rate-it-apd.vercel.app/",
    githubLink: "https://github.com/apurba2099/rate-it",
  },
  {
    id: 5,
    title: "Forkify",
    description:
      "A recipe app that lets users search, view, and bookmark food recipes using an open API.",
    backgroundImage: project_5,
    type: "Food Recipe App",
    class: "Food Recipe App",
    color: "#f6c686",
    techStack: ["HTML", "CSS", "JavaScript", "API", "MVC Architecture"],
    liveLink: "https://apurba-forkifyrest.netlify.app/",
    githubLink: "https://github.com/apurba2099/Forkify",
  },
  {
    id: 6,
    title: "Billbuddies",
    description:
      "A simple bill-sharing web app that helps friends split expenses easily.",
    backgroundImage: project_6,
    type: "Bill Sharing Web-App",
    class: "Bill Sharing Web-App",
    color: "#ff763d",
    techStack: ["React Js", "CSS"],
    liveLink: "https://bill-buddies-apd.vercel.app/",
    githubLink: "https://github.com/apurba2099/bill-buddies",
  },
  {
    id: 7,
    title: "Guessing Game",
    description:
      "A fun number guessing game — great for quick entertainment and core JavaScript practice.",
    backgroundImage: project_7,
    type: "Game",
    class: "Game",
    color: "#3b82f6",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    liveLink: "https://apurba2099.github.io/Tailwind-Guessing-Game/",
    githubLink: "https://github.com/apurba2099/Tailwind-Guessing-Game",
  },
  {
    id: 8,
    title: "Karmbhumi.fun",
    description:
      "An Indian Government Jobs prep portal and social welfare platform built to promote learning and community initiatives.",
    backgroundImage: project_8,
    type: "client-project",
    class: "Education & Social Welfare",
    color: "#2a9407",
    techStack: ["HTML", "CSS", "CMS Software"],
    liveLink: "https://karmbhumi.fun/",
    githubLink: "https://github.com/apurba2099/karmbhumi",
  },
  {
    id: 9,
    title: "Electrodex Lab",
    description:
      "A professional website for a 3D printing startup highlighting products and services in West Bengal, Kalna.",
    backgroundImage: project_9,
    type: "client-project",
    class: "3D Printing Start-up",
    color: "#ff763d",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    liveLink: "https://electrodex-lab.vercel.app/",
    githubLink: "https://github.com/apurba2099/electrodex-lab",
  },
  {
    id: 10,
    title: "BhaiLog Chat App",
    description:
      "A real-time chat application built using the MERN stack, enabling seamless communication with instant messaging, media sharing, and smooth authentication for users across devices.",
    backgroundImage: project_10,
    type: "personal-project",
    class: "Chat Application",
    color: "#4f46e5",
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.io",
      "Multer",
      "Cloudinary",
    ],
    liveLink: "https://bhai-log.vercel.app/login",
    githubLink: "https://github.com/apurba2099/bhai-log",
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Project() {
  const navigate = useNavigate();

  // Split by type
  const personalProjects = projects.filter((p) => p.type !== "client-project");
  const clientProjects = projects.filter((p) => p.type === "client-project");

  const renderProjectCard = (project) => (
    <div key={project.id} className="project-card">
      <div className="project-preview">
        <div className="project-overlay"></div>
        <img src={project.backgroundImage} alt={project.title} loading="lazy" />
      </div>

      <div className="project-info">
        <div className="project-title-row">
          <p className="project-name">{project.title}</p>
          <div className="project-action-links">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link"
              title="Live Demo"
              aria-label={`Open ${project.title} live demo`}
            >
              <i className="fa fa-external-link"></i>
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link"
              title="GitHub Repository"
              aria-label={`View ${project.title} on GitHub`}
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
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

        <div className="tech-stack">
          <p className="tech-stack-name">
            <i className="fa-solid fa-code"></i> Tech •
          </p>
          {project.techStack &&
            project.techStack.map((tech, i) => (
              <span
                key={i}
                className="tech-stack-type"
                style={{
                  border: `1px solid ${project.color}`,
                  color: project.color,
                }}
              >
                {tech}
              </span>
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="project">
      <section id="project" className="project-section">
        <div className="project-header">
          <button
            className="back-btn"
            onClick={() => navigate("/")}
            aria-label="Go back home"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <h2>
            Projects <i className="fa-solid fa-gears"></i>
          </h2>
        </div>

        {/* Personal Projects */}
        {personalProjects.length > 0 && (
          <div className="project-category">
            <h3 className="category-title">
              <i className="fa-solid fa-person-walking-arrow-right"></i>
              Personal Projects
            </h3>
            <div className="projects-grid">
              {personalProjects.map(renderProjectCard)}
            </div>
          </div>
        )}

        {/* Client Projects */}
        {clientProjects.length > 0 && (
          <div className="project-category">
            <h3 className="category-title">
              <i className="fa-solid fa-briefcase"></i>
              Client Projects
            </h3>
            <div className="projects-grid">
              {clientProjects.map(renderProjectCard)}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
