import React from "react";
import { FaCode, FaLaptopCode, FaMobileAlt, FaVideo, FaCamera, FaRobot } from "react-icons/fa";

const services = [
  {
    title: "Software Development",
    description: "Custom apps tailored to your needs",
    icon: <FaCode size={40} color="#38b6ff" />,
  },
  {
    title: "Website Development",
    description: "Modern and responsive websites",
    icon: <FaLaptopCode size={40} color="#38b6ff" />,
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile development",
    icon: <FaMobileAlt size={40} color="#38b6ff" />,
  },
  {
    title: "Videography",
    description: "Professional video production",
    icon: <FaVideo size={40} color="#38b6ff" />,
  },
  {
    title: "Photography",
    description: "High-quality digital photography",
    icon: <FaCamera size={40} color="#38b6ff" />,
  },
  {
    title: "AI Tools",
    description: "Smart automation solutions",
    icon: <FaRobot size={40} color="#38b6ff" />,
  },
];

const Services = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>OUR SERVICES</h2>
      <div style={styles.grid}>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{service.icon}</div>
            <h3 style={styles.title}>{service.title}</h3>
            <p style={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#0d1117",
    padding: "60px 20px",
    textAlign: "center",
    color: "#fff",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#0d1117",
    border: "1px solid #1a1f24",
    borderRadius: "10px",
    padding: "30px 20px",
    transition: "transform 0.3s ease",
  },
  icon: {
    marginBottom: "15px",
  },
  title: {
    color: "#38b6ff",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "15px",
    color: "#ccc",
  },
};

export default Services;

