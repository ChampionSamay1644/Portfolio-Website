import React from "react";
import SecurityIcon from "@mui/icons-material/Security";
import BugReportIcon from "@mui/icons-material/BugReport";
import SearchIcon from "@mui/icons-material/Search";
import MemoryIcon from "@mui/icons-material/Memory";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Chip from "@mui/material/Chip";
import "../assets/styles/Cybersecurity.scss";

const ctfCategories = [
  {
    icon: <BugReportIcon />,
    name: "Web Exploitation",
    description:
      "SQL Injection, XSS, IDOR, CSRF, broken auth — identifying and chaining web vulnerabilities.",
    color: "red",
  },
  {
    icon: <SearchIcon />,
    name: "OSINT",
    description:
      "Open-source intelligence gathering from social media, DNS records, public databases, and metadata.",
    color: "blue",
  },
  {
    icon: <MemoryIcon />,
    name: "Reverse Engineering",
    description:
      "Binary disassembly with GDB and Ghidra — cracking executables, uncovering hidden logic, anti-debug bypass.",
    color: "purple",
  },
  {
    icon: <FolderOpenIcon />,
    name: "Digital Forensics",
    description:
      "Memory dumps, disk images, steganography, and file carving using Volatility, Autopsy, and Binwalk.",
    color: "green",
  },
  {
    icon: <NetworkCheckIcon />,
    name: "Network Analysis",
    description:
      "PCAP analysis with Wireshark, identifying anomalous traffic, protocol dissection, and packet crafting.",
    color: "cyan",
  },
];

const toolList = [
  "Burp Suite",
  "Wireshark",
  "Nmap",
  "GDB",
  "Ghidra",
  "Volatility",
  "Autopsy",
  "Binwalk",
  "Metasploit",
  "Linux CLI",
];

function Cybersecurity() {
  return (
    <div className="cybersecurity-section" id="cybersecurity">
      <div className="cyber-inner">
        <h1>
          <SecurityIcon className="section-icon" /> Cybersecurity Experience
        </h1>
        <p className="cyber-subtitle">
          Active CTF competitor with hands-on experience across major offensive security domains.
        </p>

        {/* Top 5 callout */}
        <div className="cyber-highlight">
          <div className="cyber-highlight-rank">🏅 Top 5</div>
          <div className="cyber-highlight-text">
            <strong>RAIT CTF Finals</strong>
            <span>Ranked among the top 5 teams in the RAIT Capture The Flag competition — competing across web, forensics, crypto, and binary exploitation challenges.</span>
          </div>
        </div>

        {/* CTF Categories */}
        <h2 className="cyber-section-heading">Challenge Domains</h2>
        <div className="cyber-categories">
          {ctfCategories.map((cat, index) => (
            <div className={`cyber-category cyber-category--${cat.color}`} key={index}>
              <div className="cyber-cat-icon">{cat.icon}</div>
              <div className="cyber-cat-body">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <h2 className="cyber-section-heading">Tools &amp; Frameworks</h2>
        <div className="cyber-tools">
          {toolList.map((tool, index) => (
            <Chip
              key={index}
              label={tool}
              className="cyber-tool-chip"
              variant="outlined"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cybersecurity;
