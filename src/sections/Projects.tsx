import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import constants from "../constants";

const { projects } = constants;

const Projects = () => (
  <Hero className="projects-hero">
    <h1 className="grid-top grid-h-center">Projects</h1>
    <Card {...projects[0]} className="grid-v-center grid-h-center" />
  </Hero>
);

export default Projects;
