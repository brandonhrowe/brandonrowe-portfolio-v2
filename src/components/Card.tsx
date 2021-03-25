import React from "react";
import Links from "./Links";

interface CardProps {
  title: string;
  description: string;
  links?: any;
  image?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card = ({
  title,
  description,
  links,
  image,
  children,
  className = "",
}: CardProps) => (
  <div className={`card-component ${className}`}>
    <div className="card-container">
      <div className="card-image">
        <div className="card-image-filter" />
        <img src={image} alt={title} title={title} className="card-image" />
      </div>
      <div className="card-text title">
        <h1>{title}</h1>
        <Links links={links} className="card-links icons-mobile-secondary icons-desktop-secondary" />
      </div>
      <div className="card-text description">
        <p>{description}</p>
      </div>
      {children}
    </div>
  </div>
);

export default Card;
