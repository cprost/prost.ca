import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import { Container, Section, theme, media } from '../styles'

export const query = graphql`
  query($slug: String) {
    markdown: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        headerImage {
          childImageSharp {
            fluid (maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`

const PostContainer = styled(Container)`
  padding-left: 2rem;
  padding-right: 2rem;
  border: 2px solid ${theme.colours.offWhite};
  border-radius: 0.5rem;

  ${media.small} {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border: none;
  }
`

const PostTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: ${theme.colours.dark};
`

const PostDate = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: ${theme.colours.dark};
`

const PostContent = styled.div`
  margin-top: 2rem;
  ${'' /* border-top: 2px solid ${theme.colours.offWhite}; */}
  line-height: 1.5;
  font-family: ${theme.fonts.Roboto};
  color: ${theme.colours.dark};

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 28px;
  }

  h1, h2 {
    border-bottom: 2px solid ${theme.colours.offWhite};
    padding-bottom: 0.3rem;
    font-weight: 500;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  hr {
    color: ${theme.colours.offWhite};
    margin: 2rem 0;
  }

  ul, li {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 0;

    p {
      margin: 0;
    }
  }

  p {
    font-size: 16px;
  }

  .line-numbers-rows {
    margin-top: 1rem;
    margin-left: 1rem;
    border-right: 1px solid #666;
  }

  .gatsby-highlight {
    margin-bottom: 2rem;
  }
`

const BlogPost = (props) => {
  const { markdown } = props.data
  return (
    <Layout>
      <Section>
        <PostContainer>
          <PostTitle>{markdown.frontmatter.title}</PostTitle>
          <PostDate>{markdown.frontmatter.date}</PostDate>
          <PostContent dangerouslySetInnerHTML={{ __html: markdown.html }} />
        </PostContainer>
      </Section>
    </Layout>
  )
}

export default BlogPost