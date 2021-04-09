import React from "react";
import Hero from "../components/Hero";
import constants from "../constants";

const { tech } = constants;

const Miscellaneous = () => {
  return (
    <Hero className="misc-hero">
      <div className="grid-top grid-h-center hero-title">
        <h1>Miscellaneous</h1>
        <h3>(aka all the other fun stuff)</h3>
      </div>
      <div className="tech-stack grid-v-center grid-right">
        <h1>Tech Stack</h1>
        <ul>
          {tech.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </Hero>
  );
};

export default Miscellaneous;
