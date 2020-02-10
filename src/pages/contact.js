import React from "react"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Contact } from "../content/contact"

const ContactPage = () => (
  <Layout singleRow>
    <SEO
      title="Contact Us"
      keywords={["william", "street", "catering", "contact"]}
    />
    <Contact />
  </Layout>
)

export default ContactPage
