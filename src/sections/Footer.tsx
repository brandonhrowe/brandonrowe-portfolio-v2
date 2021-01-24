import React from "react";
import Links from "../components/Links";
import Copyright from "../components/Copyright";
import constants from "../constants";

const { personalLinks } = constants;

const Footer = () => (
  <footer>
    <Links links={personalLinks} size="2x" />
    <Copyright />
  </footer>
);

export default Footer;
