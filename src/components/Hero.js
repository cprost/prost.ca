import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 500)
  }, []);

  const title = <HeroTitle style={{ transitionDelay: '200ms' }}>Hi, I'm {myName}.</HeroTitle>
  const subtitle = <HeroSubtitle style={{ transitionDelay: '400ms' }}>I'm a software engineer with a passion for machine learning.</HeroSubtitle>
  const desc = <HeroDesc style={{ transitionDelay: '600ms' }}>My favourite languages are Python, C++, and JavaScript. Not Java though.</HeroDesc>

  const heroItems = [title, subtitle, desc]  // for transitioning/displaying in order

  return (
    <HeroWrapper>
      <Container>
      <TransitionGroup>
        {isMounted && heroItems.map((node, i) => (
          <CSSTransition
            key={i}
            classNames="fadein"
            timeout={1000}
          >
            {node}
          </CSSTransition>
        ))}
        </TransitionGroup>
        {/* <HeroTitle style={{ transitionDelay: '100ms' }} className="fadein">Hi, I'm {a}.</HeroTitle>
        <HeroSubtitle>I'm a software engineer with a passion for machine learning.</HeroSubtitle>
        <HeroDesc>My favourite languages are Python, C++, and JavaScript. Not Java though.</HeroDesc> */}
      </Container>
    </HeroWrapper>
  )
}

export default Hero;