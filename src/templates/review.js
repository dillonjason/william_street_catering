import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Review } from "../content/review"

export const query = graphql`
  query($slug: String!) {
    sanityTestimonial(slug: { current: { eq: $slug } }) {
      title
      type
      _rawBody
      _rawMenu
      mainImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      images {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      menu {
        type
        _key
        items {
          type
          _key
        }
      }
    }
  }
`

const ReviewTemplate = ({ data }) => {
  const { sanityTestimonial } = data
  const { title, type } = sanityTestimonial

  return (
    <Layout>
      <SEO title={title} keywords={["william", "street", "catering", type]} />
      <Review data={sanityTestimonial} />
    </Layout>
  )
}

export default ReviewTemplate
