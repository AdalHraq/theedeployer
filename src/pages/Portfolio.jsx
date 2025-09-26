import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import ParticleBackground from "../components/ParticleBackground";
import a from "../assets/linkai.jpg";
import b from "../assets/mindspring.jpeg";
import c from "../assets/shush.jpg";

const items = [
  { id: "crime-ai", t: "CrimeLink AI: Original", d: "Advanced intelligence platform to detect, connect and solve crimes.", img: a },
  { id: "mindspring", t: "Mindspring Tuition", d: "State of the art website developed for a Tuition centre.", img: b },
  { id: "crime-east", t: "CrimeLink AI: East Midlands (Undergoing)", d: "Plan to pitch and expand CrimeLink AI to the East Midlands. Ongoing Project.", img: c },
];

export default function Portfolio() {
  return (
    <section className="pf">
      <ParticleBackground />

      <div className="wrap">
        <h2>
          Our <span>Work</span>
        </h2>
        <div className="row">
          {items.map((x, i) => (
            <article key={i} className="pcard">
              <img src={x.img} alt={x.t} />
              <h3>{x.t}</h3>
              <p>{x.d}</p>
              <Link to={`/project/${x.id}`} className="view">View Project →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

