import React, { useState, useEffect, useRef } from "react";
import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import Hero from "./components/Hero";
import constants from "./constants";
import "./App.scss";

const { backgroundVideo } = constants;

const App = () => {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const appRef = useRef(null);

  const handleScroll = () => {
    if (appRef.current) {
      const appEl: any = appRef.current;
      const opacity = Math.max(
        0,
        Math.min(
          0.6,
          (window.scrollY * 3) / appEl.scrollHeight -
            window.innerHeight / (appEl.scrollHeight * 2)
        )
      );
      setBackgroundOpacity(opacity);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="app" ref={appRef}>
      <Hero
        backgroundVideo={backgroundVideo}
        className="app-hero"
        style={{ backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }}
      >
        <Home />
        <AboutMe />
        <Projects />
        <Footer />
      </Hero>
    </div>
  );
};

export default App;
