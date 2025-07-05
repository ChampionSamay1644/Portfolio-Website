import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faBrain,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Java",
  "Python",
  "C++",
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Firebase",
  "SQL",
  "NoSQL",
  "Android Studio",
  "Git",
  "GitHub",
];

const labelsSecond = [
  "Python",
  "Pandas",
  "Selenium",
  "Ultralytics",
  "Scikit-learn",
  "LangChain",
  "Hugging Face",
  "Recommendation Systems",
  "Web Scraping",
  "Model Training",
  "Data Optimization",
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
  "VM Management",
  "Automation",
  "DevOps",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faLaptopCode} size="3x" />
            <h3>Software Developer</h3>
            <p>
              I’m a fourth-year Computer Engineering student graduating in 2026.
              I love building practical and efficient software solutions, with
              experience across web and mobile development. I’ve created
              multiple cross-platform applications and enjoy working on both
              frontend and backend systems.
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
            <h3>AI & ML Developer</h3>
            <p>
              I have strong experience designing and deploying multi-tiered AI
              models. I’ve built recommendation systems, video similarity
              models, and large-scale web scraping pipelines for training data.
              I enjoy solving real-world problems through intelligent automation
              and machine learning.
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
            <h3>Cloud & Automation</h3>
            <p>
              I’m skilled at working with cloud platforms like Google Cloud,
              Azure, and AWS. I’ve automated workflows on Linux-based systems,
              set up CI/CD pipelines, and optimized training pipelines for CPU
              and GPU workloads. I’m well-versed in Linux and use it daily for
              development and deployment tasks.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
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
