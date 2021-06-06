import * as React from "react"

import { Link } from "gatsby"

import MobileMenu from "../assets/svg/mobile-menu.svg"

import { CSSTransition } from "react-transition-group"

const MobileNavigation = () => {
  
  const [open, setOpen] = React.useState(false)

  const MobileLink = ({children, to}) => {
     return <Link className="link medium" to={to}>{children}</Link>
  }

  const Panel = ({ className}) => {
    return (
      <nav className={className}>
        <MobileLink to="/">How It Works</MobileLink>
        <MobileLink to="/">Blog</MobileLink>
        <MobileLink to="/">Pricing</MobileLink>
        <MobileLink to="/">Sign up</MobileLink>
      </nav>
    )
  }

  return (
    <div className={open ? "mobile open" : "mobile close"}>
      <MobileMenu className="mobile-menu" onClick={() => setOpen(!open)}/>
      <CSSTransition in={open} timeout={400} classNames="panel" unmountOnExit>
        <Panel className="panel" />
      </CSSTransition>
    </div>
  )
}

const DesktopNavigation = () => {

  const DesktopLink = ({children, to}) => {
     return <Link to={to} className="link small">{children}</Link>
  }
  
  return (
    <nav className="desktop">
      <DesktopLink to="/">How It Works</DesktopLink>
      <DesktopLink to="/">Blog</DesktopLink>
      <DesktopLink to="/">Pricing</DesktopLink>
      <DesktopLink to="/">Sign up</DesktopLink>
    </nav>
  )
}

const Header = () => {
  return (
    <header>
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  )
}

export default Header
