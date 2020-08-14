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
  background-size: 1500px;
  background-image: ${props => props.index ? '' : backgroundSVG};
`

const Float = styled.div`
  height: 100px;
  padding-top: 2rem;
`

class Layout extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    const { children } = this.props

    return (
      <Main index={this.props.index}>
        <GlobalCSS />
        <Navigation index={this.props.index} />
        {children}
        <Float>
          <Footer/>
        </Float>
      </Main>
    )
  }
}

export default Layout