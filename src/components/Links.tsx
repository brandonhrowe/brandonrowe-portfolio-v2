import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface LinksProps {
  className?: string
};

const links = [
  {
    component: faLinkedin,
    link: "https://www.linkedin.com/in/brandonhrowe/",
    key: "linkedin",
  },
  {
    component: faGithub,
    link: "https://github.com/brandonhrowe",
    key: "github",
  },
  {
    component: faMedium,
    link: "https://medium.com/@brandon.h.rowe",
    key: "medium",
  },
  {
    component: faEnvelope,
    link: "mailto:brandonhrowe@gmail.com?subject=Greetings!",
    key: "email",
  },
];

const Links = ({ className = "" }: LinksProps) => (
  <div className={`links-component ${className}`}>
    {links.map(({ component, link, key }) => (
      <a href={link} key={key}>
        <FontAwesomeIcon icon={component} />
      </a>
    ))}
  </div>
);

export default Links;
