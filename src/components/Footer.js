import React from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
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

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterList>
        <FooterItem>LinkedIn</FooterItem>
        <FooterItem>GitHub</FooterItem>
        <FooterItem>Instagram</FooterItem>
      </FooterList>
    </FooterWrapper>
  )
}

export default Footer