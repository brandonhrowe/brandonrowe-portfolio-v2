import React from "react";
import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import Footer from "./sections/Footer";
import "./App.scss";

const App = () => (
  <div id="app">
    <Home />
    <AboutMe />
    <Footer />
  </div>
);

export default App;
