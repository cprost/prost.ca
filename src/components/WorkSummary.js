import React, { Component } from 'react'
import styled from '@emotion/styled'
import ScrollReveal from 'scrollreveal'

import Card from './reusable/Card'

import { IndexContainer, theme } from '../styles'

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.Roboto};
  padding-bottom: 2rem;
`

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
    ScrollReveal().reveal(this.refs.title, theme.scrollReveal(0))
    this.cardRefs.forEach((ref, i) => ScrollReveal().reveal(ref, theme.scrollReveal(i)))
  }

  render() {
    const { data } = this.props

    return (
      <IndexContainer>
        <SectionTitle ref="title">Projects</SectionTitle>
        <ProjectCards>
        {data.map(({ node }, i) => {
          return (
            <div ref={ref => this.cardRefs[i] = ref}>
            <Card 
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              skills={node.frontmatter.skills}
              img={node.frontmatter.featuredImage.childImageSharp.fluid}
            />
            </div>
          )
        })}
        </ProjectCards>
      </IndexContainer>
    )
  }
}

export default WorkSummary