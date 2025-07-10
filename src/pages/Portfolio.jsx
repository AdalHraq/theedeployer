import React from "react";
import "./Portfolio.css";
import tomImg from "../assets/tom.jpeg";
import linkaiImg from "../assets/linkai.jpg";
import shushImg from "../assets/shush.jpg";

const projects = [
  {
    title: "CrimeLink AI: East Midlands",
    description: "Plan to pitch and expand CrimeLink AI to the East Midlands. Ongoing Project.",
    image: shushImg,
    tech: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Merchant City Cars Website",
    description: "New Supercar Business coming soon to Scotland, we had the honour to develop their website. Ongoing Project.",
    image: tomImg,
    tech: ["React Native", "Firebase", "Redux"],
    link: "#"
  },
  {
    title: "CrimeLink AI: Original",
    description: "Adal developed CrimeLink AI, an advanced Intelligence platform that helps police detect, connect, and solve crimes by using AI to analyse patterns, suspects, and real-time data across cases.",
    image: linkaiImg,
    tech: ["Vue.js", "D3.js", "Python"],
    link: "#"
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h1>Our <span className="highlight">Work</span></h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((techItem, i) => (
                <span className="tech-tag" key={i}>{techItem}</span>
              ))}
            </div>
            <a className="view-project" href={project.link}>View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

