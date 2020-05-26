import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { Container, Section, theme } from '../styles'

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title,
        date
      }
      html
    }
  }
`

const BlogPost = (props) => {
  return (
    <Layout>
      <Section>
        <Container>
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <h3>{props.data.markdownRemark.frontmatter.date}</h3>
          <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </Container>
      </Section>
    </Layout>
  )
}

export default BlogPost