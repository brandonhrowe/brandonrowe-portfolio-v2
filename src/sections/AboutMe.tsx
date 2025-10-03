import React from "react";
import Hero from "../components/Hero";
import headshot from "../assets/Rowe_Headshot_300x285.jpg";

const AboutMe = () => (
  <Hero className="about-me" id="about-me">
    <div className="grid-h-center grid-v-center about-me-content">
      <div className="about-me-text">
        <div className="title-wrapper">
          <h1 className="hero-title">About Me</h1>
        </div>
        <p>
          I am a Software Engineer, located in Brooklyn, NY. I
          specialize in JavaScript and React, with additional experience in
          Python, Golang, Zustand, Media Source Extensions,and ffmpeg. My work has made me particularly adept at video technologies for the web and beyond.
          I'm a Senior Software Engineer at Vimeo for the Video Playback team, where I have worked since 2021.
          <br />
          <br />
          In addition to programming, I have several years of experience working
          in the world of film. My interests include film, reading, and
          photography; I also teach workshops in analog film processing.
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
