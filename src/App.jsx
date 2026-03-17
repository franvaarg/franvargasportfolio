import { useState } from "react";
import "./styles.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const featuredProject = {
    title: "SkyCast Weather App",
    image: "/images/weather.png",
    desc: "React weather application using the OpenWeather API with responsive UI and real-time weather data.",
    tech: ["React", "API", "CSS", "Vite"],
    live: "https://weather-app-one-rouge-83.vercel.app",
  };

  const projects = [
    {
      title: "Banger Music Blog",
      image: "/images/banger.png",
      tech: "React • Router • Vite",
      live: "https://banger-music-blog.vercel.app",
      github: "https://github.com/franvaarg/Music-blog",
    },
    {
      title: "Hotel Landing Page",
      image: "/images/hotel.png",
      tech: "HTML • CSS • JavaScript",
      live: "https://hotel-landing-zeta.vercel.app",
      github: "https://github.com/franvaarg/hotel-landing",
    },
    {
      title: "Ecommerce Landing",
      image: "/images/store.png",
      tech: "HTML • CSS • JavaScript",
      live: "https://franvaarg-ecommerce-landing.vercel.app",
      github: "https://github.com/franvaarg/franvaarg-ecommerce-landing",
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="nav">
        <div className="logo">franvargas</div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="tag">FRONT-END DEVELOPER</p>

          <h1>
            Nice to meet you. <br />
            I’m <span>Fran Vargas</span>
          </h1>

          <p className="hero-text">
            Front-end developer focused on clean interfaces, responsive layouts
            and modern web experiences that feel clear, polished and easy to use.
          </p>

          <a href="#contact" className="btn-primary">
            Contact me
          </a>
        </div>

        <div className="hero-visual">
          <div className="code-bg" aria-hidden="true">
            <span className="code-item code-1">&lt;html&gt;</span>
            <span className="code-item code-2">display: grid;</span>
            <span className="code-item code-3">const App = () =&gt;</span>
            <span className="code-item code-4">fetch(api)</span>
            <span className="code-item code-5">React</span>
            <span className="code-item code-6">Mobile First</span>
          </div>

          <img
            src="/images/profile.png"
            alt="Fran Vargas"
            className="hero-photo"
          />
        </div>
      </section>

      <section className="featured">
        <div className="featured-image-wrap">
          <img src={featuredProject.image} alt={featuredProject.title} />
        </div>

        <div className="featured-copy">
          <p className="tag">FEATURED PROJECT</p>
          <h2>{featuredProject.title}</h2>
          <p className="project-desc">{featuredProject.desc}</p>
          <p className="stack">{featuredProject.tech.join(" • ")}</p>

          <a
            href={featuredProject.live}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            View project
          </a>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.tech}</p>

                <div className="project-links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn project-btn-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>REST APIs</div>
          <div>Git</div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Let’s build something useful.</h2>

        <div className="contact-links">
          <a href="mailto:franciscovargasa57@hotmail.com">Email</a>

          <a
            href="https://github.com/franvaarg"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/franciscovargas57"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}