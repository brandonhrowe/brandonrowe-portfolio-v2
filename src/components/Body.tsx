import React from "react";
import Video from "../video.mp4";

const Body = () => (
  <div className="body">
    Body
    <div className="video-container">
      <video src={Video} autoPlay loop muted />
    </div>
  </div>
);

export default Body;
