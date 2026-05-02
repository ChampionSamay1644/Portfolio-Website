import React from "react";
import Chip from "@mui/material/Chip";
import "../assets/styles/Experience.scss";

const bigShortsSkills = ["Python", "GCP", "Azure", "ML Pipelines", "Selenium", "Pandas", "Ultralytics"];
const rkdemySkills = ["AWS", "S3", "Data Pipelines", "Video Processing", "Database Management"];

function Experience() {
  return (
    <div id="experience" className="experience-section">
      <h1>Experience</h1>

      <div className="experience-card">
        <div className="experience-card-header">
          <div>
            <h2>Software Developer Intern</h2>
            <h4>BigShorts.co &nbsp;|&nbsp; Dec 2024 – Mar 2025</h4>
          </div>
          <span className="exp-tag">Full-time On-site</span>
        </div>
        <ul className="experience-bullets">
          <li>Built scalable web scraping pipelines to collect and preprocess large-scale video datasets for ML model training</li>
          <li>Integrated and tested multi-tier recommendation models for personalized video delivery — covering collaborative and content-based filtering approaches</li>
          <li>Optimized ML training workflows on Google Cloud (GCP) and Azure, reducing pipeline runtime through parallelized data loading and GPU scheduling</li>
          <li>Worked with Ultralytics (YOLO) for video content analysis and classification tasks</li>
        </ul>
        <div className="flex-chips exp-chips">
          <span className="chip-title">Stack:</span>
          {bigShortsSkills.map((label, index) => (
            <Chip key={index} className="chip" label={label} />
          ))}
        </div>
      </div>

      <div className="experience-card">
        <div className="experience-card-header">
          <div>
            <h2>Backend Support Executive</h2>
            <h4>RKDEMY &nbsp;|&nbsp; June 2024</h4>
          </div>
          <span className="exp-tag">Internship</span>
        </div>
        <ul className="experience-bullets">
          <li>Managed AWS-based backend infrastructure for structured video content storage and retrieval</li>
          <li>Systematically organized a large-scale video database — categorized, tagged, and structured 1000+ assets for efficient retrieval</li>
          <li>Ensured data integrity across S3 buckets and optimized metadata schemas for faster query performance</li>
        </ul>
        <div className="flex-chips exp-chips">
          <span className="chip-title">Stack:</span>
          {rkdemySkills.map((label, index) => (
            <Chip key={index} className="chip" label={label} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
