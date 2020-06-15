import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import ScrollReveal from 'scrollreveal'

import Layout from '../components/Layout'
import { Container, Section, Buffer, theme, media } from '../styles'
import Pagination from '../components/Pagination'

import Astro from '../images/gatsby-astronaut.png'

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
                fluid (maxWidth: 600) {
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

const BlogContainer = styled(Container)`
  max-width: 1024px;
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
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
  transition: 0.4s ease-in-out;

  ${media.small} {
    flex-direction: row;
  }

  &:hover {
    box-shadow: 0 0 8px ${theme.colours.midBlue};
  }
`

const PostImg = styled(Link)`
  height: 300px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  border-bottom: 2px solid ${theme.colours.offWhite};

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

  ${media.small} {
    flex: 2;
    overflow: hidden;
    border-left: 2px solid ${theme.colours.offWhite};
  }
`

const PostTitle = styled.h3`
  white-space: nowrap;
  font-weight: 700;
  font-family: ${theme.fonts.Roboto};
  color: ${theme.colours.midBlueDark};
  padding: 0.5rem 0;
`

const PostDescription = styled.h4`
  font-weight: 300;
  font-family: ${theme.fonts.Roboto};
  color: ${theme.colours.dark};

  ${media.small} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const PostDate = styled.p`
  font-style: italic;
  color: ${theme.colours.midBlueDark}; 

  ${media.small} {
    bottom: 0px;
    position: absolute;
  }
`

// class BlogPage extends Component {
//   constructor(props) {
//     super(props)
//     this.postRefs = []
//   }

//   componentDidMount = () => {
//     this.postRefs.forEach((postRef, i) => ScrollReveal().reveal(postRef, theme.scrollReveal(i)))
//   }

//   render() {
//     const { data: { allMarkdownRemark: blogPosts }, pageContext } = this.props
//     console.log(blogPosts)

//     return (
//       <Layout>
//         <Section>        
//           <Container>
//           <h2>Blog Posts</h2>
//            <PostList>
//             {blogPosts.edges.map((post, key) => {
//               return (
//                 <PostItem
//                 key={key}
//                 ref={ref => this.postRefs[key] = ref}
//                 >
//                   <Link to={`/blog/${post.node.fields.slug}`}>
//                     <h3>{post.node.frontmatter.title}</h3>
//                     <h4>{post.node.frontmatter.description}</h4>
//                     <p>{post.node.frontmatter.date}</p>
//                   </Link>
//                 </PostItem>
//               )
//             })}
//            </PostList>
//            <Pagination currentPage={pageContext.currentPage} totalCount={blogPosts.totalCount} postsPerPage={postsPerPage}/>
//           </Container>
//         </Section>
//       </Layout>
//     )
//   }
// }

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
        {/* <Buffer /> */}
        <Section>        
          <BlogContainer>
          <h2>Blog Posts</h2>
           <PostList>
            {blogPosts.edges.map((post, key) => {
              return (
                <div key={key} ref={ref => this.postRefs[key] = ref}>
                  <PostItem>
                    <PostImg to={`/blog/${post.node.fields.slug}`}>
                      <Img fluid={post.node.frontmatter.headerImage.childImageSharp.fluid} />
                    </PostImg>
                    <PostText to={`/blog/${post.node.fields.slug}`}>
                      <Link
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
          </BlogContainer>
        </Section>
      </Layout>
    )
  }
}


export default BlogPage