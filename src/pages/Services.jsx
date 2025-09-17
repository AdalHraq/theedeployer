import React from "react";
import "./Services.css";

const items = [
  { t:"Software Development", d:"Custom apps tailored to your needs" },
  { t:"Website Development",  d:"Modern and responsive websites" },
  { t:"Mobile Apps",          d:"Cross-platform mobile development" },
  { t:"Videography",          d:"Professional video production" },
  { t:"Photography",          d:"High-quality digital photography" },
  { t:"AI Tools",             d:"Smart automation solutions" },
];

export default function Services(){
  return (
    <section className="svc">
      <div className="wrap">
        <h2>Our <span>Services</span></h2>
        <div className="grid">
          {items.map((x,i)=>(
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

