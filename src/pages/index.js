import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import WorkSummary from '../components/WorkSummary'

import { Gradient, theme } from '../styles'

const IndexPage = ({ data }) => (
    <Layout>
      <Hero myName='Chris' />
      <Gradient />
      <WorkSummary />
    </Layout>
)

export default IndexPage