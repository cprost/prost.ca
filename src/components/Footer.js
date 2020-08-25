import React from 'react'
import styled from '@emotion/styled'

import { theme } from '../styles'
import LogoGitHub from './icons/logo-github'
import LogoLinkedIn from './icons/logo-linkedin'
import LogoEmail from './icons/logo-email'

const FooterWrapper = styled.footer`
  position: absolute;
  flex-shrink: 0;
  width: 100%;
  bottom: 0;
  text-align: center;
`

const FooterItems = styled.div`

  display: inline-block;

  a {
    float: left;
    padding: 0 1.5rem;

    svg {
      width: 32px;
      height: 32px;
      fill: none;
    
      path {
        fill: ${theme.colours.palette100};
      }

      polyline, rect {
        stroke: ${theme.colours.palette100};
      }
    }
  }
`

const Copyright = styled.p`
  color: ${theme.colours.palette100};
  text-shadow: 0 0 2px ${theme.colours.palette600};

  a {
    text-decoration: none;
    font-weight: 600;
    color: ${theme.colours.hilite200};
  }
`

const Footer = () => {

  return (
    <FooterWrapper>
      <FooterItems >
        <a href="https://github.com/cprost/" aria-label="GitHub">
          <LogoGitHub />
        </a>
        <a href="https://www.linkedin.com/in/cprost/" aria-label="LinkedIn">
          <LogoLinkedIn/>
        </a>
        <a href="mailto:chris.ulo.prost at gmail dot com" aria-label="Email">
          <LogoEmail />
        </a>
      </FooterItems>
      <Copyright>
        © 2020 Chris Prost | Built with 
        <a href="https://gatsbyjs.org/"> Gatsby</a>
      </Copyright>
    </FooterWrapper>
  )
}

export default Footer