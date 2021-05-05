import React from "react";

interface LogoProps {
  logo: string;
  name: string;
  className?: string;
}

interface LogosProps {
  logos: Array<LogoProps>;
  className?: string;
}

const Logo = ({ logo, name, className }: LogoProps) => (
  <div className={`logo-component ${className}`}>
    <img src={logo} title={name} alt={name} />
  </div>
);

const Logos = ({ logos, className }: LogosProps) => (
  <div className={`logos-component ${className}`}>
    {logos.map(({ logo, name, className: logoClass }) => (
      <div className="logo-wrapper" key={name}>
        <Logo logo={logo} name={name} className={logoClass} />
      </div>
    ))}
  </div>
);

export default Logos;
export { Logo };
