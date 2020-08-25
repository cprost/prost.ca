import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Container, Section, theme, media } from '../styles'

export const query = graphql`
  query($slug: String) {
    markdown: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date
      }
      html
    }
  }
`

const PostContainer = styled(Container)`
  padding-left: 2rem;
  padding-right: 2rem;
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
  color: ${theme.colours.palette700};
`

const PostDate = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: ${theme.colours.palette700};
`

const PostContent = styled.div`
  margin-top: 2rem;
  border-top: 2px solid ${theme.colours.palette200};
  line-height: 1.5;
  font-family: ${theme.fonts.Roboto};
  color: ${theme.colours.palette700};

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 28px;
  }

  h1, h2 {
    border-bottom: 2px solid ${theme.colours.palette200};
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
    color: ${theme.colours.palette200};
    margin: 2rem 0;
  }

  ul, li {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 0.5rem;

    p {
      margin: 0;
    }
  }

  p {
    font-size: 16px;
  }

  a {
    color: ${theme.colours.hilite400};
  }

  blockquote {
    margin-left: 0;
    margin-right: 0;
    padding-left: 1rem;
    border-left: 0.25rem solid ${theme.colours.palette200};
    color: ${theme.colours.palette500};
  }

  .line-numbers-rows {
    margin-top: 1rem;
    margin-left: 1rem;
    border-right: 1px solid ${theme.colours.palette200};
  }

  .gatsby-highlight {
    margin-bottom: 2rem;
  }

  img {
    border-radius: 5px;
  }
`

const BlogPost = (props) => {
  const { markdown } = props.data
  return (
    <Layout>
      <SEO
        title={markdown.frontmatter.title}
        description={markdown.frontmatter.description}
      />
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