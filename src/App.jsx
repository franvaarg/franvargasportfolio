import "./styles.css";

export default function App() {
  const projects = [
    {
      title: "Banger Music Blog",
      image: "/images/banger.png",
      desc: "A modern music blog built with React featuring dynamic routing and editorial layout.",
      tech: "React • React Router • Vite",
      live: "https://banger-music-blog.vercel.app",
      github: "https://github.com/franvaarg/Music-blog",
    },
    {
      title: "Ecommerce Landing Page",
      image: "/images/store.png",
      desc: "Responsive ecommerce landing page focused on product presentation and modern UI.",
      tech: "HTML • CSS • JavaScript",
      live: "https://franvaarg-ecommerce-landing.vercel.app",
      github: "https://github.com/franvaarg/franvaarg-ecommerce-landing",
    },
    {
      title: "Hotel Landing Page",
      image: "/images/hotel.png",
      desc: "Elegant hotel landing page with modern layout and strong visual hierarchy.",
      tech: "HTML • CSS • JavaScript",
      live: "https://hotel-landing-zeta.vercel.app",
      github: "https://github.com/franvaarg/hotel-landing",
    },
    {
      title: "SkyCast Weather App",
      image: "/images/weather.png",
      desc: "React weather app that fetches real-time weather data from OpenWeather API.",
      tech: "React • API • CSS • Vite",
      live: "https://weather-app-one-rouge-83.vercel.app",
      github: "#",
    },
  ];

  return (
    <div className="site">

      <header className="nav">
        <div className="logo">FRAN VARGAS</div>

        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="btn-outline">
          Contact
        </a>
      </header>

      <section id="hero" className="hero">

        <div className="hero-text">
          <p className="tag">FRONT-END DEVELOPER</p>

          <h1>
            Clean
            <br />
            Modern
            <br />
            Interfaces
          </h1>

          <p className="subtitle">
            Front-end developer focused on responsive design, modern UI
            and clean user experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-main">
              View Projects
            </a>

            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <img
            src="/images/profile.jpg"
            alt="Fran Vargas"
            className="profile-img"
          />
        </div>

      </section>

      <section id="about" className="about">

        <div className="about-text">
          <p className="tag">ABOUT</p>

          <h2>Simple, clean and focused front-end work.</h2>

          <p>
            I focus on building responsive layouts, landing pages and modern
            React interfaces with strong visual structure.
          </p>

          <ul>
            <li>Responsive layout design</li>
            <li>React interfaces</li>
            <li>Landing page architecture</li>
            <li>Modern UI styling</li>
          </ul>
        </div>

        <div className="about-card">

          <span className="about-label">CURRENT FOCUS</span>

          <h3>Modern Front-end Development</h3>

          <p>
            Building clean, responsive interfaces with modern UI
            and strong visual hierarchy.
          </p>

          <div className="mini-skills">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Responsive UI</span>
          </div>

        </div>

      </section>

      <section id="projects" className="projects">

        <p className="tag">PROJECTS</p>
        <h2>Selected Work</h2>

        <div className="project-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <img
                src={project.image}
                className="project-image"
                alt={project.title}
              />

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <span className="tech">{project.tech}</span>

              <div className="project-buttons">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-main"
                >
                  Live Demo
                </a>

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                  >
                    GitHub
                  </a>
                )}

              </div>

            </div>
          ))}

        </div>

      </section>

      <section id="skills" className="skills">

        <p className="tag">SKILLS</p>

        <h2>Tools and technologies</h2>

        <div className="skill-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>React Router</span>
          <span>Git</span>
          <span>Vite</span>
          <span>REST APIs</span>
        </div>

      </section>

      <section id="contact" className="contact">

        <p className="tag">CONTACT</p>

        <h2>Let's build something useful.</h2>

        <p className="contact-text">
          I'm open to front-end opportunities, freelance work and
          creative collaborations.
        </p>

        <div className="contact-buttons">

          <a
            href="mailto:franciscovargasa57@hotmail.com"
            className="btn-main"
          >
            Email
          </a>

          <a
            href="https://github.com/franvaarg"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/franciscovargas57"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>

        </div>

      </section>

    </div>
  );
}