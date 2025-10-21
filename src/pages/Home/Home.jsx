import profileImage from "..//../assets/images/profile.jpg";
import project_1 from "..//../assets/images/project-1.png";
import project_2 from "..//../assets/images/project-2.png";
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

export default function Portfolio() {
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
      description:
        "An online Pizza ordering website where users can browse menus and place pizza orders easily.",
      backgroundImage: project_1,
      type: "Piiza Ordering Website",
      class: "Pizza Ordering Website",
      color: "#facc15",
      liveLink: "https://pizzape.vercel.app/",
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
      liveLink: "https://admin-lte-app.vercel.app/",
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
      liveLink: "https://mute-market-v2.vercel.app/",
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
      icon: <SiX color="#ffffffff" />,
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
      icon: <FaDiscord color="#5132edff" />,
      username: "apurba_2003",
      url: "https://discordapp.com/users/1144705121385713816",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">Hey 👋 I am</p>
            <h1 className="name">Apurba Dutta</h1>
            <p className="title">&lt;Web Developer/&gt;</p>
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
                    <a href={project.liveLink}>
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
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
                  <strong> {project.class}</strong>
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
        <h2>
          Find Me Here <i className="fa-solid fa-magnifying-glass"></i>
        </h2>
        <div className="social-grid">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} className="social-card">
              <div className="social-icon">{social.icon}</div>
              <p className="social-username">{social.username}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
