import React, { Component, useState, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import { Container, Section, theme } from '../styles'
import Pagination from '../components/Pagination'
import ScrollReveal from 'scrollreveal'

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
    background-color: ${theme.colours.midBlue};
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

class BlogPage extends Component {
  constructor(props) {
    super(props)
    this.postRefs = []
  }

  componentDidMount = () => {
    this.postRefs.forEach((postRef, i) => ScrollReveal().reveal(postRef, theme.scrollReveal(i)))
  }

  render() {
    const { data: { allMarkdownRemark: blogPosts }, pageContext } = this.props
    console.log(blogPosts)

    return (
      <Layout>
        <Section>        
          <Container>
          <h2>Blog Posts</h2>
           <PostList>
            {blogPosts.edges.map((post, key) => {
              return (
                <PostItem
                key={key}
                ref={ref => this.postRefs[key] = ref}
                >
                  <Link to={`/blog/${post.node.fields.slug}`}>
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
}


export default BlogPage