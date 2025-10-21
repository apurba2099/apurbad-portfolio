import "./Project.css";
import Navigation from "../../components/Navigation/Navigation";

import project_1 from "..//../assets/images/project-1.png";
import project_2 from "..//../assets/images/project-2.png";
import project_3 from "..//../assets/images/project-3.png";
export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Pizzape",
      description: "Full-stack e-commerce application with payment integration",
      backgroundImage: project_1,
      type: "Food Website",
      color: "#facc15",
    },
    {
      id: 2,
      title: "AdminLTE",
      description: "Productivity app with real-time collaboration features",
      backgroundImage: project_2,
      type: "CRUD APP",
      color: "#4f46e5",
    },
    {
      id: 3,
      title: "MUTE MARKETING",
      description: "Interactive weather app with beautiful data visualization",
      backgroundImage: project_3,
      type: "Client-Project",
      color: "#f1e504",
    },
    {
      id: 4,
      title: "Karm Bhumi",
      description: "Interactive weather app with beautiful data visualization",
      backgroundImage: project_3,
      type: "Client-Project",
      color: "#51b563",
      liveLink: "https://karmbhumi.fun/",
      githubLink: "https://github.com/apurba2099/mute-marketing",
    },
    {
      id: 5,
      title: "RateIt",
      description: "Interactive weather app with beautiful data visualization",
      backgroundImage: project_3,
      type: "Movie Rating Website",
      color: "#2a9407ff",
      liveLink: "https://karmbhumi.fun/",
      githubLink: "https://github.com/apurba2099/rate-it",
    },
    {
      id: 6,
      title: "Electrodex Lab",
      description: "Interactive weather app with beautiful data visualization",
      backgroundImage: project_3,
      type: "Client-Project",
      color: "#ff763d",
      liveLink: "https://karmbhumi.fun/",
      githubLink: "https://github.com/apurba2099/electrodex-lab",
    },
    {
      id: 7,
      title: "Forkify",
      description: "Interactive weather app with beautiful data visualization",
      backgroundImage: project_3,
      type: "Recipe Web App",
      color: "#f6c686",
      liveLink: "https://tip-calculator-apd.vercel.app/",
      githubLink: "https://github.com/apurba2099/Forkify",
    },
    {
      id: 8,
      title: "Tip Calculator",
      description: "Interactive weather app with beautiful data visualization",
      backgroundImage: project_3,
      type: "Calculator App",
      color: "#ffff8b",
      liveLink: "https://tip-calculator-apd.vercel.app/",
      githubLink: "https://github.com/apurba2099/tip-calculator",
    },
    {
      id: 8,
      title: "Guessing Game",
      description: "Interactive weather app with beautiful data visualization",
      backgroundImage: project_3,
      type: "Game",
      color: "#3b82f6",
      liveLink: "https://tip-calculator-apd.vercel.app/",
      githubLink: "https://github.com/apurba2099/Tailwind-Guessing-Game",
    },
  ];

  // Separate projects based on type
  const personalProjects = projects.filter(
    (project) => project.type !== "Client-Project"
  );
  const clientProjects = projects.filter(
    (project) => project.type === "Client-Project"
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
          <strong>{project.type}</strong>
        </span>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );

  return (
    <div className="project">
      {/* Project Section */}
      <section id="project" className="project-section">
        <div className="project-header">
          <a className="back-btn">
            <i className="fa-solid fa-arrow-left"></i>
          </a>
          <h2>
            Projects <i class="fa-solid fa-gears"></i>
          </h2>
        </div>

        {/* Personal Projects Section */}
        {personalProjects.length > 0 && (
          <div className="project-category">
            <h3 className="category-title">
              Personal Projects<i class="fa-solid fa-gear-complex-code"></i>
              <i class="fa-solid fa-person-walking-arrow-right"></i>
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
              Client Projects <i class="fa-solid fa-briefcase"></i>
            </h3>
            <div className="projects-grid">
              {clientProjects.map(renderProjectCard)}
            </div>
          </div>
        )}
      </section>

      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
}
