import React, { useState } from "react";

type VideoSourcesObj = {
  lowQuality?: object;
  highQuality?: object;
  placeholder?: string;
};

interface VideoProps {
  sources: VideoSourcesObj;
  className?: string;
  [x: string]: any;
}

const Video = ({
  sources: { lowQuality, highQuality, placeholder },
  className,
  ...attrs
}: VideoProps) => {
  const [isVideoLoaded, setVideoLoaded] = useState(false);

  const onLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <>
      {!isVideoLoaded && placeholder && (
        <img
          src={placeholder}
          className={className}
          alt="video-placeholder"
          title="video-placeholder"
        />
      )}
      <video className={className} {...attrs} onLoadedData={onLoaded}>
        {lowQuality && <source {...lowQuality} />}
        {highQuality && <source {...highQuality} />}
        Sorry, your browser doesn't support embedded videos.
      </video>
    </>
  );
};

export default Video;
