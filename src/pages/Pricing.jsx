import React from "react";
import "./Pricing.css";
import ParticleBackground from "../components/ParticleBackground";

export default function Pricing() {
  return (
    <section className="pricing">
      {/* Particles background */}
      <ParticleBackground />

      {/* Content wrapper */}
      <div className="wrap">
        <h2>
          Our <span>Pricing</span>
        </h2>

        <div className="pricing-cards">
          {/* Starter Plan */}
          <div className="card">
            <h3>Starter</h3>
            <p className="price">£250</p>
            <ul>
              <li>Basic Website (3 Pages)</li>
              <li>Responsive Design</li>
              <li>Email Support</li>
            </ul>
            <a href="#contact" className="btn primary">Get Started</a>
          </div>

          {/* Professional Plan */}
          <div className="card featured">
            <h3>Professional</h3>
            <p className="price">£500</p>
            <ul>
              <li>Full Website / App</li>
              <li>Custom Features</li>
              <li>Priority Support</li>
              <li>1 Month Maintenance</li>
            </ul>
            <a href="#contact" className="btn primary">Choose Plan</a>
          </div>

          {/* Enterprise Plan */}
          <div className="card">
            <h3>Enterprise</h3>
            <p className="price">£1200+</p>
            <ul>
              <li>Advanced Platforms</li>
              <li>API Integration</li>
              <li>AI / Data Solutions</li>
              <li>Long-term Support</li>
            </ul>
            {/* ✅ Updated button to primary */}
            <a href="#contact" className="btn primary">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

