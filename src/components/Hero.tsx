import React from "react";
import Video from "./Video";

type VideoSrcObj = {
  lowQuality?: object;
  highQuality?: object;
  placeholder?: string;
};

interface HeroProps {
  className?: string;
  backgroundVideo?: VideoSrcObj;
  children?: React.ReactNode;
  style?: Object;
}

const Hero = ({
  className = "",
  backgroundVideo,
  children,
  style
}: HeroProps) => (
  <section className={`hero-component ${className}`.trim()} style={style}>
    {backgroundVideo && (
      <Video
        className="background-video"
        sources={backgroundVideo}
        autoPlay
        muted
        loop
        preload="auto"
      />
    )}
    {children}
  </section>
);

export default Hero;
