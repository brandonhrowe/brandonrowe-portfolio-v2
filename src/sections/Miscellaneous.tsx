import React from "react";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import constants from "../constants";

const { resume, experience, tech } = constants;

const ITEMS_PER_RING = 10;

const Miscellaneous = () => {
  return (
    <Hero className="misc-hero" id="misc">
      <div className="grid-top grid-h-center hero-title">
        <h1>Miscellaneous</h1>
        <h3>(aka all the other fun stuff)</h3>
      </div>
      <div className="misc-section resume grid-v-center grid-h-center">
        <h1>The resume I gift to you</h1>
        <h5>(It's free!)</h5>
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
          <span>Download resume</span>
        </a>
      </div>
      <div className="misc-section places grid-v-center grid-left">
        <h1>The places I've been</h1>
        <Logos logos={experience} className="places" />
      </div>
      <div className="misc-section tech-stack grid-v-center grid-right">
        <h1>The tech I've stacked</h1>
        <Logos logos={tech.slice(0, ITEMS_PER_RING)} className="tech tech1" />
        <Logos logos={tech.slice(ITEMS_PER_RING)} className="tech tech2" />
      </div>
    </Hero>
  );
};

export default Miscellaneous;
