import React from 'react'
import styled from '@emotion/styled'

import Card from './reusable/Card'

import { Container, Section, theme } from '../styles'

const ProjectCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 3fr);
  align-items: center;
  grid-gap: 2rem;

  @media screen and (max-width: ${theme.screenSizes.large.value}) {
        grid-template-columns: repeat(2, 1fr);
    }
  @media screen and (max-width: ${theme.screenSizes.small.value}) {
      grid-template-columns: repeat(1, 1fr);
  }
`

const WorkSummary = () => {
  return (
    <Section>
      <Container>
        <p>Placeholder text for work & project summary</p>
        <ProjectCards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ProjectCards>
      </Container>
    </Section>
  )
}

export default WorkSummary