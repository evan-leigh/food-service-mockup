import * as React from "react"

import { Link } from "gatsby"

import MobileMenu from "../assets/icons/mobile-menu.svg"

import { CSSTransition } from "react-transition-group"

const MobileNavigation = () => {
  const [open, setOpen] = React.useState(false)

  const Panel = ({ className }) => {
    return (
      <nav className={className}>
        <Link className="link large" to="/"> How It Works </Link>
        <Link className="link large" to="/"> Blog </Link>
        <Link className="link large" to="/"> Pricing </Link>
        <Link className="link large" to="/"> Sign up </Link>
      </nav>
    )
  }

  return (
    <div className={open ? "mobile open" : "mobile close"}>
      <MobileMenu onClick={() => setOpen(!open)} />
      <CSSTransition in={open} timeout={400} classNames="panel" unmountOnExit>
        <Panel className="panel" />
      </CSSTransition>
    </div>
  )
}

const DesktopNavigation = () => {
  return (
    <nav className="desktop">
      <Link className='link small' to="/"> How It Works </Link>
      <Link className='link small' to="/"> Blog </Link>
      <Link className='link small' to="/"> Pricing </Link>
      <Link className='link small' to="/"> Sign up </Link>
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
