import React from "react";
import Hero from "./Hero";
import Links from "./Links";
import Copyright from "./Copyright";
import Video from "../video.mp4";

const Home = () => (
  <Hero backgroundVideo={Video} className="home">
    <div className="grid-left grid-v-center">
      <h1>Brandon Rowe</h1>
      <h3>Fullstack Software Engineer</h3>
      <Links />
      <Copyright />
    </div>
  </Hero>
);

export default Home;
