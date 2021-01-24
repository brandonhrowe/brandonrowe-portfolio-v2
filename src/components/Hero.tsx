import React from "react";

interface HeroProps {
  className?: string;
  backgroundVideo?: string;
  children?: React.ReactNode;
}

const Hero = ({ className = "", backgroundVideo, children }: HeroProps) => (
  <section
    className={`hero-component ${className}`.trim()}
  >
    {backgroundVideo && (
      <video
        className="background-video"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />
    )}
    {children}
  </section>
);

export default Hero;
