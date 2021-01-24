import React from "react";
import Hero from "../components/Hero";
import PersonalLinks from "../components/PersonalLinks";
import Copyright from "../components/Copyright";
import Video from "../assets/Portfolio_Video.mp4";

const Home = () => (
  <Hero backgroundVideo={Video} className="home">
    <div className="home-content grid-left grid-v-center">
      <h1>Brandon Rowe</h1>
      <h3>Fullstack Software Engineer</h3>
      <PersonalLinks />
      <Copyright />
    </div>
  </Hero>
);

export default Home;
