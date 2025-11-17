import "./Project.css";

import project_1 from "..//../assets/images/project-1.png";
import project_2 from "..//../assets/images/project-2.png";
import project_3 from "..//../assets/images/project-3.png";
import project_4 from "..//../assets/images/project-4.png";
import project_5 from "..//../assets/images/project-5.png";
import project_6 from "..//../assets/images/project-6.png";
import project_7 from "..//../assets/images/project-7.png";
import project_8 from "..//../assets/images/project-8.png";
import project_9 from "..//../assets/images/project-9.png";

//Routes Import
import { useNavigate } from "react-router-dom";

export default function Project() {
  // Routes
  const navigate = useNavigate();

  //Route Handler Function
  function handleNavClick(path) {
    navigate(path);
  }

  const projects = [
    {
      id: 1,
      title: "Pizzape",
      description:
        "An online Pizza ordering website where users can browse menus and place pizza orders easily.",
      backgroundImage: project_1,
      type: "Piiza Ordering Website",
      class: "Pizza Ordering Website",
      color: "#facc15",
      techStack: ["React Js", "Tailwind Css", "API"],
      liveLink: "https://pizzape.vercel.app/",
      githubLink: "https://github.com/apurba2099/Pizzape",
    },
    {
      id: 2,
      title: "AdminLTE",
      description:
        "A CRUD-based admin dashboard for managing users login, add data, update data, delete data.",
      backgroundImage: project_2,
      type: "CRUD App",
      class: "CRUD App",
      color: "#4f46e5",
      techStack: [
        "React Js",
        "Css",
        "Node Js",
        "Express Js",
        "Mongo DB",
        "Postman",
      ],
      liveLink: "https://admin-lte-app.vercel.app/",
      githubLink: "https://github.com/apurba2099/AdminLTE_application",
    },
    {
      id: 3,
      title: "MUTE MARKETING",
      description:
        "A digital marketing agency website designed to showcase services and client success stories and portfolio.",
      backgroundImage: project_3,
      type: "client-project",
      class: "Digital Marketing Agency",
      color: "#f1e504",
      techStack: ["React Js", "Css", "WEB3 Form API"],
      liveLink: "https://mutemarketing.com/",
      githubLink: "https://github.com/apurba2099/mute-market-v2",
    },
    {
      id: 4,
      title: "RateIt",
      description:
        "A movie rating app where users can search for films and view IMDB rating based details and rated by their own and bookmark they watched movie.",
      backgroundImage: project_4,
      type: "Movie Search & Rating App",
      class: "Movie Search & Rating App",
      color: "#ffff8b",
      techStack: ["React Js", "Css", "IMDB API"],
      liveLink: "https://rate-it-apd.vercel.app/",
      githubLink: "https://github.com/apurba2099/rate-it",
    },
    {
      id: 5,
      title: "Forkify",
      description:
        "A recipe app that lets users search, view, and bookmark food recipes using an API.",
      backgroundImage: project_5,
      type: "Food Recipe App",
      class: "Food Recipe App",
      color: "#f6c686",
      techStack: ["HTML", "Css", "Javascript", "API", "MVC Architecture"],
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
      techStack: ["React Js", "Css"],
      liveLink: "https://bill-buddies-apd.vercel.app/",
      githubLink: "https://github.com/apurba2099/bill-buddies",
    },
    {
      id: 7,
      title: "Guessing Game",
      description:
        "A fun number guessing game built for quick entertainment and JavaScript practice.",
      backgroundImage: project_7,
      type: "Game",
      class: "Game",
      color: "#3b82f6",
      techStack: ["HTML", "Tailwind Css", "Javascript"],
      liveLink: "https://apurba2099.github.io/Tailwind-Guessing-Game/",
      githubLink: "https://github.com/apurba2099/Tailwind-Guessing-Game",
    },
    {
      id: 8,
      title: "Karmbhumi.fun",
      description:
        "An Indian Goverment Jobs preparations portal and social welfare platform built to promote learning and community initiatives.",
      backgroundImage: project_8,
      type: "client-project",
      class: "Education and Social Welfare",
      color: "#2a9407ff",
      techStack: ["HTML", "Css", "CMS Software"],
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
      techStack: ["HTML", "Tailwind Css", "Javascript"],
      liveLink: "https://electrodex-lab.vercel.app/",
      githubLink: "https://github.com/apurba2099/electrodex-lab",
    },
  ];

  // Separate projects based on type
  const personalProjects = projects.filter(
    (project) => project.type !== "client-project"
  );
  const clientProjects = projects.filter(
    (project) => project.type === "client-project"
  );

  // Render project card function
  const renderProjectCard = (project) => (
    <div key={project.id} className="project-card">
      <div className="project-preview">
        <div className="project-overlay">
          <img src={project.backgroundImage} alt={project.title} />
        </div>
      </div>
      <div className="project-info">
        <div className="project-title-row">
          <p className="project-name">
            <strong>{project.title}</strong>
          </p>
          <div className="project-action-links">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link"
              title="Live Demo"
            >
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link"
              title="GitHub"
            >
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <span
          style={{
            color: project.color,
            border: `2px solid ${project.color}`,
          }}
          className="project-type"
        >
          <strong>{project.class}</strong>
        </span>
        <p className="project-description">{project.description}</p>

        {/* --- TECH STACK SECTION --- */}
        <div className="tech-stack">
          <p className="tech-stack-name">
            <strong>
              <i className="fa-solid fa-code"></i> Tech Stack Use &bull;
            </strong>
          </p>
          {project.techStack &&
            project.techStack.map((tech, index) => (
              <span
                key={index}
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
      {/* Project Section */}
      <section id="project" className="project-section">
        <div className="project-header">
          <a className="back-btn" onClick={() => handleNavClick("/")}>
            <i className="fa-solid fa-arrow-left"></i>
          </a>
          <h2>
            Projects <i className="fa-solid fa-gears"></i>
          </h2>
        </div>

        {/* Personal Projects Section */}
        {personalProjects.length > 0 && (
          <div className="project-category">
            <h3 className="category-title">
              Personal Projects<i className="fa-solid fa-gear-complex-code"></i>
              <i className="fa-solid fa-person-walking-arrow-right"></i>
            </h3>
            <div className="projects-grid">
              {personalProjects.map(renderProjectCard)}
            </div>
          </div>
        )}

        {/* Client Projects Section */}
        {clientProjects.length > 0 && (
          <div className="project-category">
            <h3 className="category-title">
              Client Projects <i className="fa-solid fa-briefcase"></i>
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
