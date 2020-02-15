import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Event } from "../content/event"

export const query = graphql`
  query($slug: String!) {
    sanityTestimonial(slug: { current: { eq: $slug } }) {
      title
      type
      _rawBody
      _rawMenu
      mainImage {
        asset {
          fluid(maxWidth: 1080) {
            ...GatsbySanityImageFluid
          }
        }
      }
      images {
        asset {
          fluid(maxWidth: 1080) {
            ...GatsbySanityImageFluid
          }
        }
      }
      menu {
        type
        _key
        items {
          type
          summary {
            _key
          }
        }
      }
    }
  }
`

const EventTemplate = ({ data }) => {
  const { sanityTestimonial } = data
  const { title, type } = sanityTestimonial

  return (
    <Layout>
      <SEO title={title} keywords={["william", "street", "catering", type]} />
      <Event data={sanityTestimonial} />
    </Layout>
  )
}

export default EventTemplate
