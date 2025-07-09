import React from "react";

import techstoreImg from "../assets/shush.jpg";
import devImg from "../assets/tom.jpeg";
import linkaiImg from "../assets/tommy.jpg";
import './Portfolio.css'; // ✅ make sure this exists

const projects = [
  {
    title: "CrimeLink AI: East Midlands",
    description:
      "Plan to pitch and expand CrimeLink AI to the East Midlands. Ongoing Project.",
    image: techstoreImg,
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Merchant City Cars Website",
    description:
      "New Supercar Business coming soon to Scotland, we had the honour to develop their website. Ongoing Project.",
    image: devImg,
    technologies: ["React Native", "Firebase", "Redux"],
    link: "#",
  },
  {
    title: "CrimeLink AI: Original",
    description:
      "Adal developed CrimeLink AI, an advanced Intelligence platform that helps police detect, conmnect, and solve crimes by using AI to analyse patterns, suspects, and real-time data across cases. ",
    image: linkaiImg,
    technologies: ["Vue.js", "D3.js", "Python"],
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <h2>
          Our <span className="highlight">Portfolio</span>
        </h2>
        <p>
          Explore our latest projects and see how we've helped businesses
          achieve their digital goals.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

