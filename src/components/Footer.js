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
  color: ${theme.colours.dark};
`

const Footer = () => {
  return (
    <FooterWrapper>
      {/* <FooterList>
        <FooterItem>LinkedIn</FooterItem>
        <FooterItem>GitHub</FooterItem>
        <FooterItem>Instagram</FooterItem>
      </FooterList> */}
      <FooterItems>
        <a href="https://github.com/">
          <LogoGitHub className="social-icon"/>
        </a>
        <a href="https://github.com/">
          <LogoLinkedIn className="social-icon"/>
        </a>
        <a href="https://github.com/">
          <LogoInstagram className="social-icon"/>
        </a>
      </FooterItems>
      <Copyright>Copyright 2020</Copyright>
    </FooterWrapper>
  )
}

export default Footer