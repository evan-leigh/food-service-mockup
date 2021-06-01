
import * as React from "react"
import Header from "./header"
import Footer from "./footer"

import '../sass/main.scss'

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
