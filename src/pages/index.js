import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import WorkSummary from '../components/WorkSummary'

import { Section, EdgeTop, EdgeBottom, theme } from '../styles'

const IndexSection = styled(Section)`
  margin-top: 0;
  background-color: ${theme.colours.light};
`

const IndexPage = ({ data }) => (
  <Layout index={true}>
    <SEO title="Software Developer" />
    <Hero data={data.hero.about} />
    <EdgeTop />
    <IndexSection>
      <WorkSummary data={data.experience.edges} />
    </IndexSection>
    <EdgeBottom />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    hero: markdownRemark(fileAbsolutePath: { regex: "/hero/" }) {
      about: frontmatter {
        title
        subtitle
        description
      }
    }
    experience: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/experience/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            skills
            featuredImage {
              childImageSharp {
                fluid (
                  maxWidth: 600,
                  quality: 90,
                  ){
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`