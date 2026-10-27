import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import "./Project.css";

import project_1 from "../../assets/images/project-1.png";
import project_2 from "../../assets/images/project-2.png";
import project_3 from "../../assets/images/project-3.png";
import project_4 from "../../assets/images/project-4.png";
import project_5 from "../../assets/images/project-5.png";
import project_6 from "../../assets/images/project-6.png";
import project_7 from "../../assets/images/project-7.png";
import project_8 from "../../assets/images/project-8.png";
import project_9 from "../../assets/images/project-9.png";
import project_10 from "../../assets/images/project-10.png";
import project_11 from "../../assets/images/project-11.png";

const projects = [
  {
    id: 10,
    title: "BhaiLog Chat App",
    category: "Chat Application",
    type: "personal-project",
    description:
      "A real-time chat application where users can connect, send messages, and share media instantly from anywhere with a smooth and simple login experience.",
    backgroundImage: project_10,
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.io",
      "Multer",
      "Cloudinary",
    ],
    liveLink: "https://bhai-log.vercel.app/",
    githubLink: "https://github.com/apurba2099/bhai-log",
  },
  {
    id: 11,
    title: "Doctor Appointment System",
    category: "Healthcare Application",
    type: "personal-project",
    description:
      "A role-based doctor appointment system with separate interfaces for patients and pharmacy administrators. Patients can search and book doctors based on their location, while pharmacy admins can efficiently manage and schedule patient appointments with doctors in their local network.",
    backgroundImage: project_11,
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    liveLink: "https://doctor-appointment-apd.vercel.app/",
    githubLink: "https://github.com/apurba2099/doctor-appointment",
  },
  {
    id: 1,
    title: "Pizzape",
    category: "Pizza Ordering Website",
    type: "personal-project",
    description:
      "An online Pizza ordering website where users can browse menus and place pizza orders easily.",
    backgroundImage: project_1,
    techStack: ["React Js", "Tailwind CSS", "API"],
    liveLink: "https://pizzape.vercel.app/",
    githubLink: "https://github.com/apurba2099/Pizzape",
  },
  {
    id: 2,
    title: "AdminLTE",
    category: "CRUD App",
    type: "personal-project",
    description:
      "A CRUD-based admin dashboard for managing users — login, add data, update data, delete data.",
    backgroundImage: project_2,
    techStack: ["React Js", "CSS", "Node Js", "Express Js", "MongoDB", "Postman"],
    liveLink: "https://admin-lte-app.vercel.app/",
    githubLink: "https://github.com/apurba2099/AdminLTE_application",
  },
  {
    id: 3,
    title: "MUTE MARKETING",
    category: "Digital Marketing Agency",
    type: "client-project",
    description:
      "A digital marketing agency website designed to showcase services and client success stories.",
    backgroundImage: project_3,
    techStack: ["React Js", "CSS", "WEB3 Form API"],
    liveLink: "https://mutemarketing.com/",
    githubLink: "https://github.com/apurba2099/mute-market-v2",
  },
  {
    id: 4,
    title: "RateIt",
    category: "Movie Search & Rating App",
    type: "personal-project",
    description:
      "A movie rating app where users can search films, view IMDB-based details, rate and bookmark watched movies.",
    backgroundImage: project_4,
    techStack: ["React Js", "CSS", "IMDB API"],
    liveLink: "https://rate-it-apd.vercel.app/",
    githubLink: "https://github.com/apurba2099/rate-it",
  },
  {
    id: 5,
    title: "Forkify",
    category: "Food Recipe App",
    type: "personal-project",
    description:
      "A recipe app that lets users search, view, and bookmark food recipes using an open API.",
    backgroundImage: project_5,
    techStack: ["HTML", "CSS", "JavaScript", "API", "MVC Architecture"],
    liveLink: "https://apurba-forkifyrest.netlify.app/",
    githubLink: "https://github.com/apurba2099/Forkify",
  },
  {
    id: 6,
    title: "Billbuddies",
    category: "Bill Sharing Web-App",
    type: "personal-project",
    description:
      "A simple bill-sharing web app that helps friends split expenses easily.",
    backgroundImage: project_6,
    techStack: ["React Js", "CSS"],
    liveLink: "https://bill-buddies-apd.vercel.app/",
    githubLink: "https://github.com/apurba2099/bill-buddies",
  },
  {
    id: 7,
    title: "Guessing Game",
    category: "Game",
    type: "personal-project",
    description:
      "A fun number guessing game — great for quick entertainment and core JavaScript practice.",
    backgroundImage: project_7,
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    liveLink: "https://apurba2099.github.io/Tailwind-Guessing-Game/",
    githubLink: "https://github.com/apurba2099/Tailwind-Guessing-Game",
  },
  {
    id: 8,
    title: "Karmbhumi.fun",
    category: "Education & Social Welfare",
    type: "client-project",
    description:
      "An Indian Government Jobs prep portal and social welfare platform built to promote learning and community initiatives.",
    backgroundImage: project_8,
    techStack: ["HTML", "CSS", "CMS Software"],
    liveLink: "https://karmbhumi.fun/",
    githubLink: "https://github.com/apurba2099/karmbhumi",
  },
  {
    id: 9,
    title: "Electrodex Lab",
    category: "Corporate & Manufacturing",
    type: "client-project",
    description:
      "A professional corporate showcase for an established engineering and manufacturing company, highlighting product catalogs and client inquiries.",
    backgroundImage: project_9,
    techStack: ["React Js", "Tailwind CSS", "Node Js"],
    liveLink: "https://electrodexlab.in/",
    githubLink: "https://github.com/apurba2099/electrodex-lab",
  },
];

export default function Project() {
  const navigate = useNavigate();
  usePageTitle("Projects");

  const regularProjects = projects.filter((p) => p.type !== "client-project");
  const clientProjects = projects.filter((p) => p.type === "client-project");

  const renderProjectCard = (project) => (
    <div key={project.id} className="ref-project-card card-hover">
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
        <div className="ref-project-links">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-ext-icon"
              title="Source Code"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <i className="fa-brands fa-github"></i>
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-ext-icon"
              title="Live Demo"
              aria-label={`Visit ${project.title} live demo`}
            >
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
            </a>
          )}
        </div>
      </div>
      <div className="project-category-row">
        <span className="project-category-badge">{project.category}</span>
      </div>
      <p className="ref-project-desc">{project.description}</p>
      {project.techStack && (
        <div className="project-tags-wrap">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag-badge">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="projects-page-container">
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
        <h1 className="section-heading !mb-0">Projects</h1>
      </div>

      {/* Regular Projects Section */}
      <section className="projects-subsection">
        <div className="projects-grid">
          {regularProjects.map(renderProjectCard)}
        </div>
      </section>

      {/* Client Projects Subsection */}
      {clientProjects.length > 0 && (
        <section className="projects-subsection client-projects-section">
          <div className="subsection-header">
            <h2 className="section-heading subsection-heading">
              Client Projects
            </h2>
          </div>
          <div className="projects-grid">
            {clientProjects.map(renderProjectCard)}
          </div>
        </section>
      )}
    </div>
  );
}
