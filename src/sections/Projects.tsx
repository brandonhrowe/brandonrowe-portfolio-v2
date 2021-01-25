import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import constants from "../constants";

const { projects } = constants;

const Projects = () => (
  <Hero className="projects-hero">
    <h1 className="grid-top grid-h-center">Projects</h1>
    <Carousel className="grid-bottom grid-h-center">
      <Card {...{ ...projects[0], title: "One" }} />
      <Card {...{ ...projects[0], title: "Two" }} />
      <Card {...{ ...projects[0], title: "Three" }} />
      <Card {...{ ...projects[0], title: "Four" }} />
      <Card {...{ ...projects[0], title: "Five" }} />
    </Carousel>
  </Hero>
);

export default Projects;
