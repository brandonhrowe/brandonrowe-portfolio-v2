import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import constants from "../constants";

const { projects } = constants;

const Projects = () => (
  <Hero className="projects-hero">
    <h1 className="grid-top grid-h-center hero-title">Projects</h1>
    <Carousel className="grid-bottom grid-h-center">
      {projects.map((proj) => (
        <Card {...proj} />
      ))}
    </Carousel>
  </Hero>
);

export default Projects;
