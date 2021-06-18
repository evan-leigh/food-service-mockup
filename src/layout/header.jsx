import * as React from "react";

import { Link } from "gatsby";

import Button from "../components/button"

import MobileMenu from "../assets/svg/mobile-menu.svg";

import { CSSTransition } from "react-transition-group";
import Headroom from "react-headroom";

const MobileNavigation = () => {
  const [open, setOpen] = React.useState(false);

  const MobileLink = ({ children, to }) => (
    <Link className="link large" to={to}>
      {children}
    </Link>
  );

  const Panel = ({ className }) => (
    <nav className={className}>
      <MobileLink to="/">How It Works</MobileLink>
      <MobileLink to="/">Blog</MobileLink>
      <MobileLink to="/">Pricing</MobileLink>
      <MobileLink to="/">Sign up</MobileLink>
    </nav>
  );

  return (
    <div className={open ? "mobile open" : "mobile close"}>
      <MobileMenu className="mobile-menu" onClick={() => setOpen(!open)} />
      <CSSTransition in={open} timeout={400} classNames="panel" unmountOnExit>
        <Panel className="panel" />
      </CSSTransition>
    </div>
  );
};

const DesktopLink = ({ children, to }) => (
  <Link to={to} className="link">
    {children}
  </Link>
);

const DesktopNavigation = () => (
  <div className="desktop">
    <nav>
      <DesktopLink to="/">How It Works</DesktopLink>
      <DesktopLink to="/">Blog</DesktopLink>
      <DesktopLink to="/">Pricing</DesktopLink>
      <DesktopLink to="/">Sign up</DesktopLink>
      <Button className="primary" to="./">Get Started</Button>
    </nav>
  </div>
);

const Header = () => {
  return (
    <header>
      <Headroom>
        <DesktopNavigation />
      </Headroom>
      <MobileNavigation />
    </header>
  );
};

export default Header;
