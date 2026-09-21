import React, { FormEvent, useEffect, useState } from "react";
import "./index.scss";

type Theme = "light" | "dark";

const projects = [
  {
    name: "Smart Wheelchair",
    summary: "A final-year accessibility project focused on assistive navigation and practical embedded systems.",
    tags: ["Python", "Accessibility", "Embedded systems"],
    href: "https://github.com/ChampionSamay1644/Smart-Wheelchair",
  },
  {
    name: "DataDash",
    summary: "An open-source, cross-platform application for secure and efficient file transfers.",
    tags: ["Open source", "File transfer", "Cross-platform"],
    href: "https://github.com/ChampionSamay1644/DataDash",
  },
  {
    name: "WebScraper",
    summary: "A public Python project for extracting structured information from the web.",
    tags: ["Python", "Automation", "Data"],
    href: "https://github.com/ChampionSamay1644/WebScraper",
  },
  {
    name: "Career Path Recommender",
    summary: "A lightweight tool that extracts preferences from conversations and suggests career paths with open-source language models.",
    tags: ["Python", "LLMs", "Prompt engineering"],
    href: "https://github.com/ChampionSamay1644/brainwonders-task",
  },
];

const capabilities = [
  { number: "01", title: "Backend systems", text: "APIs, data workflows, business logic, integrations and maintainable services." },
  { number: "02", title: "Automation", text: "Repeatable workflows that connect tools, remove manual steps and keep operations moving." },
  { number: "03", title: "Linux & delivery", text: "Hands-on Linux, Docker and Nginx experience for reliable application delivery." },
  { number: "04", title: "Applied AI", text: "Practical AI-assisted development, open-source models and workflow-oriented tooling." },
];

function initialTheme(): Theme {
  const saved = window.localStorage.getItem("portfolio-theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function App() {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      setFormStatus("Please complete all fields.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    setFormStatus("Your email app is opening with the message ready to send.");
    window.location.href = `mailto:championsamayp@gmail.com?subject=${subject}&body=${body}`;
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Samay Pandey, home" onClick={closeMenu}>
          <span className="brand-mark">SP</span><span>Samay Pandey</span>
        </a>
        <nav aria-label="Primary navigation" className={menuOpen ? "nav open" : "nav"}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title="Toggle theme">
            {theme === "dark" ? "☀" : "◐"}
          </button>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="primary-menu" aria-label="Toggle navigation">{menuOpen ? "Close" : "Menu"}</button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Backend & automation engineer</p>
            <h1>I build useful systems that keep working.</h1>
            <p className="hero-intro">I'm Samay, a developer in India working across backend engineering, automation, Linux infrastructure and applied AI.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">See selected work <span aria-hidden="true">↘</span></a>
              <a className="button secondary" href="#contact">Start a conversation</a>
            </div>
            <div className="social-row" aria-label="Social links">
              <a href="https://github.com/ChampionSamay1644" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/samaypandey1644/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Developer profile illustration">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="portrait-frame"><img src="/pfp.jpg" alt="Samay Pandey" /></div>
            <div className="floating-card card-code"><span>Currently exploring</span><strong>AI-driven engineering</strong></div>
            <div className="floating-card card-location"><span>Based in</span><strong>India · IST</strong></div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Projects built to solve real problems.</h2></div><a className="text-link" href="https://github.com/ChampionSamay1644?tab=repositories" target="_blank" rel="noreferrer">All repositories ↗</a></div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-top"><span className="project-index">0{index + 1}</span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}>↗</a></div>
                <h3>{project.name}</h3><p>{project.summary}</p>
                <ul className="tag-list" aria-label={`${project.name} technologies`}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-copy"><p className="eyebrow">What I do</p><h2>From an idea to a dependable system.</h2><p>I like work that connects software to an outcome: reducing a repeated task, making information easier to use, or turning a rough prototype into something people can rely on.</p><p>My public work spans accessibility, file transfer, web automation and applied language models. I also bring more than three years of hands-on Linux experience to how I build and ship.</p><a className="button secondary" href="/resume.pdf" target="_blank" rel="noreferrer">Open résumé ↗</a></div>
          <ol className="capability-list">{capabilities.map(item => <li key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-intro"><p className="eyebrow">Let's talk</p><h2>Have a problem worth solving?</h2><p>Send a short note about the project, the goal and where things stand. I'll reply by email.</p><a className="email" href="mailto:championsamayp@gmail.com">championsamayp@gmail.com</a></div>
          <form className="contact-form" onSubmit={handleContact} noValidate>
            <label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required placeholder="Your name" />
            <label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
            <label htmlFor="message">Message</label><textarea id="message" name="message" required rows={5} placeholder="What are you working on?" />
            <button className="button primary" type="submit">Prepare email <span aria-hidden="true">↗</span></button>
            <p className="form-status" role="status" aria-live="polite">{formStatus}</p>
          </form>
        </section>
      </main>

      <footer><div><span className="brand-mark">SP</span><p>Designed and built by Samay Pandey.</p></div><div className="footer-links"><a href="#home">Back to top ↑</a><a href="https://github.com/ChampionSamay1644" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/samaypandey1644/" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
    </div>
  );
}

export default App;
