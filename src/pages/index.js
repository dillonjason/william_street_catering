import React from "react"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={["william", "street", "catering", "new york"]}
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Logo />
    </div>
  </Layout>
)

export default IndexPage
