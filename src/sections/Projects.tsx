import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Picker from "../components/Picker";
import constants from "../constants";

const { projects } = constants;

const Projects = () => (
  <Hero className="projects-hero" id="projects">
    <div className="title-wrapper grid-top grid-h-center">
    <h1 className="hero-title">Projects</h1>
    </div>
    {/* <Carousel className="grid-v-center grid-h-center">
      {projects.map((proj) => (
        <Card {...proj} key={proj.title} />
      ))}
    </Carousel> */}
    <Picker className="grid-v-center grid-h-center" cards={projects} />
  </Hero>
);

export default Projects;
