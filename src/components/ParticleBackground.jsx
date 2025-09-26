// src/components/ParticleBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const particlesInit = async (engine) => {
    console.log("Particles engine:", engine); // Debug
    await loadSlim(engine); // ✅ slim engine instead of full
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#0d1117" }, // dark background
        },
        fpsLimit: 60,
        particles: {
          number: { value: 100, density: { enable: true, area: 800 } },
          color: { value: "#38b6ff" },
          links: {
            enable: true,
            color: "#38b6ff",
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: { default: "bounce" },
          },
          size: { value: { min: 1, max: 4 } },
          opacity: { value: 0.5 },
        },
        detectRetina: true,
      }}
    />
  );
}

