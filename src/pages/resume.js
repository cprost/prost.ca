import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Section, Container } from '../styles'

const Resume = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <Section>
        <Container>
          <h1>YO!</h1>
        </Container>
      </Section>
    </Layout>
  )
}

export default Resume