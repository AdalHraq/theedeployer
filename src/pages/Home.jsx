import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Services from "./Services.jsx"; // pages folder
import Portfolio from "./Portfolio.jsx"; // pages folder
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
      
    </>
  );
};

export default Home;

