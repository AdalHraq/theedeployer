import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetail.css";
import ParticleBackground from "../components/ParticleBackground";

// ✅ Assets
import mindspringLogo from "../assets/mindspring.jpeg";
import mindq from "../assets/MindQ.jpeg";

import linkai from "../assets/linkai.jpg";
import mainBoard from "../assets/MainBoard.jpeg";
import dashboardd from "../assets/Dashboardd.jpeg";
import dashboarddd from "../assets/Dashboarddd.jpeg";
import monitor from "../assets/Monitor.jpeg";
import offenderIntel from "../assets/OffenderIntel.jpeg";

import shush from "../assets/shush.jpg";

const projects = {
  "mindspring": {
    title: "Mindspring Tuition",
    img: mindspringLogo, // ✅ top hero stays the logo
    description: "A modern, responsive tuition centre website providing high-quality online education.",
    content: `Mindspring Tuition was designed to provide parents and students with a seamless learning management experience. 
    It includes online booking, live class integration, and student progress tracking — all wrapped in a modern responsive UI.`,

    // ✅ only one gallery image
    gallery: [mindq],

    features: [
      "Responsive design for all devices",
      "Interactive booking system",
      "Student progress tracking dashboard",
      "Firebase authentication for secure logins",
      "Modern, parent-friendly UI"
    ],
    tech: ["React", "CSS", "Firebase", "Node.js"]
  },

  "crime-ai": {
    title: "CrimeLink AI: Original",
    img: linkai,
    description: "CrimeLink AI is an advanced intelligence platform to detect, connect, and solve crimes.",
    content: `This project integrates multiple datasets across police forces, using AI-driven algorithms to predict patterns, 
    map hotspots, and improve investigation speed. It was designed to enhance collaboration across departments 
    and improve the accuracy of intelligence reports.`,

    // ✅ 6 image slots
    gallery: [linkai, mainBoard, dashboardd, dashboarddd, monitor, offenderIntel],

    features: [
      "Real-time crime hotspot mapping",
      "AI-powered suspect pattern detection",
      "Cross-police force data integration",
      "Automated intelligence reporting"
    ],
    tech: ["React", "Flask", "MongoDB", "AI Models", "Docker"]
  },

  "crime-east": {
    title: "CrimeLink AI: East Midlands (Undergoing)",
    img: shush,
    description: "Ongoing project to expand CrimeLink AI into the East Midlands.",
    content: "Adapts the system for regional policing strategies, integrates new datasets, and collaborates with local authorities.",

    // ✅ single image
    gallery: [shush],

    features: [
      "Local datasets integration",
      "Regional dashboards",
      "Predictive policing AI"
    ],
    tech: ["Python", "Django", "AI Pipelines"]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) return <h2 style={{ padding: "2rem", color: "#fff" }}>Project not found</h2>;

  return (
    <section className="project-detail">
      <ParticleBackground />
      <div className="wrap">
        {/* Hero */}
        <img src={project.img} alt={project.title} className="hero-img" />
        <h1>{project.title}</h1>
        <p className="desc">{project.description}</p>
        <p className="content">{project.content}</p>

        {/* Features */}
        {project.features && (
          <div className="features">
            <h2>Key Features</h2>
            <ul>
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech stack */}
        <div className="tech-stack">
          {project.tech.map((t, i) => (
            <span key={i} className="tech">{t}</span>
          ))}
        </div>

        {/* Gallery */}
        {project.gallery && (
          <div className="gallery">
            {project.gallery.map((g, i) => (
              <img key={i} src={g} alt={`screenshot-${i}`} />
            ))}
          </div>
        )}

        {/* Back button */}
        <Link to="/portfolio" className="back-btn">← Back to Portfolio</Link>
      </div>
    </section>
  );
}

