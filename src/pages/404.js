import React from "react"
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Section, Container, theme } from '../styles'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <Section>
      <Container style={{ textAlign: 'center' }}>
        <h2>404: Not Found</h2>
        <h3>😢</h3>
        <h3>Looks like a dead end</h3>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
