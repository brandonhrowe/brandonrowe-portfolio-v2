import React from "react";

interface HeroProps {
  className?: string;
  backgroundVideo?: string;
  children?: React.ReactNode;
}

const Hero = ({ className = "", backgroundVideo, children }: HeroProps) => (
  <div
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
  </div>
);

export default Hero;
