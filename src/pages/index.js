import React from "react"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={["william", "street", "catering", "new york"]}
    />
  </Layout>
)

export default IndexPage
