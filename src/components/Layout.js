import React from "react"

import GlobalCSS from '../styles/GlobalCSS'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'


const Layout = ({children}) => (
    <main>
      <GlobalCSS />
      <Navigation />
      {children}
      <Footer />
    </main>
)

export default Layout