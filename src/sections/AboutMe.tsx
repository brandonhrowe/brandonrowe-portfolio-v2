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
          specialize in JavaScript and React, with experience in other technologies such as
          Python, Redux, Zustand, Express, Media Source Extensions,and ffmpeg.
          I have been employed as a Software Engineer for the Video Playback
          team at Vimeo since 2021.
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
