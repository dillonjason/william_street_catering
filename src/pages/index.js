import React from "react"

import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import { Home } from "../content/home"

const IndexPage = () => (
  <Layout>
    <Seo
      title="Home"
      keywords={["william", "street", "catering", "new york"]}
    />
    <Home />
  </Layout>
)

export default IndexPage
