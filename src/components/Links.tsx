import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LinkObj = {
  component: any;
  link: string;
  key: string;
  title?: string;
};

interface LinksProps {
  className?: string;
  links: LinkObj[];
}

const Links = ({ className = "", links = [] }: LinksProps) => (
  <div className={`links-component ${className}`}>
    {links.map(({ component, link, key, title }) => (
      <span key={key} className={title ? "text-link" : ""}>
        <a href={link} target="_blank" rel="noreferrer">
          {title ? `${title} ` : ""}
          <FontAwesomeIcon icon={component} />
        </a>
      </span>
    ))}
  </div>
);

export default Links;
