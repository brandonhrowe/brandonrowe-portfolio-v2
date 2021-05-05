import React from "react";
import Video from "./Video";

type VideoSrcObj = {
  lowQuality?: object;
  highQuality?: object;
  placeholder?: string;
};

interface HeroProps {
  className?: string;
  id?: string;
  backgroundVideo?: VideoSrcObj;
  children?: React.ReactNode;
  style?: Object;
}

const Hero = ({
  id,
  className = "",
  backgroundVideo,
  children,
  style
}: HeroProps) => (
  <section id={id} className={`hero-component ${className}`.trim()} style={style}>
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
