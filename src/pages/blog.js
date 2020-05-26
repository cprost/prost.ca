import React from 'react'
import {Link, graphql} from 'gatsby'

import Layout from '../components/Layout'
import { Container, Section, theme } from '../styles'
import Pagination from '../components/Pagination'

const postsPerPage = 10  // also defined in gatsby-node.js

export const query = graphql`
  query BlogPosts($skip: Int! = 0) {
    allMarkdownRemark( 
      filter: {fileAbsolutePath: {regex: "/blog/"  }}
      sort: {fields: [frontmatter___date], order: DESC}
      limit: 10
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title,
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const BlogPage = ({data: { allMarkdownRemark: blogPosts }, pageContext}) => {
  return (
    <Layout>
      <Section>
        <Container>
          <Pagination currentPage={pageContext.currentPage} totalCount={blogPosts.totalCount} postsPerPage={postsPerPage}/>
          <ul>
            {blogPosts.edges.map((post) => {
              return (
                <li>
                  <Link to={`/blog/${post.node.fields.slug}`}>
                    <h2>{post.node.frontmatter.title}</h2>
                    <p>{post.node.frontmatter.date}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>
    </Layout>
  )
}

export default BlogPage