import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Section, Container } from '../styles'

const NotFoundPage = () => (
  <Layout>
    <SEO title='img' />
    <Section>
      <Container style={{ textAlign: 'center' }}>
        <h2>
          404: Not Found
        </h2>
        <h3>
          <span role='img' aria-label='sad react'>
            😢
          </span>
        </h3>
        <h4>
          You've reached a page that doesn't exist.
        </h4>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
