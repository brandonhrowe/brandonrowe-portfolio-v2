import React from "react";

interface LogoProps {
  logo: string;
  name: string;
}

interface LogosProps {
  logos: Array<LogoProps>;
  className?: string;
}

const Logo = ({ logo, name }: LogoProps) => (
  <div className="logo-component">
    <img src={logo} title={name} alt={name} />
  </div>
);

const Logos = ({ logos, className }: LogosProps) => (
  <div className={`logos-component ${className}`}>
    {logos.map(({ logo, name }) => (
      <div className="logo-wrapper" key={name}>
        <Logo logo={logo} name={name} />
      </div>
    ))}
  </div>
);

export default Logos;
export { Logo };
