import React from "react";
import Hero from "../components/Hero";
import Links from "../components/Links";
import constants from "../constants";

const { personalLinks } = constants;

const Home = () => (
  <Hero className="home">
    <div className="home-content grid-left grid-v-center">
      <h1>Brandon Rowe</h1>
      <h3>Software Engineer</h3>
      <Links
        links={personalLinks}
        className="icons-mobile-primary icons-desktop-secondary"
      />
    </div>
  </Hero>
);

export default Home;
