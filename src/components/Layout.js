import React from "react"
import styled from '@emotion/styled'

import GlobalCSS from '../styles/GlobalCSS'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Float = styled.div`
  height: 65px;
`

const Layout = ({children}) => (
    <Main>
      <GlobalCSS />
      <Navigation />
      {children}
      <Float>
        <Footer />
      </Float>
    </Main>
)

export default Layout