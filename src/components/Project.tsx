import React from "react";
import datadash from "../assets/images/datadash.png";
import emotionprediction from "../assets/images/emotionprediction.jpg";
import hr from "../assets/images/hr.png";
import handcricket from "../assets/images/handcricket.png";
import flappybird from "../assets/images/flappybird.png";
import smartnav from "../assets/images/smartnav.png";
import Chip from "@mui/material/Chip";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "../assets/styles/Project.scss";

// Skills for each project
const smartNavSkills = [
  "Python",
  "Raspberry Pi",
  "Linux",
  "Speech Recognition",
  "Embedded Systems",
  "WebSocket",
  "Firebase",
  "GPIO",
];
const dataDashSkills = [
  "Python",
  "Java",
  "TCP/IP",
  "Android OS",
  "Cryptography",
  "Networking",
];
const emotionPredictorSkills = [
  "Python",
  "OpenCV",
  "Machine Learning",
  "Computer Vision",
  "TensorFlow",
];
const hrManagementSkills = [
  "Python",
  "Tkinter",
  "Firebase",
  "CRUD Operations",
  "Database",
];
const handCricketSkills = [
  "Java",
  "Android Studio",
  "XML",
  "Mobile Development",
  "Game Logic",
];
const flappyBirdSkills = [
  "Java",
  "Swing",
  "JFrame",
  "Game Development",
  "Event Handling",
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      {/* ===== FEATURED PROJECT: SmartNav ===== */}
      <div className="project-featured">
        <div className="project-featured-image">
          <a
            href="https://github.com/ChampionSamay1644"
            target="_blank"
            rel="noreferrer"
          >
            <img src={smartnav} className="zoom" alt="SmartNav – Smart Wheelchair System" width="100%" />
          </a>
        </div>
        <div className="project-featured-content">
          <div className="project-featured-tag">⭐ Featured Project</div>
          <a
            href="https://github.com/ChampionSamay1644"
            target="_blank"
            rel="noreferrer"
          >
            <h2>SmartNav – Voice-Controlled Smart Wheelchair System</h2>
          </a>
          <p className="project-problem">
            <strong>Problem:</strong> Physically impaired users lack affordable, intelligent mobility systems that respond to natural voice commands in real time.
          </p>
          <p>
            Built a Linux-based embedded system for voice-controlled wheelchair navigation on Raspberry Pi.
            Designed a real-time speech-to-action pipeline using Python and Kaldi/speech engines, integrating
            hardware GPIO motor control with live sensor telemetry (SpO₂, temperature, heart rate) streamed
            to Firebase. Hosted an on-device web dashboard accessible over WebSocket.
          </p>
          <p className="project-impact">
            <strong>Impact:</strong> Demonstrated assistive mobility for end-users in clinical-style tests;
            system achieved sub-500ms command response latency.
          </p>
          <div className="project-achievement-badges">
            <span className="project-badge">
              <EmojiEventsIcon fontSize="small" /> 2nd Prize – SCOE AVISHKAR 2026
            </span>
            <span className="project-badge">
              <EmojiEventsIcon fontSize="small" /> 5th Rank – State Level Colloquium'26
            </span>
            <span className="project-badge">
              <EmojiEventsIcon fontSize="small" /> Aavishkar Finalist – University of Mumbai
            </span>
          </div>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {smartNavSkills.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
          <div className="project-links">
            <a href="https://github.com/ChampionSamay1644" target="_blank" rel="noreferrer" className="project-link-btn">
              <GitHubIcon fontSize="small" /> View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* ===== REGULAR PROJECTS GRID ===== */}
      <div className="projects-grid">

        {/* DataDash */}
        <div className="project">
          <a
            href="https://datadashshare.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={datadash} className="zoom" alt="DataDash thumbnail" width="100%" />
          </a>
          <a
            href="https://datadashshare.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>DataDash – Cross-Platform File Transfer</h2>
          </a>
          <p className="project-problem">
            <strong>Problem:</strong> Reliable, high-speed file transfer across heterogeneous devices (Android ↔ Desktop) without cloud dependency.
          </p>
          <p>
            Built a cross-platform file and data transfer system using TCP socket communication.
            Implemented a custom transfer protocol ensuring packet integrity and resumable transfers.
            Achieved high-speed, reliable data exchange across Android and desktop environments
            with AES encryption for secure payload delivery.
          </p>
          <p className="project-impact">
            <strong>Impact:</strong> ~15% faster transfer throughput vs. Bluetooth; 99%+ packet delivery reliability.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {dataDashSkills.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
          <div className="project-links">
            <a href="https://datadashshare.vercel.app/" target="_blank" rel="noreferrer" className="project-link-btn">
              <LaunchIcon fontSize="small" /> Live Demo
            </a>
          </div>
        </div>

        {/* Emotion Predictor */}
        <div className="project">
          <a
            href="https://github.com/ChampionSamay1644/Emotion-Predictor/tree/Samay"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={emotionprediction}
              className="zoom"
              alt="Emotion Predictor thumbnail"
              width="100%"
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </a>
          <a
            href="https://github.com/ChampionSamay1644/Emotion-Predictor/tree/Samay"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Emotion Predictor – Real-Time CV Model</h2>
          </a>
          <p className="project-problem">
            <strong>Problem:</strong> Enabling real-time human emotion detection from image, video, and live webcam streams.
          </p>
          <p>
            Trained a CNN model using TensorFlow and OpenCV to classify 7 emotion categories.
            Supports image, video, and live webcam inference with a custom preprocessing pipeline.
            Deployed as a local application with sub-100ms inference on CPU.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {emotionPredictorSkills.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
          <div className="project-links">
            <a href="https://github.com/ChampionSamay1644/Emotion-Predictor/tree/Samay" target="_blank" rel="noreferrer" className="project-link-btn">
              <GitHubIcon fontSize="small" /> GitHub
            </a>
          </div>
        </div>

        {/* E-HR Management */}
        <div className="project">
          <a
            href="https://github.com/ChampionSamay1644/Enhanced-E-HR-Management-System"
            target="_blank"
            rel="noreferrer"
          >
            <img src={hr} className="zoom" alt="E-HR Management thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/ChampionSamay1644/Enhanced-E-HR-Management-System"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Enhanced E-HR Management System</h2>
          </a>
          <p className="project-problem">
            <strong>Problem:</strong> Digitizing employee record management with a GUI-first Python desktop application and real-time cloud database.
          </p>
          <p>
            Built a desktop HR management system with Tkinter GUI and Firebase Realtime Database backend.
            Implemented full CRUD operations for employee records, authentication, and search filtering.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {hrManagementSkills.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
          <div className="project-links">
            <a href="https://github.com/ChampionSamay1644/Enhanced-E-HR-Management-System" target="_blank" rel="noreferrer" className="project-link-btn">
              <GitHubIcon fontSize="small" /> GitHub
            </a>
          </div>
        </div>

        {/* Hand Cricket */}
        <div className="project">
          <a
            href="https://github.com/ChampionSamay1644/HandCricket-MiniProject"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={handcricket}
              className="zoom"
              alt="Hand Cricket thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/ChampionSamay1644/HandCricket-MiniProject"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Hand Cricket – Android Game</h2>
          </a>
          <p>
            An Android hand cricket game built in Java with XML layouts.
            Implements turn-based game logic, AI opponent scoring, and animated UI interactions.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {handCricketSkills.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
          <div className="project-links">
            <a href="https://github.com/ChampionSamay1644/HandCricket-MiniProject" target="_blank" rel="noreferrer" className="project-link-btn">
              <GitHubIcon fontSize="small" /> GitHub
            </a>
          </div>
        </div>

        {/* Flappy Bird */}
        <div className="project">
          <a
            href="https://github.com/ChampionSamay1644/flappybirdcopy"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={flappybird}
              className="zoom"
              alt="Flappy Bird Clone thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/ChampionSamay1644/flappybirdcopy"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Flappy Bird Clone – Java Desktop Game</h2>
          </a>
          <p>
            Java desktop game built with Swing/JFrame implementing a physics-based game loop,
            collision detection, and procedural pipe generation. Demonstrates event handling and
            real-time rendering on Java 2D canvas.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {flappyBirdSkills.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
          <div className="project-links">
            <a href="https://github.com/ChampionSamay1644/flappybirdcopy" target="_blank" rel="noreferrer" className="project-link-btn">
              <GitHubIcon fontSize="small" /> GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Project;
