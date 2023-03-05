import React from "react"

import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import { NotFound } from "../content/404"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <NotFound />
  </Layout>
)

export default NotFoundPage
