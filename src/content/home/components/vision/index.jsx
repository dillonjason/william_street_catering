import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "react-responsive-carousel/lib/styles/carousel.css"
import BlockContent from "@sanity/block-content-to-react"

import { Article } from "../../../../components/article"
import { Button } from "../../../../components/button"

const query = graphql`
  query {
    sanitySummary {
      title
      _rawBody
      images {
        asset {
          fluid(maxWidth: 1080) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export const Vision = () => {
  const { sanitySummary } = useStaticQuery(query)
  return (
    <Article
      title={sanitySummary.title}
      img={
        <Img
          style={{ maxHeight: 700 }}
          objectFit="cover"
          fluid={sanitySummary.images[0].asset.fluid}
        />
      }
      canHideImg
    >
      <BlockContent blocks={sanitySummary._rawBody} />
      <Button to="/contact">Contact Us</Button>
    </Article>
  )
}
