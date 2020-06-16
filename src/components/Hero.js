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
  padding-left: 2rem;
  padding-right: 2rem;
`

const HeroTitle = styled.h1`
  margin-bottom: 0;
  color: ${theme.colours.light};
  text-shadow: 1px 1px 0px ${theme.colours.midBlue}, -1px -1px 0px ${theme.colours.midBlue};
`

const HeroSubtitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  color: ${theme.colours.light};
  text-shadow: 0 0 2px ${theme.colours.midBlue}, 0 0 2px ${theme.colours.midBlue};
`

const HeroDesc = styled.h4`
  margin-top: 0.75rem;
  color: ${theme.colours.light};
  text-shadow: 0 0 2px ${theme.colours.midBlue}, 0 0 2px ${theme.colours.midBlue};
`

const Hero = ({data}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 500)
  }, []);

  const title = <HeroTitle style={{ transitionDelay: '200ms' }}>{data.title}</HeroTitle>
  const subtitle = <HeroSubtitle style={{ transitionDelay: '400ms' }}>{data.subtitle}</HeroSubtitle>
  const desc = <HeroDesc style={{ transitionDelay: '600ms' }}>{data.description}</HeroDesc>

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
      </Container>
    </HeroWrapper>
  )
}

export default Hero;