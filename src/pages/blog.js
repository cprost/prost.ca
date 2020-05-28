import React from 'react'
import {Link, graphql} from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import { Container, Section, theme } from '../styles'
import Pagination from '../components/Pagination'

const postsPerPage = 10  // also defined in gatsby-node.js

export const query = graphql`
  query BlogPosts($skip: Int! = 0, $limit: Int! = 10) {
    allMarkdownRemark( 
      filter: {fileAbsolutePath: {regex: "/blog/"  }}
      sort: {fields: [frontmatter___date], order: DESC}
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title,
            description,
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

const PostList = styled.ul`
  margin: 0rem;
  list-style-type: none;
  padding-left: 0rem;
`

const PostItem = styled.li`
  margin: 2rem 0rem;

  a {
    background-color: ${theme.colours.lighterBlue};
    color: ${theme.colours.dark};
    display: block;
    padding-top: 0.5rem;
    padding-left: 1.5rem;
    text-decoration: none;
    border-radius: 0.3rem;
    transition: 0.1s ease-in-out;
  }

  a:hover {
    background-color: ${theme.colours.lighterBlue};
    transition: 0.4s ease-in-out;
    box-shadow: 0 0 4px ${theme.colours.midBlue};
  }

  p {
    color: ${theme.colours.light};
    margin-top: 0.5rem;
    padding: 0.3rem 0;
    font-weight: 500;
    font-style: italic;
  }
`

const PostItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const BlogPage = ({data: { allMarkdownRemark: blogPosts }, pageContext}) => {
  return (
    <Layout>
      <Section>
        <Container>
          <h2>Blog Posts</h2>
          <PostList>
            {blogPosts.edges.map((post) => {
              return (
                <PostItem>
                  <Link to={`/blog/${post.node.fields.slug}`}>
                    <PostItemWrapper>

                    </PostItemWrapper>
                    <h3>{post.node.frontmatter.title}</h3>
                    <h4>{post.node.frontmatter.description}</h4>
                    <p>{post.node.frontmatter.date}</p>
                  </Link>
                </PostItem>
              )
            })}
          </PostList>
          <Pagination currentPage={pageContext.currentPage} totalCount={blogPosts.totalCount} postsPerPage={postsPerPage}/>
        </Container>
      </Section>
    </Layout>
  )
}

export default BlogPage