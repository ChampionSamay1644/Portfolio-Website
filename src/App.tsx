import React, { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import "./index.scss";

type Theme = "light" | "dark";
type Project = {
  name: string;
  kicker: string;
  summary: string;
  proof: string;
  tags: string[];
  href: string;
  accent: string;
  status?: string;
};

const projects: Project[] = [
  {
    name: "SmartNav",
    kicker: "Assistive mobility · Final-year project",
    summary: "A multilingual, voice-controlled smart wheelchair system designed around safety, independence and local processing.",
    proof: "Combines offline speech recognition, speaker verification, obstacle detection and multimodal controls on Raspberry Pi.",
    tags: ["Python", "Raspberry Pi", "Whisper", "Accessibility"],
    href: "https://github.com/ChampionSamay1644/Smart-Wheelchair",
    accent: "lime",
    status: "In development",
  },
  {
    name: "DataDash",
    kicker: "Open source · Cross-platform",
    summary: "Peer-to-peer file sharing for Windows, macOS, Linux and Android, built to transfer data without a cloud intermediary.",
    proof: "Uses local device discovery, TCP transfers and optional password protection across desktop and Android clients.",
    tags: ["Python", "Java", "TCP", "Open source"],
    href: "https://github.com/ChampionSamay1644/DataDash",
    accent: "violet",
  },
  {
    name: "Career Path Recommender",
    kicker: "Applied NLP · Desktop",
    summary: "A career recommendation tool that interprets free-form interests, strengths and explicit dislikes.",
    proof: "Handles clause boundaries and complex negation before scoring recommendations across 60+ documented career domains.",
    tags: ["Python", "PyQt6", "NLP", "Sentiment analysis"],
    href: "https://github.com/ChampionSamay1644/brainwonders-task",
    accent: "orange",
  },
  {
    name: "WebScraper",
    kicker: "Automation · Data",
    summary: "A public Python project for turning web pages into structured, reusable information.",
    proof: "A focused example of the automation work I enjoy: remove repeated effort, make the result easier to use.",
    tags: ["Python", "Web automation", "Data"],
    href: "https://github.com/ChampionSamay1644/WebScraper",
    accent: "blue",
  },
];

const capabilities = [
  { number: "01", title: "Backend engineering", text: "Python services, APIs, integrations, data workflows and maintainable business logic." },
  { number: "02", title: "Automation", text: "Reliable workflows that connect tools, remove repeated steps and make operations easier to run." },
  { number: "03", title: "Linux & delivery", text: "3+ years of hands-on Linux experience, with Docker and Nginx for application delivery." },
  { number: "04", title: "Applied AI", text: "AI-assisted development, open-source models and practical tools built around real workflows." },
];

const principles = ["Useful over flashy", "Systems thinking", "Accessible by default", "Built to be maintained"];

const navItems = [
  { id: "work", label: "Work" },
  { id: "approach", label: "Approach" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function initialTheme(): Theme {
  const saved = window.localStorage.getItem("portfolio-theme");
  if (saved === "light" || saved === "dark") return saved;
  return typeof window.matchMedia === "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLElement>(null);

  const handlePointer = (event: MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 5;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -5;
    card.style.setProperty("--rotate-x", `${y}deg`);
    card.style.setProperty("--rotate-y", `${x}deg`);
    card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  const resetPointer = () => {
    cardRef.current?.style.setProperty("--rotate-x", "0deg");
    cardRef.current?.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <article ref={cardRef} className={`project-card accent-${project.accent} reveal`} onMouseMove={handlePointer} onMouseLeave={resetPointer}>
      <div className="project-card-glow" aria-hidden="true" />
      <div className="project-topline">
        <span className="project-index">0{index + 1}</span>
        {project.status && <span className="project-status"><i />{project.status}</span>}
      </div>
      <p className="project-kicker">{project.kicker}</p>
      <h3>{project.name}</h3>
      <p className="project-summary">{project.summary}</p>
      <div className="project-proof"><span>Engineering note</span><p>{project.proof}</p></div>
      <div className="project-footer">
        <ul className="tag-list" aria-label={`${project.name} technologies`}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        <a className="round-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}><span>View code</span><b aria-hidden="true">↗</b></a>
      </div>
    </article>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formStatus, setFormStatus] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-30% 0px -55%", threshold: [0, 0.25, 0.5] });
    document.querySelectorAll("main section[id]").forEach(section => sectionObserver.observe(section));

    const setProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll-progress", `${max > 0 ? (window.scrollY / max) * 100 : 0}%`);
    };
    setProgress();
    window.addEventListener("scroll", setProgress, { passive: true });
    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", setProgress);
    };
  }, []);

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
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setFormStatus("Please enter a valid email address.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    setFormStatus("Your email app is opening with the message ready to send.");
    window.location.href = `mailto:championsamayp@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("championsamayp@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:championsamayp@gmail.com";
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Samay Pandey, home" onClick={closeMenu}>
          <span className="brand-mark">SP</span><span>Samay Pandey</span>
        </a>
        <nav id="primary-menu" aria-label="Primary navigation" className={menuOpen ? "nav open" : "nav"}>
          {navItems.map(item => <a key={item.id} className={activeSection === item.id ? "active" : ""} href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="resume-nav" href="/resume.pdf" download="Samay-Pandey-Resume.pdf">Download résumé</a>
          <button className="icon-button" type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title="Toggle theme">
            <span aria-hidden="true">{theme === "dark" ? "☀" : "◐"}</span>
          </button>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="primary-menu" aria-label="Toggle navigation"><span>{menuOpen ? "Close" : "Menu"}</span></button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> Backend · Automation · Applied AI</p>
            <h1>Engineering the <span className="text-accent">boring parts away.</span></h1>
            <p className="hero-intro">I'm Samay, a backend and automation engineer in India. I turn repetitive workflows, rough ideas and operational friction into software that is clear, dependable and easier to run.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="button secondary" href="/resume.pdf" download="Samay-Pandey-Resume.pdf">Download résumé <span aria-hidden="true">↘</span></a>
            </div>
            <div className="proof-strip" aria-label="Quick facts">
              <div><strong>3+</strong><span>years hands-on Linux</span></div>
              <div><strong>4</strong><span>selected public projects</span></div>
              <div><strong>IST</strong><span>India-based</span></div>
            </div>
          </div>
          <div className="hero-console reveal" aria-label="A visual summary of Samay's engineering focus">
            <div className="console-bar"><div><i /><i /><i /></div><span>samay@portfolio: ~/now</span><b>⌁</b></div>
            <div className="console-body">
              <p><span className="prompt">$</span> whoami</p>
              <div className="console-response identity-row"><div className="mini-avatar"><img src="/pfp.jpg" alt="" /></div><div><strong>Samay Pandey</strong><span>Backend & Automation Engineer</span></div></div>
              <p><span className="prompt">$</span> cat focus.json</p>
              <pre className="console-response" aria-label="Engineering focus"><code>{`{
  "build": ["backends", "automation"],
  "ship":  ["Linux", "Docker", "Nginx"],
  "learn": ["applied AI", "systems"]
}`}</code></pre>
              <p><span className="prompt">$</span> status <span className="cursor" aria-hidden="true" /></p>
              <p className="console-response success"><span>●</span> Ready to solve useful problems.</p>
            </div>
            <div className="console-orbit orbit-a" aria-hidden="true" /><div className="console-orbit orbit-b" aria-hidden="true" />
          </div>
        </section>

        <section className="trust-bar" aria-label="Engineering principles">
          <div className="trust-track">
            {[false, true].map(duplicate => (
              <div className="trust-group" aria-hidden={duplicate || undefined} key={String(duplicate)}>
                {principles.map(principle => (
                  <React.Fragment key={principle}>
                    <span>{principle}</span><i aria-hidden="true">✦</i>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="section work" id="work">
          <div className="section-heading reveal">
            <div><p className="eyebrow">Selected work · 01</p><h2>Proof, not a wall of logos.</h2><p className="section-lede">Four public projects that show how I think across accessibility, networking, automation and applied NLP.</p></div>
            <a className="text-link" href="https://github.com/ChampionSamay1644?tab=repositories" target="_blank" rel="noreferrer">Browse GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <div className="project-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.name} />)}</div>
        </section>

        <section className="section approach" id="approach">
          <div className="section-heading reveal"><div><p className="eyebrow">How I work · 02</p><h2>Less theatre. More useful software.</h2></div></div>
          <div className="process-grid">
            <article className="process-intro reveal"><span className="oversized-number">03</span><h3>Simple loop.<br />Serious follow-through.</h3><p>I start with the friction, make the system understandable, and improve it against real use instead of adding complexity for its own sake.</p></article>
            <ol className="process-list">
              <li className="reveal"><span>01 / Understand</span><div><h3>Find the actual bottleneck.</h3><p>Clarify the outcome, the people involved and the failure modes before reaching for a stack.</p></div></li>
              <li className="reveal"><span>02 / Build</span><div><h3>Make the smallest complete system.</h3><p>Choose direct architecture, visible states and automation that someone else can reason about.</p></div></li>
              <li className="reveal"><span>03 / Harden</span><div><h3>Test the edges, then simplify.</h3><p>Check accessibility, responsiveness, recovery paths and the handoff needed to keep it dependable.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-sticky reveal"><p className="eyebrow">Capabilities · 03</p><h2>From an idea to a system people can rely on.</h2><p>I enjoy work where software changes an outcome: a repeated task disappears, information becomes usable, or a prototype becomes something stable enough to ship.</p><div className="about-links"><a href="/resume.pdf" target="_blank" rel="noreferrer">Open résumé ↗</a><a href="https://github.com/ChampionSamay1644" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/samaypandey1644/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
          <ol className="capability-list">{capabilities.map(item => <li className="reveal" key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><b aria-hidden="true">↗</b></li>)}</ol>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-intro reveal"><p className="eyebrow">Contact · 04</p><h2>Bring me the messy problem.</h2><p>If you are hiring or building something that needs backend, automation, Linux or applied AI thinking, send the goal and where things are stuck.</p><div className="email-actions"><a className="email" href="mailto:championsamayp@gmail.com">championsamayp@gmail.com</a><button type="button" className="copy-button" onClick={copyEmail}>{copied ? "Copied" : "Copy"}</button></div></div>
          <form className="contact-form reveal" onSubmit={handleContact} noValidate>
            <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required placeholder="Your name" /></div>
            <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></div>
            <div className="field"><label htmlFor="message">What are you trying to solve?</label><textarea id="message" name="message" required rows={5} placeholder="A little context goes a long way..." /></div>
            <button className="button primary send-button" type="submit"><span>Prepare email</span><b aria-hidden="true">↗</b></button>
            <p className="form-note">This prepares a message in your email app. Nothing is sent automatically.</p>
            <p className="form-status" role="status" aria-live="polite">{formStatus}</p>
          </form>
        </section>
      </main>

      <footer><div className="footer-brand"><span className="brand-mark">SP</span><div><strong>Samay Pandey</strong><p>Backend & Automation Engineer</p></div></div><p className="footer-note">Built with React, TypeScript and attention to the details.</p><div className="footer-links"><a href="#home">Top ↑</a><a href="https://github.com/ChampionSamay1644" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/samaypandey1644/" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
    </div>
  );
}

export default App;
