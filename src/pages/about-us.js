import React from "react"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { AboutUs } from "../content/about_us"
import { Footer } from "../components/footer"

const AboutUsPage = () => (
  <Layout>
    <SEO
      title="About Us"
      keywords={["william", "street", "catering", "about"]}
    />
    <AboutUs />
  </Layout>
)

export default AboutUsPage
