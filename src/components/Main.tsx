import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import pfp from "../assets/images/pfp.jpg";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={pfp} alt="Profile" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/ChampionSamay1644"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/samaypandey1644/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Samay Pandey</h1>
          <h2>Software Developer | Cloud & AI Enthusiast</h2>
          <p>
            I’m a final-year Computer Engineering student graduating in 2026. I
            enjoy building practical software, AI models, and cloud workflows on
            Linux systems. I’m also pursuing a Cybersecurity Honours Major to
            grow my skills in secure coding and ethical hacking.
          </p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/ChampionSamay1644"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/samaypandey1644/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
