import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SecurityIcon from "@mui/icons-material/Security";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BugReportIcon from "@mui/icons-material/BugReport";
import "../assets/styles/Achievements.scss";

const innovationAchievements = [
  {
    icon: <EmojiEventsIcon className="ach-icon ach-icon--gold" />,
    title: "2nd Prize – SCOE AVISHKAR 2026",
    subtitle: "Smart Wheelchair (SmartNav) – College-Level Technical Fest",
    rank: "🥈",
  },
  {
    icon: <WorkspacePremiumIcon className="ach-icon ach-icon--silver" />,
    title: "5th Rank – State Level Colloquium'26",
    subtitle: "Maharashtra State-Level Technical Competition",
    rank: "🏅",
  },
  {
    icon: <EmojiEventsIcon className="ach-icon ach-icon--gold" />,
    title: "Aavishkar Finalist – University of Mumbai",
    subtitle: "Research & Innovation Festival – University Finalist",
    rank: "🏆",
  },
];

const cyberAchievements = [
  {
    icon: <SecurityIcon className="ach-icon ach-icon--cyber" />,
    title: "Top 5 – RAIT CTF Finals",
    subtitle: "Capture The Flag Competition – Ranked Top 5 Nationally",
    rank: "🔐",
  },
  {
    icon: <BugReportIcon className="ach-icon ach-icon--cyber" />,
    title: "Web Exploitation & OSINT",
    subtitle: "Solved real-world web and intelligence-gathering challenges",
    rank: "🌐",
  },
  {
    icon: <SecurityIcon className="ach-icon ach-icon--cyber" />,
    title: "Reverse Engineering & Forensics",
    subtitle: "Binary analysis, digital forensics, and memory dump investigations",
    rank: "🔬",
  },
];

function Achievements() {
  return (
    <div className="achievements-section" id="achievements">
      <div className="achievements-inner">
        <h1>Key Achievements</h1>
        <p className="achievements-subtitle">
          Proven results across innovation competitions and cybersecurity challenges.
        </p>
        <div className="achievements-grid">
          {/* Left column – Innovation */}
          <div className="achievements-column achievements-column--innovation">
            <div className="column-header">
              <EmojiEventsIcon className="column-header-icon" />
              <h2>Project &amp; Innovation</h2>
            </div>
            <div className="ach-cards">
              {innovationAchievements.map((item, index) => (
                <div className="ach-card ach-card--innovation" key={index}>
                  <div className="ach-card-rank">{item.rank}</div>
                  <div className="ach-card-body">
                    {item.icon}
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column – Cybersecurity */}
          <div className="achievements-column achievements-column--cyber">
            <div className="column-header">
              <SecurityIcon className="column-header-icon" />
              <h2>Cybersecurity &amp; CTF</h2>
            </div>
            <div className="ach-cards">
              {cyberAchievements.map((item, index) => (
                <div className="ach-card ach-card--cyber" key={index}>
                  <div className="ach-card-rank">{item.rank}</div>
                  <div className="ach-card-body">
                    {item.icon}
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
