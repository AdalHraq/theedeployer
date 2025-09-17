import React from "react";
import "./Portfolio.css";
import a from "../assets/tom.jpeg";
import b from "../assets/tommy.jpg";
import c from "../assets/techstore.png";

const items = [
  { t:"CrimeLink AI: East Midlands", d:"Plan to pitch and expand CrimeLink AI to the East Midlands. Ongoing Project.", img:a },
  { t:"Merchant City Cars Website",  d:"New Supercar business coming soon to Scotland; ongoing project.", img:b },
  { t:"CrimeLink AI: Original",      d:"Advanced intelligence platform to detect, connect and solve crimes.", img:c },
];

export default function Portfolio(){
  return (
    <section className="pf">
      <div className="wrap">
        <h2>Our <span>Work</span></h2>
        <div className="row">
          {items.map((x,i)=>(
            <article key={i} className="pcard">
              <img src={x.img} alt="" />
              <h3>{x.t}</h3>
              <p>{x.d}</p>
              <a href="#" className="view">View Project →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

