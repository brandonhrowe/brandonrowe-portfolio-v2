import React from "react";
import constants from "../constants";

const { resume } = constants;

interface HeaderProps {
  color: number;
}

const headerLinks = [
  {
    text: "About Me",
    link: "#about-me",
    className: "desktop-only"
  },
  {
    text: "Projects",
    link: "#projects",
    className: "desktop-only"
  },
  {
    text: "Miscellaneous",
    link: "#misc",
    className: "desktop-only"
  },
  {
    text: "Contact Me",
    link: "#footer",
  },
  {
    text: "Resume",
    link: resume,
    external: true,
  },
];

const isExternal = (ext = false) => {
  let res = {};
  if (ext) {
    res = {
      target: "_blank",
      rel: "noreferrer",
    };
  }
  return res;
};

const getTextStyling = (val = 0) => {
  console.log("val", val);
  const col = val * 255 * (5 / 3);
  return {
    color: `rgba(${Array(3).fill(col).join(', ')}, ${1 - val})`,
  };
};

const Header = ({ color }: HeaderProps) => (
  <header style={getTextStyling(color)}>
    {headerLinks.map(({ text, link, external, className }) => (
      <a href={link} {...isExternal(external)} className={className}>
        {text}
      </a>
    ))}
  </header>
);

export default Header;
