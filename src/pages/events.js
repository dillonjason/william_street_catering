import React from "react"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Events } from "../content/events"

const EventsPage = () => (
  <Layout>
    <SEO
      title="Events"
      keywords={["william", "street", "catering", "events"]}
    />
    <Events />
  </Layout>
)

export default EventsPage
