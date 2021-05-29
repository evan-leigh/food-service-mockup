import * as React from "react"

import { Link } from "gatsby"

import { device } from "./device"
import styled from "styled-components"

const Container = styled.header`
  padding: 30px var(--gap-small);
  max-width: var(--page-width);
  margin: 0 auto;
`

const NavigationMobile = styled.nav`
  display: flex;
  width: max-content; 
  margin-left: auto;
  display: none;
  
  @media ${device.tablet} {
    display: flex;
  }
`

const Navigation = styled.nav`
  display: flex;
  gap: var(--gap-large);
  width: max-content; 
  margin-left: auto;

  @media ${device.tablet} {
    display: none;
  }
`

const NavLink = ({children, to}) => {
   return (
    <Link to={to} className="link small">{children}</Link>
  )
}

const Header = () => (
  <Container>
      <Navigation>
        <NavLink to="/">How It Works</NavLink>
        <NavLink to="/">Blog</NavLink>
        <NavLink to="/">Pricing</NavLink>
        <NavLink to="/">Sign up</NavLink>
      </Navigation>

      <NavigationMobile>
        <NavLink to="/">How It Works</NavLink>
      </NavigationMobile>
  </Container>
)

export default Header
