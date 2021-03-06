import React from "react"
import styled from '@emotion/styled'

import GlobalCSS from '../styles/GlobalCSS'
import { theme } from '../styles/'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import backgroundSVG from '../images/backgroundSVG'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.colours.palette600};
  background-repeat: repeat;
  background-size: 900px;
  background-image: ${backgroundSVG};
`

const Float = styled.div`
  height: 100px;
  padding-top: 2rem;
`

class Layout extends React.Component {
  render() {
    const { children } = this.props

    // check if index page or not - shows Navigation animation on index page only
    const index = this.props.index !== undefined ? true : false;

    return (
      <Main index={index}>
        <GlobalCSS />
        <Navigation index={index} />
        {children}
        <Float>
          <Footer/>
        </Float>
      </Main>
    )
  }
}

export default Layout