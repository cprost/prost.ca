import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import ScrollReveal from 'scrollreveal'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Container, Section, theme, media } from '../styles'
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
            date,
            headerImage {
              childImageSharp {
                fluid (maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  border-radius: 8px;
  box-shadow: ${theme.shadows.dark};
  background: ${theme.colours.palette100};
  transition: 0.4s ease-in-out;

  ${media.small} {
    flex-direction: row;
  }

  &:hover {
    box-shadow: ${theme.shadows.darker};

    h3 {
      color: ${theme.colours.palette700};
    }
  }
`

const PostImg = styled(Link)`
  height: 300px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  border-bottom: 2px solid ${theme.colours.palette200};

  .gatsby-image-wrapper {
    height: 100%;
  }

  ${media.small} {
    height: 150px;
    width: auto;
    flex: 1;
    border-radius: 8px 0 0 8px;
    border: none;
  }
`

const PostText = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.small} {
    flex: 2;
    overflow: hidden;
    border-left: 2px solid ${theme.colours.palette200};
  }
`

const PostTitle = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  font-family: ${theme.fonts.Roboto};
  color: ${theme.colours.palette600};
  padding: 0.5rem 0;
  transition: all 0.4s ease-in-out;

  &:hover {
    color: ${theme.colours.palette700};
  }
`

const PostDescription = styled.h4`
  font-weight: 300;
  font-family: ${theme.fonts.Roboto};
  color: ${theme.colours.palette700};

  ${media.small} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const PostDate = styled.p`
  font-style: italic;
  color: ${theme.colours.hilite400}; 

  ${media.small} {
    bottom: 0px;
    position: absolute;
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
        <SEO title="Blog" />
        <Section>        
          <Container transparent={true}>
          <h2>Recent Blog Posts</h2>
           <PostList>
            {blogPosts.edges.map((post, key) => {
              return (
                <div key={key} ref={ref => this.postRefs[key] = ref}>
                  <PostItem>
                    <PostImg to={`/blog/${post.node.fields.slug}`}>
                      <Img 
                        fluid={post.node.frontmatter.headerImage.childImageSharp.fluid}
                        alt={post.node.frontmatter.title}
                        durationFadeIn={0}
                      />
                    </PostImg>
                    <PostText to={`/blog/${post.node.fields.slug}`}>
                      <Link
                        to={`/blog/${post.node.fields.slug}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <PostTitle>{post.node.frontmatter.title}</PostTitle>
                      </Link>
                      <PostDescription>{post.node.frontmatter.description}</PostDescription>
                      <PostDate>{post.node.frontmatter.date}</PostDate>
                    </PostText>
                  </PostItem>
                </div>
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