import React from "react";
import Links from "../components/Links";
import Copyright from "../components/Copyright";
import constants from "../constants";

const { personalLinks } = constants;

const Footer = () => (
  <footer>
    <Links links={personalLinks} size="2x" className="icons-mobile-secondary icons-desktop-secondary" />
    <Copyright />
  </footer>
);

export default Footer;
