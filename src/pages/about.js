import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import { Container, Section, theme } from '../styles'

export const query = graphql`
  query {
    about: markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
      skills: frontmatter {
        languages
        web_frameworks
        frameworks
        databases
      }
      html
    }
  }
`

const Skill = styled.p`
  color: ${props => props.color};
`

const About = ({ data }) => {
  const { skills } = data.about
  const categories = Object.keys(skills)
  const skillColours = ["#f00", "#0f0", "#00f", "#888"]

  return (
    <Layout>
      <Section>
        <Container>
          <h2>About me</h2>
          <div dangerouslySetInnerHTML={{ __html: data.about.html }}/>
          {categories.map((category, index) => {
            const skillList = skills[category]
            return skillList.map((skill) => (
              <Skill color={skillColours[index]}>{skill} {index}</Skill>
            ))
          })}
        </Container>
      </Section>
    </Layout>
  )
}

export default About