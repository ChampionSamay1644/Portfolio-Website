import React from "react";
import "../assets/styles/Experience.scss";

function Experience() {
  return (
    <div id="experience" className="experience-section">
      <h1>Experience</h1>

      <div className="experience-card">
        <h2>Software Developer Intern</h2>
        <h4>BigShorts.co | Dec 2024 – Mar 2025</h4>
        <p>
          Developed a web scraping tool for model training data, tested and
          integrated multi-tiered ML models for video recommendations, and
          optimized training pipelines on Google Cloud & Azure.
        </p>
      </div>

      <div className="experience-card">
        <h2>Backend Support Executive</h2>
        <h4>RKDEMY | June 2024</h4>
        <p>
          Worked with AWS databases, systematically organized a large video
          database structure, and ensured efficient data retrieval and
          categorization.
        </p>
      </div>
    </div>
  );
}

export default Experience;
