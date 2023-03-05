import React from "react"

import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import { Reviews } from "../content/reviews"

const ReviewsPage = () => (
  <Layout>
    <Seo
      title="Reviews"
      keywords={["william", "street", "catering", "reviews"]}
    />
    <Reviews />
  </Layout>
)

export default ReviewsPage
