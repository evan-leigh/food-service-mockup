import * as React from "react"

import Header from "./header"
import Footer from "./footer"

import { TypographyStyle } from 'react-typography'
import typography from '../utils/typography'

import '../sass/main.scss'

const Layout = ({ children }) => {
  return (
    <main>
      <TypographyStyle typography={typography} />
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
