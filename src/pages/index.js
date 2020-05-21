import React from "react"

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import WorkSummary from '../components/WorkSummary'

const IndexPage = ({ data }) => (
    <Layout>
      <Hero myName='Chris' />
      <WorkSummary />
    </Layout>
)

export default IndexPage