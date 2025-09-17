import React from "react";
import Hero from "../components/Hero.jsx";
import Services from "./Services.jsx";
import Portfolio from "./Portfolio.jsx";

export default function Home() {
  return (
    <>
      {/* Do NOT wrap Hero in a padded container */}
      <Hero />

      {/* Normal content below can use .section */}
      {/* <section className="section"><Services /></section>
      <section className="section"><Portfolio /></section> */}
    </>
  );
}

