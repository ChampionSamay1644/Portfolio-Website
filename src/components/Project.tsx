import React from "react";
import datadash from "../assets/images/datadash.png";
import emotionprediction from "../assets/images/emotionprediction.jpg";
import hr from "../assets/images/hr.png";
import handcricket from "../assets/images/handcricket.png";
import flappybird from "../assets/images/flappybird.png";
import mock16 from "../assets/images/mock16.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {/* ===== EXISTING PROJECTS ===== */}
        {/* <div className="project">
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <h2>Filmate AI</h2>
          </a>
          <p>
            Developed movie finder app with semantic search and sentiment
            analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.
          </p>
        </div> */}

        {/* Add your other existing blocks here as you already have */}

        {/* ===== NEW PROJECTS ===== */}

        <div className="project">
          <a
            href="https://datadashshare.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={datadash} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://datadashshare.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>DataDash</h2>
          </a>
          <p>
            Designed an end-to-end data analytics dashboard to automate data
            processing, visualization, and reporting using Python, Pandas, and
            Streamlit.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/ChampionSamay1644/Emotion-Predictor/tree/Samay"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={emotionprediction}
              className="zoom"
              alt="thumbnail"
              height="65%"
              style={{ display: "block", margin: "0 auto" }}
            />
          </a>
          <a
            href="https://github.com/ChampionSamay1644/Emotion-Predictor/tree/Samay"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Emotion Predictor</h2>
          </a>
          <p>
            Trained a model to predict seven emotion categories using OpenCV.
            Supports image, video, and live video emotion detection.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/ChampionSamay1644/Enhanced-E-HR-Management-System"
            target="_blank"
            rel="noreferrer"
          >
            <img src={hr} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/ChampionSamay1644/Enhanced-E-HR-Management-System"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Enhanced E-HR Management System</h2>
          </a>
          <p>
            Built a basic HR management system in Python using Tkinter and
            Firebase to learn CRUD operations and database integration.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/ChampionSamay1644/HandCricket-MiniProject"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={handcricket}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/ChampionSamay1644/HandCricket-MiniProject"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Hand Cricket</h2>
          </a>
          <p>
            A fun hand cricket simulation built as an Android app using Java and
            XML. Practiced game logic, UI design, and user interaction with
            Android Studio.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/ChampionSamay1644/flappybirdcopy"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={flappybird}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/ChampionSamay1644/flappybirdcopy"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Flappy Bird Clone</h2>
          </a>
          <p>
            Flappy Bird is a simple yet engaging desktop game developed in Java
            using Swing and JFrame. It provides a fun way to practice event
            handling, game loops, and basic UI logic while improving hand-eye
            coordination and perseverance for young players.
          </p>
        </div>

        {/* <div className="project">
          <a
            href="https://placeholder-link.com/career-chatbot"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock16} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://placeholder-link.com/career-chatbot"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Career Pathway Chatbot</h2>
          </a>
          <p>
            Built an AI-powered chatbot that recommends careers based on user
            interests and hobbies, and generates a step-by-step pathway.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Project;
