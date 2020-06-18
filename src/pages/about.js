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

const Skill = styled.span`
  background-color: ${props => props.color};
  color: ${theme.colours.light};
  font-weight: 600;
  margin: 0.5rem 0.5rem;
  padding: 0.5rem 0.6rem;
  border-radius: 3rem;
  display: inline-block;
`

const AboutWrapper = styled.div`
  p {
    font-size: 20px;
  }
`

const About = ({ data }) => {
  const { skills } = data.about
  const categories = Object.keys(skills)
  const skillColours = ["#d42", "#6c4 ", "#27d", "#888"]

  return (
    <Layout>
      <Section>
        <Container>
          <h2>About me</h2>
          <AboutWrapper dangerouslySetInnerHTML={{ __html: data.about.html }}/>
          {/* <SkillWrapper> */}
            {categories.map((category, index) => {
              const skillList = skills[category]
              return skillList.map((skill) => (
                <Skill color={skillColours[index]}>{skill}</Skill>
              ))
          })}
          {/* </SkillWrapper> */}
        </Container>
      </Section>
    </Layout>
  )
}

export default About