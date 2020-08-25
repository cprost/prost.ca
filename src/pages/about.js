import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Container, Section, theme, media } from '../styles'

export const query = graphql`
  query {
    about: markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
      skills: frontmatter {
        languages
        frameworks
        libraries
        databases
        other
      }
      html
    }
  }
`

const SkillWrapper = styled.div`
  display: flex;
`

const SubSection = styled.section`
  margin-bottom: 3rem;
`

const SkillList = styled.div`
  width: 75%;

  ${media.small} {
    width: 100%;
  }
`

const SkillCategories = styled.ul`
  width: 25%;
  margin-top: 0;
  padding-top: 0.5rem;
  border-left: 2px solid ${theme.colours.palette200};
  font-weight: 600;

  li {
    padding-bottom: 0.5rem;
  }

  ${media.small} {
    display: none;
  }
`

const Skill = styled.span`
  background-color: ${props => props.color};
  color: ${theme.colours.palette100};
  font-weight: 600;
  margin: 0.5rem 1rem 0.5rem 0;
  padding: 0.5rem 0.6rem;
  border-radius: 3rem;
  box-shadow: 3px 3px 5px ${props => props.color};
  display: inline-block;
  text-shadow: 1px 1px 1px ${theme.colours.palette600};

  ${media.small} {
    margin: 0.25rem 1rem 0.25rem 0;
  }
`

const About = ({ data }) => {
  const { skills } = data.about
  const categories = Object.keys(skills)
  const skillColours = ["#c53", "#6c4 ", "#27d", "#d92", "#798"]

  return (
    <Layout>
      <SEO title="About Me" />
      <Section>
        <Container >
          <SubSection>
            <h2>About me</h2>
            <div dangerouslySetInnerHTML={{ __html: data.about.html }}/>
            
          </SubSection>
          <SubSection>
          <h3>Skills</h3>
            <SkillWrapper>
              <SkillList>
                {categories.map((category, index) => {
                  const skillList = skills[category]
                  return skillList.map((skill) => (
                    <Skill key={skill} color={skillColours[index]}>{skill}</Skill>
                  ))
                })}
              </SkillList>
              <SkillCategories>
                {categories.map((category, index) => {
                  return <li key={category} style={{color: skillColours[index], textTransform: 'capitalize'}}>{category.replace(/_/g, ' ')}</li>
                })}
              </SkillCategories>
            </SkillWrapper>
          </SubSection>
        </Container>
      </Section>
    </Layout>
  )
}

export default About