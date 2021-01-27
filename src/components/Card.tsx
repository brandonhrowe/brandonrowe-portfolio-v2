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
  <div
    className={`card-component ${className}`}
  >
    <img src={image} alt={title} title={title} className="card-image" />
    <div className="card-text">
      <h1>{title}</h1>
      <p>{description}</p>
      <Links links={links} className="card-links" />
    </div>
    {children}
  </div>
);

export default Card;
