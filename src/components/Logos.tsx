import React from "react";

interface LogoProps {
  logo: string;
  name: string;
}

interface LogosProps {
  logos: Array<LogoProps>;
}

const Logo = ({ logo, name }: LogoProps) => (
  <div className="logo-component">
    <img src={logo} title={name} alt={name} />
  </div>
);

const Logos = ({ logos }: LogosProps) => (
  <div className="logos-component">
    {logos.map(({ logo, name }) => (
      <Logo logo={logo} name={name} key={name} />
    ))}
  </div>
);

export default Logos;
export { Logo };
