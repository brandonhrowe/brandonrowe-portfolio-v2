import React from "react";
import Hero from "./Hero";
import Video from "../video.mp4";

const Body = () => (
  <div className="content">
    <Hero backgroundVideo={Video}>
      <div className="grid-left grid-v-center">
        <h1>Brandon Rowe</h1>
        <h3>Fullstack Engineer</h3>
      </div>
    </Hero>
  </div>
);

export default Body;
