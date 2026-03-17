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
          onClick={() => setMenuOpen(!menuOpen)}
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
        <div className="hero-left">
          <p className="tag">FRONT-END DEVELOPER</p>

          <h1>
            Nice to meet you! <br />
            I'm <span>Fran Vargas</span>
          </h1>

          <p className="hero-text">
            Front-end developer focused on clean interfaces,
            responsive layouts and modern web experiences
            that feel clear and polished.
          </p>

          <a href="#contact" className="btn-primary">
            Contact me
          </a>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrap">
            <img src="/images/profile.png" alt="Fran Vargas" />
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="featured-left">
          <div className="featured-image-wrap">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
            />
          </div>
        </div>

        <div className="featured-right">
          <p className="tag">FEATURED PROJECT</p>

          <h2>{featuredProject.title}</h2>

          <p className="project-desc">{featuredProject.desc}</p>

          <p className="stack">
            {featuredProject.tech.join(" • ")}
          </p>

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
          {projects.map((p, i) => (
            <div className="project-card reveal-card" key={i}>
              <div className="project-image-wrap">
                <img src={p.image} alt={p.title} />
              </div>

              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.tech}</p>

                <div className="project-links">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    Live
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn project-btn-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
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
        <h2>Let's build something useful.</h2>

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