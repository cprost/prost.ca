import React, { Component } from 'react'
import styled from '@emotion/styled'
import ScrollReveal from 'scrollreveal'

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

class WorkSummary extends Component {
  constructor(props) {
    super(props)
    this.cardRefs = []
  }

  componentDidMount = () => {
    this.cardRefs.forEach((ref, i) => ScrollReveal().reveal(ref, theme.scrollReveal(i)));
  }

  render() {
    const cards = [1, 2, 3, 4, 5, 6]  // to be replaced with content later

    return (
      <Section>
        <Container>
          <p>Placeholder text for work & project summary</p>
          <ProjectCards>
            {cards.map((node, key) => {
              return <Card
                key={key}
                ref={ref => this.cardRefs[key] = ref}
                className="fadein"
                />
            })}
          </ProjectCards>
        </Container>
      </Section>
    )
  }
}

export default WorkSummary