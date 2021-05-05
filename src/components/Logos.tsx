import React from "react";

interface LinkWrapperProps {
  link?: string;
  children: any;
}

interface LogoProps {
  logo: string;
  name: string;
  className?: string;
  link?: string;
}

interface LogosProps {
  logos: Array<LogoProps>;
  className?: string;
}

const LinkWrapper = ({ link, children }: LinkWrapperProps) => (
  <>
    {link ? (
      <a href={link} rel="noreferrer" target="_blank">
        {children}
      </a>
    ) : (
      <>{children}</>
    )}
  </>
);

const Logo = ({ logo, name, className, link }: LogoProps) => (
  <div className={`logo-component ${className}`}>
    <LinkWrapper link={link}>
      <img src={logo} title={name} alt={name} />
    </LinkWrapper>
  </div>
);

const Logos = ({ logos, className }: LogosProps) => (
  <div className={`logos-component ${className}`}>
    {logos.map(({ logo, name, className: logoClass, link }) => (
      <div className="logo-wrapper" key={name}>
        <Logo logo={logo} name={name} link={link} className={logoClass} />
      </div>
    ))}
  </div>
);

export default Logos;
export { Logo };
