import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Particles from 'react-particles-js'

import { IndexContainer, theme } from '../styles'
import params from '../styles/particles'

const HeroWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${theme.colours.midBlue};
  font-family: Montserrat;
  padding-left: 2rem;
  padding-right: 2rem;
`

const ParticleBackground = styled(Particles)`
  position: absolute;
  height: calc(100vh + 8rem);
  width: 100vw;
  left: 0;
  opacity: ${props => props.isMounted ? 1 : 0};
  transition: opacity 2s ease-in-out;
  background-color: ${theme.colours.midBlue};
`

const HeroTitle = styled.h1`
  margin-bottom: 0;
  color: ${theme.colours.light};
  font-weight: 500;
  text-shadow: 1px 1px 0px ${theme.colours.midBlue}, -1px -1px 0px ${theme.colours.midBlue};
`

const HeroSubtitle = styled.h3`
  margin-top: 1rem;
  margin-bottom: 0;
  color: ${theme.colours.light};
  text-shadow: 0 0 2px ${theme.colours.midBlue}, 0 0 2px ${theme.colours.midBlue};
`

const HeroDesc = styled.h3`
  margin-top: 0.5rem;
  color: ${theme.colours.light};
  text-shadow: 0 0 2px ${theme.colours.midBlue}, 0 0 2px ${theme.colours.midBlue};
`

const Hero = ({data}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 200)
  }, []);

  const title = <HeroTitle style={{ transitionDelay: '200ms' }}>{data.title}</HeroTitle>
  const subtitle = <HeroSubtitle style={{ transitionDelay: '400ms' }}>{data.subtitle}</HeroSubtitle>
  const desc = <HeroDesc style={{ transitionDelay: '600ms' }}>{data.description}</HeroDesc>

  const heroItems = [title, subtitle, desc]  // for transitioning/displaying in order

  return (
    <HeroWrapper>
      <ParticleBackground params={params} isMounted={isMounted} />
      <IndexContainer>
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
      </IndexContainer>
    </HeroWrapper>
  )
}

export default Hero;