import React, { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Monitor,
  Database,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "MySQL",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    title: "Beulah Catering School",
    category: "Website Development",
    description:
      "A website developed to showcase Beulah Catering School, its culinary training programmes, services, gallery, and other important information.",
    role: "Frontend development and AI-assisted backend development",
    image: "/beulah-preview.png",
    technologies: ["React", "JavaScript", "CSS", "Backend"],
    liveLink: "https://beulahcateringschool.com",
    status: "Live Website",
  },
  {
    number: "02",
    title: "Abia Transport Management System",
    category: "Web Application Concept",
    description:
      "A transport management platform concept designed to connect commuters with transport companies across Abia State and other parts of Nigeria.",
    role: "Personal project — development in progress",
    image: "",
    technologies: ["React", "JavaScript", "CSS"],
    liveLink: "",
    status: "In Development",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAVIGATION */}
      <header className="header">
        <nav className="navbar container">
          <a href="#home" className="logo" onClick={closeMenu}>
            BRIGHT<span>.</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>

          <a href="#contact" className="nav-button">
            Let's Talk <ArrowUpRight size={17} />
          </a>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="container hero-content">
            <div className="hero-text">
              <div className="availability">
                <span className="availability-dot"></span>
                WEB DEVELOPER
              </div>

              <p className="intro">Hello, I'm</p>

              <h1>
                BRIGHT C
                <br />
                <span>NWOGU.</span>
              </h1>

              <h2>Full-Stack Web Developer</h2>

              <p className="hero-description">
                I build responsive, functional, and user-friendly websites
                that help businesses establish their online presence and
                bring ideas to life.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-button">
                  Explore My Work <ArrowUpRight size={18} />
                </a>

                <a href="#contact" className="secondary-button">
                  Contact Me
                </a>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/Dsmile1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/nwogu-bright-80442219a/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>

                <a href="mailto:bnwogu74@gmail.com" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card">
                <div className="code-window">
                  <div className="window-top">
                    <div className="window-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span>developer.js</span>
                  </div>

                  <div className="code-content">
                    <p><span className="code-purple">const</span> developer = {"{"}</p>
                    <p className="indent">
                      name: <span className="code-green">"Bright Nwogu"</span>,
                    </p>
                    <p className="indent">
                      role: <span className="code-green">"Web Developer"</span>,
                    </p>
                    <p className="indent">
                      passion: <span className="code-green">"Building for the web"</span>,
                    </p>
                    <p className="indent">
                      learning: <span className="code-green">true</span>,
                    </p>
                    <p className="indent">
                      creativity: <span className="code-green">"Unlimited"</span>
                    </p>
                    <p>{"};"}</p>
                    <br />
                    <p>
                      <span className="code-purple">console</span>.log(
                      <span className="code-green">"Hello, world!"</span>);
                    </p>
                  </div>
                </div>

                <div className="floating-card floating-top">
                  <Code2 size={20} />
                  <span>Clean Code</span>
                </div>

                <div className="floating-card floating-bottom">
                  <Monitor size={20} />
                  <span>Responsive Design</span>
                </div>
              </div>
            </div>
          </div>

          <a href="#about" className="scroll-indicator">
            Scroll to explore <ChevronDown size={17} />
          </a>
        </section>

        {/* ABOUT SECTION */}
        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">GET TO KNOW ME</span>
              <h2>About <span>Me</span></h2>
            </div>

            <div className="about-grid">
              <div className="about-icon">
                <div className="about-icon-inner">
                  <Code2 size={76} strokeWidth={1.2} />
                  <span>BRIGHT</span>
                </div>
              </div>

              <div className="about-content">
                <h3>
                  Turning ideas into meaningful digital experiences.
                </h3>

                <p>
                  I'm Bright C Nwogu, a Full-Stack Web Developer passionate
                  about creating modern, responsive, and user-friendly web
                  experiences.
                </p>

                <p>
                  My journey into technology is driven by curiosity,
                  creativity, and a desire to solve real-world problems
                  through software development.
                </p>

                <p>
                  I work on frontend development and use AI tools to support
                  my backend development process. I'm continuously improving
                  my skills, exploring new technologies, and building
                  practical projects that create value.
                </p>

                <a href="#contact" className="text-link">
                  Let's work together <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">WHAT I WORK WITH</span>
              <h2>My Technical <span>Skills</span></h2>
              <p>
                Technologies and tools I use or am developing experience with
                to create web solutions.
              </p>
            </div>

            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon">
                  <Monitor size={27} />
                </div>
                <h3>Frontend Development</h3>
                <p>
                  Building responsive interfaces and interactive web
                  experiences.
                </p>
                <div className="skill-tags">
                  {["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"].map(
                    (skill) => (
                      <span key={skill}>{skill}</span>
                    )
                  )}
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">
                  <Database size={27} />
                </div>
                <h3>Backend Development</h3>
                <p>
                  Learning and building server-side functionality, data
                  handling, and application logic.
                </p>
                <div className="skill-tags">
                  {["Node.js", "MySQL", "APIs"].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">
                  <Github size={27} />
                </div>
                <h3>Tools & Workflow</h3>
                <p>
                  Using development tools and AI-assisted workflows to
                  support building and improving projects.
                </p>
                <div className="skill-tags">
                  {["Git", "GitHub", "VS Code", "AI Tools"].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">MY RECENT WORK</span>
              <h2>Featured <span>Projects</span></h2>
              <p>
                A selection of projects I've worked on and ideas I'm
                developing.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-image">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt="Beulah Catering School website homepage"
                      />
                    ) : (
                      <div className="project-placeholder">
                        <Database size={55} />
                        <span>TRANSPORT MANAGEMENT SYSTEM</span>
                      </div>
                    )}

                    <span className="project-number">{project.number}</span>
                    <span
                      className={`project-status ${
                        project.status === "Live Website" ? "live" : ""
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="project-info">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <p className="project-role">
                      <strong>My contribution:</strong> {project.role}
                    </p>

                    <div className="project-tags">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        Visit Live Website <ExternalLink size={16} />
                      </a>
                    ) : (
                      <span className="project-link disabled-link">
                        Project in progress
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-box">
              <div className="contact-content">
                <span className="section-label">LET'S CONNECT</span>
                <h2>
                  Have an idea?
                  <br />
                  <span>Let's build it together.</span>
                </h2>

                <p>
                  I'm interested in connecting with people, exploring
                  opportunities, and working on meaningful digital projects.
                  Feel free to reach out.
                </p>

                <a
                  href="mailto:bnwogu74@gmail.com"
                  className="primary-button"
                >
                  Send Me an Email <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={21} />
                  </div>
                  <div>
                    <span>Email</span>
                    <a href="mailto:bnwogu74@gmail.com">
                      bnwogu74@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Github size={21} />
                  </div>
                  <div>
                    <span>GitHub</span>
                    <a
                      href="https://github.com/Dsmile1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/Dsmile1
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Linkedin size={21} />
                  </div>
                  <div>
                    <span>LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/in/nwogu-bright-80442219a/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <a href="#home" className="logo">
            BRIGHT<span>.</span>
          </a>

          <p>
            © {new Date().getFullYear()} BRIGHT C NWOGU. All rights reserved.
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/Dsmile1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/nwogu-bright-80442219a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>

            <a href="mailto:bnwogu74@gmail.com" aria-label="Email">
              <Mail size={19} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;