import React from "react";
import Hero from "../components/Hero";
import headshot from "../assets/Rowe_Headshot_300x285.jpg";

const AboutMe = () => (
  <Hero className="about-me">
    <div className="grid-h-center grid-v-center about-me-content">
      <div className="about-me-text">
        <h1>About Me</h1>
        <p>
          I am a Fullstack Software Engineer, located in Brooklyn, NY. I
          specialize in JavaScript and the NERD stack (Node, Express, React,
          Postgres Databases), with additional experience in Python and Django.
          I have been employed as a Frontend Engineer at AMC Networks since 2019.
          <br />
          <br />I have several years of experience in the world of
          Film/Television Post-Production, working with clients such as HBO,
          Netflix, and IFC. In addition to programming, my interests include
          film, reading, and photography. I also teach workshops in analog film
          processing.
        </p>
      </div>
      <img
        src={headshot}
        alt="Brandon Rowe Headshot"
        title="Yes, it is I: Brandon Rowe"
        className="headshot"
      />
    </div>
  </Hero>
);

export default AboutMe;
