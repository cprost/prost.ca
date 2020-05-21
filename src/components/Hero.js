import React from 'react'
import styled from '@emotion/styled'

import { Container } from '../styles'

const HeroWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: grey;
  padding-left: 2rem;
  padding-right: 2rem;
`

const Hero = ({myName}) => {
  return (
    <HeroWrapper>
      <Container>
        <h1>{myName}</h1>
        <p>Above name passed from parent</p>
        <p>Borders drawn for sizing up elements - Remove/toggle in Container</p>
      </Container>
    </HeroWrapper>
  )
}

export default Hero;