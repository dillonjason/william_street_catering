import React from "react"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Contact } from "../content/contact"
import { Footer } from "../components/footer"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact Us"
      keywords={["william", "street", "catering", "contact"]}
    />
    <Contact />
  </Layout>
)

export default ContactPage
