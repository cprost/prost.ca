import React from "react"
import styled from '@emotion/styled'

import GlobalCSS from '../styles/GlobalCSS'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import clouds from '../images/clouds.png'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${clouds});
`

const Float = styled.div`
  height: 100px;
  padding-top: 2rem;
`

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props

    return (
      <Main >
        <GlobalCSS />
        <Navigation />
        {children}
        <Float>
          <Footer />
        </Float>
      </Main>
    )
  }
}

export default Layout