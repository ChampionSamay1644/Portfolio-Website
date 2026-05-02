import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SecurityIcon from "@mui/icons-material/Security";
import TypewriterEffect from "./TypewriterEffect";
import "../assets/styles/Main.scss";
import pfp from "../assets/images/pfp.jpg";

function Main() {
  const typewriterTexts = [
    "Systems Engineer",
    "AI & ML Developer",
    "Cybersecurity Researcher",
    "Embedded Systems Builder",
    "Linux & Cloud Engineer",
    "Open Source Contributor",
  ];

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={pfp} alt="Profile" />
          <div className="desktop_social_icons">
            <div className="icons-row">
              <a
                href="https://github.com/ChampionSamay1644"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/samaypandey1644/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
            <div className="email-row">
              <a
                href="mailto:championsamayp@gmail.com"
                title="Email"
                className="email-link"
              >
                championsamayp@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <h1 className="name-title">Samay Pandey</h1>
          <div className="mobile_social_icons">
            <a
              href="https://github.com/ChampionSamay1644"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/samaypandey1644/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:championsamayp@gmail.com"
              title="Email"
              className="email-link"
            >
              championsamayp@gmail.com
            </a>
          </div>
          <div className="hero-headline">Systems Engineer | AI &amp; Cybersecurity | Linux &amp; Cloud</div>
          <h2 className="typewriter-subtitle">
            <TypewriterEffect
              key="main-typewriter"
              texts={typewriterTexts}
              typingSpeed={80}
              pauseDuration={2500}
            />
          </h2>
          <p>
            Final-year Computer Engineering student building real-world systems
            across AI, cybersecurity, and distributed software. Experienced in
            developing scalable applications, ML pipelines, and security-focused
            solutions on Linux-based environments.
          </p>
          <div className="hero-achievements">
            <span className="hero-badge hero-badge--gold">
              <EmojiEventsIcon fontSize="small" />
              Aavishkar Finalist – University of Mumbai
            </span>
            <span className="hero-badge hero-badge--cyber">
              <SecurityIcon fontSize="small" />
              Top 5 – RAIT CTF Finals
            </span>
            <span className="hero-badge hero-badge--gold">
              <EmojiEventsIcon fontSize="small" />
              2nd Prize – SCOE AVISHKAR 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
