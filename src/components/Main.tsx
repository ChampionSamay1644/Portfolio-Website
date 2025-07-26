import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TypewriterEffect from "./TypewriterEffect";
import "../assets/styles/Main.scss";
import pfp from "../assets/images/pfp.jpg";

function Main() {
  const typewriterTexts = [
    "Software Developer",
    "Cloud & AI Enthusiast",
    "Cybersecurity Researcher",
    "Machine Learning Engineer",
    "Open Source Contributor",
    "Linux User",
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
          <h2 className="typewriter-subtitle">
            <TypewriterEffect
              key="main-typewriter"
              texts={typewriterTexts}
              typingSpeed={80}
              pauseDuration={2500}
            />
          </h2>
          <p>
            I'm a final-year Computer Engineering student graduating in 2026. I
            enjoy building practical software, AI models, and cloud workflows on
            Linux systems. I'm also pursuing a Cybersecurity Honours Major to
            grow my skills in secure coding and ethical hacking.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
