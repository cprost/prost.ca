import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import WorkSummary from '../components/WorkSummary'

import { Gradient, theme } from '../styles'

const IndexPage = ({ data }) => (
    <Layout>
      <Hero data={data.hero.about} />
      <Gradient />
      <WorkSummary />
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
  }
`