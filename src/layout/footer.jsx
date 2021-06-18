import * as React from "react";
import { Link } from "gatsby";

import Facebook from "../assets/svg/social-media/facebook.svg";
import Twitter from "../assets/svg/social-media/twitter.svg";
import Pintrest from "../assets/svg/social-media/pintrest.svg";

import Button from "../components/button";


const WeeklyNewsletter = () => (
  <div className="weekly-newsletter">
    <p>Sign up for our Weekly News Letter</p>
    <form action="" className="links">
      <input type="text" className="link small" placeholder="Your email adress" />
      <Button className="primary link small" to="./">Sign up</Button>
    </form>
  </div>
);

const Legal = () => (
  <div className="legal">
    <p>Copyright © 2016-2021</p>
    <p>Terms {"&"} Conditions</p>
    <p>Privacy Policy</p>
  </div>
);

const MobileFooterLink = ({ children, to }) => (
  <Link className="link small" to={to}>
    {children}
  </Link>
);

const MobileFooter = () => (
  <div className="mobile">
    <WeeklyNewsletter />
      <div className="column navigate">
        <h3>Navigate</h3>
        <MobileFooterLink to="./">Sitemap</MobileFooterLink>
        <MobileFooterLink to="./">How it Works</MobileFooterLink>
        <MobileFooterLink to="./">Our Menu</MobileFooterLink>
        <MobileFooterLink to="./">Get Started</MobileFooterLink>
      </div>

      <div className="column company">
        <h3>Company</h3>
        <MobileFooterLink to="./">About us</MobileFooterLink>
        <MobileFooterLink to="./">Values</MobileFooterLink>
        <MobileFooterLink to="./">Our Farms</MobileFooterLink>
        <MobileFooterLink to="./">Sourced Products</MobileFooterLink>
      </div>
      
      <div className="column contact">
        <h3>Company</h3>
        <MobileFooterLink to="./">Conact us</MobileFooterLink>
        <MobileFooterLink to="./">FAQs</MobileFooterLink>
        <MobileFooterLink to="./">Help</MobileFooterLink>
        <MobileFooterLink to="./">Careers</MobileFooterLink>
      </div>
      <Legal />
  </div>
);

const DesktopFooterLink = ({ children, to }) => (
  <Link className="link small" to={to}>
    {children}
  </Link>
);

const SocialMediaIcons = () => (
  <div className="social-media-icons">
    <Facebook />
    <Twitter />
    <Pintrest />
  </div>
);


const DesktopFooter = () => (
  <div className="desktop">
    <div className="footer-actions">
      <SocialMediaIcons />
      <WeeklyNewsletter />
    </div>
    <nav>
      <div className="column navigate">
        <h3>Navigate</h3>
        <DesktopFooterLink to="./">Sitemap</DesktopFooterLink>
        <DesktopFooterLink to="./">How it Works</DesktopFooterLink>
        <DesktopFooterLink to="./">Our Menu</DesktopFooterLink>
        <DesktopFooterLink to="./">Get Started</DesktopFooterLink>
      </div>
      
      <div className="column company">
        <h3>Company</h3>
        <DesktopFooterLink to="./">About us</DesktopFooterLink>
        <DesktopFooterLink to="./">Values</DesktopFooterLink>
        <DesktopFooterLink to="./">Our Farms</DesktopFooterLink>
        <DesktopFooterLink to="./">Sourced Products</DesktopFooterLink>
      </div>
      
      <div className="column contact">
        <h3>Company</h3>
        <DesktopFooterLink to="./">Conact us</DesktopFooterLink>
        <DesktopFooterLink to="./">FAQs</DesktopFooterLink>
        <DesktopFooterLink to="./">Help</DesktopFooterLink>
        <DesktopFooterLink to="./">Careers</DesktopFooterLink>
      </div>
    </nav>
    <Legal />
  </div>
);

const Footer = () => (
  <footer>
    <DesktopFooter />
    <MobileFooter />
  </footer>
);

export default Footer;
