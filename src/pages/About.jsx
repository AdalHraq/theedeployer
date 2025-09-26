import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
import founder from "../assets/founder.jpg";
import dev from "../assets/dev.jpg";
import designer from "../assets/Jman.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        {/* Particle Background */}
        <ParticleBackground />

        <div className="about-content">
          <section className="intro">
            <h1>
              About <span className="highlight">TheeDeployer</span>
            </h1>
            <p>
              We’re a passionate team of developers, designers, and strategists
              committed to delivering exceptional digital experiences.
            </p>
          </section>

          <section className="story-section">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2025, TheeDeployer was born from a simple belief:
                every business deserves access to cutting-edge technology
                solutions. What began as my solo venture, with a little support
                along the way, has grown into a platform dedicated to delivering
                full-service digital innovation.
              </p>
              <p>
                Our mission is to bridge the gap between innovative technology
                and practical business solutions. We don’t just build software –
                we create digital experiences that drive growth and success.
              </p>
              <p>
                Today, we’ve helped several businesses transform their digital
                presence and achieve their goals through strategic technology
                implementation.
              </p>
            </div>
            <img
              src={founder}
              alt="Founder of TheeDeployer"
              className="story-image"
            />
          </section>

          <section className="values-section">
            <h2>Our Core Values</h2>
            <div className="value-cards">
              <div className="value-card">
                <div className="icon">💡</div>
                <h3>Innovation</h3>
                <p>
                  Constantly exploring new technologies and approaches to solve
                  complex problems.
                </p>
              </div>
              <div className="value-card">
                <div className="icon">🤝</div>
                <h3>Collaboration</h3>
                <p>
                  Working closely with clients as partners to achieve shared
                  success.
                </p>
              </div>
              <div className="value-card">
                <div className="icon">⭐</div>
                <h3>Excellence</h3>
                <p>
                  Delivering high-quality solutions that exceed expectations
                  every time.
                </p>
              </div>
              <div className="value-card">
                <div className="icon">🛡️</div>
                <h3>Integrity</h3>
                <p>
                  Building trust through transparent communication and ethical
                  practices.
                </p>
              </div>
            </div>
          </section>

          <section className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-cards">
              <div className="team-card">
                <img src={founder} alt="Adal Raqoob" />
                <h3>Adal Raqoob</h3>
                <p className="role">Founder & Developer</p>
                <p>Specialising in Software Design & Web Development</p>
              </div>
              <div className="team-card">
                <img src={dev} alt="Rafiul Islam" />
                <h3>Rafiul Islam</h3>
                <p className="role">Full Stack Developer</p>
                <p>Game and software development specialist</p>
              </div>
              <div className="team-card">
                <img src={designer} alt="Jawwad Ahmad" />
                <h3>Jawwad Ahmad</h3>
                <p className="role">Creative Director</p>
                <p>UI/UX designer focused on intuitive, engaging experiences</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

