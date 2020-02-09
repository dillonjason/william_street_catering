import React from "react"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Home } from "../content/home"
import { Footer } from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={["william", "street", "catering", "new york"]}
    />
    <Home />
  </Layout>
)

export default IndexPage
