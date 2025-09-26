import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ParticleBackground from "../components/ParticleBackground";
import founder from "../assets/founder.jpg";
import "../Styles/HeroCarousel.css";

function HeroCarousel() {
  return (
    <div className="hero-carousel">
      {/* Particles behind everything */}
      <ParticleBackground />

      <div className="carousel-content">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={5000}
          showStatus={false}
        >
          {/* Hero Slide */}
          <div className="slide">
            <h1>
              INNOVATING THE <span>DIGITAL FRONTIER</span>
            </h1>
            <p>Transform your vision into reality with cutting-edge solutions.</p>
            <div className="actions">
              <a href="#contact" className="btn primary">Contact Us</a>
              <a href="#services" className="btn ghost">Explore Services</a>
            </div>
          </div>

          {/* About Slide */}
          <div className="about-slide">
            <img src={founder} alt="Adal" className="profile-pic" />
            <div className="about-text">
              <h2>About Adal</h2>
              <p>
                Adal Hassan Raqoob is a Computer Science graduate and founder of TheeDeployer, passionate about driving digital innovation. With experience in AI, software engineering, and legal-tech, he has built tools that merge technical expertise with real-world problem-solving.

His mission is to help businesses and people transform ideas into impactful digital solutions.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default HeroCarousel;

