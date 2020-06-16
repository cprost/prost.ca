import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import { Container, Section, theme } from '../styles'

const Contact = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <h2>Contact Information</h2>
          <p>You can find me on LinkedIn, GitHub, and Instagram below:</p>
        </Container>
      </Section>
    </Layout>
  )
}

export default Contact