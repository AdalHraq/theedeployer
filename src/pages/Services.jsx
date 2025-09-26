import React from "react";
import "./Services.css";
import ParticleBackground from "../components/ParticleBackground";
import serviceVideo from "../assets/services-video.mp4.mp4"; // <-- add your mp4 file inside assets

const items = [
  { t: "Software Development", d: "Custom apps tailored to your needs" },
  { t: "Website Development", d: "Modern and responsive websites" },
  { t: "Mobile Apps", d: "Cross-platform mobile development" },
  { t: "Videography", d: "Professional video production (Not currently taking clients)" },
  { t: "Photography", d: "High-quality digital photography (Not currently taking clients)" },
  { t: "AI Tools", d: "Smart automation solutions" },
];

export default function Services() {
  return (
    <section className="svc">
      {/* Particles in background */}
      <ParticleBackground />

      <div className="wrap">
        <h2>
          Our <span>Services</span>
        </h2>

        {/* Video Section */}
        <div className="video-container">
        <video controls loop playsInline>
  <source src={serviceVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>

        </div>

        {/* Service Cards */}
        <div className="grid">
          {items.map((x, i) => (
            <article key={i} className="card">
              <h3>{x.t}</h3>
              <p>{x.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

