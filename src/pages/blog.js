import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/Layout'
import { Container } from '../styles'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"  }}) {
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
  `)

  return (

    <Layout>
      <Container>
        <ul>
          {data.allMarkdownRemark.edges.map((post) => {
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
    </Layout>
  )
}

export default BlogPage