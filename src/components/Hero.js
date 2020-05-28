import React from 'react'
import styled from '@emotion/styled'

import { Container, theme } from '../styles'

const HeroWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${theme.colours.midBlue};
  box-shadow: 0 0 50px black;
  padding-left: 2rem;
  padding-right: 2rem;
`

const HeroTitle = styled.h1`
  margin-bottom: 0;
  color: ${theme.colours.light};
`

const HeroSubtitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  color: ${theme.colours.offWhite};
`

const HeroDesc = styled.h4`
  margin-top: 0.75rem;
  color: ${theme.colours.light};
`

const Hero = ({myName}) => {
  return (
    <HeroWrapper>
      <Container>
        <HeroTitle>Hi, I'm {myName}.</HeroTitle>
        <HeroSubtitle>I'm a software engineer with a passion for machine learning.</HeroSubtitle>
        <HeroDesc>My favourite languages are Python, C++, and JavaScript. Not Java though.</HeroDesc>
      </Container>
    </HeroWrapper>
  )
}

export default Hero;