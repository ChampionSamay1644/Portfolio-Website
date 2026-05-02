import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faBrain,
  faCloud,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Java",
  "Python",
  "C++",
  "TypeScript",
  "React",
  "Firebase",
  "SQL",
  "NoSQL",
  "Android Studio",
  "Git",
];

const labelsSecond = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Pandas",
  "Selenium",
  "Ultralytics (YOLO)",
  "Hugging Face",
  "Web Scraping",
  "Recommendation Systems",
];

const labelsThird = [
  "Linux",
  "Shell Scripting",
  "Google Cloud",
  "Azure",
  "AWS",
  "Docker",
  "CI/CD",
  "GitHub Actions",
  "Raspberry Pi",
  "DevOps",
];

const labelsCyber = [
  "Burp Suite",
  "Wireshark",
  "Nmap",
  "GDB",
  "Ghidra",
  "Volatility",
  "Metasploit",
  "CTF Competitions",
  "OSINT",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faLaptopCode} size="3x" />
            <h3>Software Development</h3>
            <p>
              Designed and developed cross-platform applications spanning mobile (Android),
              desktop (Java/Python), and web (React/TypeScript). Built scalable backends
              with Firebase and SQL/NoSQL databases. Experienced in full-stack workflows
              with clean architecture and version-controlled deployments.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />
            <h3>AI &amp; Machine Learning</h3>
            <p>
              Built ML pipelines and multi-tier recommendation systems deployed on
              GCP and Azure. Trained computer vision models (CNN, YOLO) for real-time
              inference. Developed large-scale web scraping pipelines to generate
              training datasets. Experienced in model optimization for CPU/GPU workloads.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCloud} size="3x" />
            <h3>Cloud &amp; Systems Engineering</h3>
            <p>
              Automated workflows using Linux shell scripting and cloud-native tools
              across GCP, Azure, and AWS. Set up CI/CD pipelines with GitHub Actions
              and containerized deployments with Docker. Developed embedded Linux
              systems on Raspberry Pi for real-time IoT and robotics applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill skill--cyber">
            <FontAwesomeIcon icon={faShield} size="3x" />
            <h3>Cybersecurity</h3>
            <p>
              Pursuing a Cybersecurity Honours Major. Active CTF competitor — ranked
              Top 5 at RAIT CTF Finals. Hands-on experience in web exploitation,
              OSINT, reverse engineering, digital forensics, and network traffic
              analysis. Applies secure coding practices to all software projects.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsCyber.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
