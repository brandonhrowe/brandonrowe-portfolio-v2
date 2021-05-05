import React from "react";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import constants from "../constants";

const { resume, experience, tech } = constants;

const Miscellaneous = () => {
  return (
    <Hero className="misc-hero">
      <div className="grid-top grid-h-center hero-title">
        <h1>Miscellaneous</h1>
        <h3>(aka all the other fun stuff)</h3>
      </div>
      <div className="misc-section resume grid-v-center grid-h-center">
        <h1>The Resume I Gift To You</h1>
        <div className="arrow-down">
          <div>|</div>
          <div>|</div>
          <div>V</div>
        </div>
        <a
          href={resume}
          rel="noreferrer"
          target="_blank"
          className="resume-download"
        >
          <span>DOWNLOAD (It's Free!)</span>
        </a>
      </div>
      <div className="misc-section places grid-v-center grid-left">
        <h1>The Places I've Been</h1>
        <Logos logos={experience} className="experience" />
      </div>
      <div className="misc-section tech-stack grid-v-center grid-right">
        <h1>The Tech I Stack</h1>
        <Logos logos={tech} className="tech" />
      </div>
    </Hero>
  );
};

export default Miscellaneous;
