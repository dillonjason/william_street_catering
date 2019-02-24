import React from "react"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Content } from "../components/content"
import { Footer } from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={["william", "street", "catering", "new york"]}
    />
    <Content />
    <Footer />
  </Layout>
)

export default IndexPage
