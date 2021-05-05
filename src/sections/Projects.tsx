import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import constants from "../constants";

const { projects } = constants;

const Projects = () => (
  <Hero className="projects-hero">
    <div className="title-wrapper grid-top grid-h-center">
    <h1 className="hero-title">Projects</h1>
    </div>
    <Carousel className="grid-bottom grid-h-center">
      {projects.map((proj) => (
        <Card {...proj} key={proj.title} />
      ))}
    </Carousel>
  </Hero>
);

export default Projects;
