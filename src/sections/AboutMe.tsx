import React from "react";
import Hero from "../components/Hero";
import headshot from "../assets/Rowe_Headshot_300x285.jpg";

const AboutMe = () => (
  <Hero className="about-me">
    <div className="grid-h-center grid-v-center about-me-content">
      <img
        src={headshot}
        alt="Brandon Rowe Headshot"
        title="Yes, it is I: Brandon Rowe"
        className="headshot"
      />
      <div className="about-me-text">
        <h1>About Me</h1>
        <p>
          I am a Fullstack Software Engineer, located in Brooklyn, NY. I
          specialize in JavaScript and the NERD stack (Node, Express, React,
          Postgres Databases), with additional experience in Python and Django.
          <br />
          <br />I have several years of experience in the world of
          Film/Television Post-Production, working with clients such as HBO,
          Netflix, and IFC. In addition to programming, my interests include
          film, reading, and photography. I also teach workshops in analog film
          processing.
        </p>
      </div>
    </div>
  </Hero>
);

export default AboutMe;
