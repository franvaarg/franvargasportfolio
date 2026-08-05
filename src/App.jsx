import { useState } from "react";
import "./styles.css";

const featuredProject = {
  title: "DevOps AI",
  subtitle: "AI-powered log analysis platform",
  image: "/images/devopsai.png",
  description:
    "A production-ready web application that analyzes technical logs, classifies incident severity, identifies likely root causes and generates actionable remediation steps.",
  technologies: [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Gemini AI",
    "Docker",
  ],
  liveUrl: "https://devops-ai-chi.vercel.app",
  videoUrl: "https://youtu.be/-3NAqWHvaA0",
  embedUrl: "https://www.youtube.com/embed/-3NAqWHvaA0",
};

const projects = [
  {
    title: "Pura Fruta Dashboard",
    image: "/images/purafruta.png",
    description:
      "A responsive business dashboard designed to present operational metrics and business data through a clear and modern interface.",
    technologies: ["React", "JavaScript", "Dashboard UI", "Responsive Design"],
    liveUrl: "https://pura-fruta-dashboard.vercel.app",
  },
  {
    title: "SkyCast Weather App",
    image: "/images/skycast.png",
    description:
      "A responsive weather application that consumes the OpenWeather API to display real-time conditions and forecasts.",
    technologies: ["React", "REST API", "CSS", "Vite"],
    liveUrl: "https://weather-app-one-rouge-83.vercel.app",
  },
  {
    title: "Banger Music Blog",
    image: "/images/banger.png",
    description:
      "A music-focused React application built with reusable components and client-side routing.",
    technologies: ["React", "React Router", "Vite"],
    liveUrl: "https://banger-music-blog.vercel.app",
    githubUrl: "https://github.com/franvaarg/Music-blog",
  },
  {
    title: "Hotel Landing Page",
    image: "/images/hotel.png",
    description:
      "A responsive hotel landing page featuring a polished layout and clear visual hierarchy.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://hotel-landing-zeta.vercel.app",
    githubUrl: "https://github.com/franvaarg/hotel-landing",
  },
  {
    title: "Ecommerce Landing",
    image: "/images/store.png",
    description:
      "A modern ecommerce landing page built with reusable sections and responsive design principles.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://franvaarg-ecommerce-landing.vercel.app",
    githubUrl:
      "https://github.com/franvaarg/franvaarg-ecommerce-landing",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
  "Node.js",
  "Express",
  "PostgreSQL",
  "REST APIs",
  "JWT",
  "Docker",
  "Git",
  "Vercel",
  "Render",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site">
      <header className="navbar">
        <a href="#top" className="brand" onClick={closeMenu}>
          Fran Vargas
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              Available for new opportunities
            </div>

            <p className="eyebrow">FRONT-END DEVELOPER</p>

            <h1>
              Building modern web experiences
              <span> powered by AI.</span>
            </h1>

            <p className="hero-description">
              Hi, I’m Fran Vargas. I build responsive web applications with
              React and modern JavaScript while creating AI-powered solutions
              for real-world products.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View projects
              </a>

              <a href="#contact" className="button button-secondary">
                Contact me
              </a>
            </div>

            <div className="hero-details">
              <span>Based in Costa Rica</span>
              <span>English / Spanish</span>
            </div>
          </div>

          <div className="profile-panel">
            <div className="profile-glow" aria-hidden="true" />

            <img
              src="/images/profile.png"
              alt="Fran Vargas"
              className="profile-image"
            />

            <div className="profile-caption">
              <span>React</span>
              <span>AI Applications</span>
              <span>Responsive UI</span>
            </div>
          </div>
        </section>

        <section className="featured-section" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FEATURED PROJECT</p>
              <h2>{featuredProject.title}</h2>
            </div>

            <p>{featuredProject.subtitle}</p>
          </div>

          <article className="featured-project">
            <div className="featured-visual">
              <img
                src={featuredProject.image}
                alt={`${featuredProject.title} dashboard`}
              />
            </div>

            <div className="featured-content">
              <p className="featured-description">
                {featuredProject.description}
              </p>

              <div className="technology-list">
                {featuredProject.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                >
                  Live demo
                </a>

                <a
                  href={featuredProject.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  Watch demo
                </a>
              </div>

              <p className="source-note">
                Source code available upon request.
              </p>
            </div>
          </article>

          <div className="demo-video">
            <div className="video-heading">
              <p className="eyebrow">PRODUCT WALKTHROUGH</p>
              <h3>See DevOps AI in action</h3>
            </div>

            <div className="video-frame">
              <iframe
                src={featuredProject.embedUrl}
                title="DevOps AI product demonstration"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="projects-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>More projects</h2>
            </div>

            <p>
              A selection of dashboards, web applications and responsive
              interfaces.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-image"
                  aria-label={`Open ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                  />
                </a>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="technology-list small">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo
                    </a>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">TECH STACK</p>
              <h2>Tools I work with</h2>
            </div>

            <p>
              Technologies I have used to design, build and deploy real
              projects.
            </p>
          </div>

          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <p className="eyebrow">ABOUT ME</p>

          <div className="about-grid">
            <h2>
              Curious, product-focused and always looking for a better way to
              build.
            </h2>

            <div className="about-copy">
              <p>
                I started with front-end development and progressively expanded
                into APIs, databases, cloud deployment and AI integrations.
              </p>

              <p>
                I enjoy turning ideas into usable products, solving technical
                problems and learning through real projects.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">LET’S CONNECT</p>

          <h2>Let’s build something useful.</h2>

          <p>
            I’m open to front-end development, web development and AI-powered
            product opportunities.
          </p>

          <div className="contact-links">
            <a href="mailto:franciscovargasa57@hotmail.com">
              Email
            </a>

            <a
              href="https://linkedin.com/in/franciscovargas57"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/franvaarg"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Fran Vargas</span>
        <span>Built with React</span>
      </footer>
    </div>
  );
}