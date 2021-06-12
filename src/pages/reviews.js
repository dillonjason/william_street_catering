import React from "react"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Reviews } from "../content/reviews"

const ReviewsPage = () => (
  <Layout>
    <SEO
      title="Reviews"
      keywords={["william", "street", "catering", "reviews"]}
    />
    <Reviews />
  </Layout>
)

export default ReviewsPage
