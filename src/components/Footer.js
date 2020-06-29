import React from 'react'
import styled from '@emotion/styled'

import { theme } from '../styles'
import LogoGitHub from './icons/logo-github'
import LogoInstagram from './icons/logo-instagram'
import LogoLinkedIn from './icons/logo-linkedin'

const FooterWrapper = styled.footer`
  position: absolute;
  flex-shrink: 0;
  width: 100%;
  bottom: 0;
  text-align: center;
`

const FooterList = styled.ul`
  padding: 0;
  display: inline-block;
  list-style-type: none;
`

const FooterItem = styled.li`
  float: left;
  padding: 0 1rem;
`

const FooterItems = styled.div`

  display: inline-block;

  a {
    float: left;
    padding: 0 1.5rem;
  }
`

const Copyright = styled.p`
  color: ${props => props.index ? theme.colours.light : theme.colours.dark};

  a {
    text-decoration: none;
    color: ${props => props.index ? theme.colours.light : theme.colours.midBlueDark};
  }
`

const Footer = (props) => {

  return (
    <FooterWrapper>
      <FooterItems >
        <a href="https://github.com/cprost/">
          <LogoGitHub className={props.index ? 'social-icon index' : 'social-icon'}/>
        </a>
        <a href="https://www.linkedin.com/in/cprost/">
          <LogoLinkedIn className={props.index ? 'social-icon index' : 'social-icon'}/>
        </a>
        <a href="https://www.instagram.com/">
          <LogoInstagram className={props.index ? 'social-icon index' : 'social-icon'}/>
        </a>
      </FooterItems>
      <Copyright index={props.index}>
        © 2020 Chris Prost | Built with 
        <a href="https://gatsbyjs.org/" > Gatsby</a>
      </Copyright>
    </FooterWrapper>
  )
}

export default Footer