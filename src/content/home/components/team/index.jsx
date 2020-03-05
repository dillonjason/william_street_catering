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
      _rawUs
    }
    sanityAssets(slug: { current: { eq: "about-us" } }) {
      image {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export const Team = () => {
  const { sanitySummary, sanityAssets } = useStaticQuery(query)
  return (
    <Article
      title="Who we are"
      img={
        <Img
          style={{ maxHeight: 700 }}
          objectFit="cover"
          fluid={sanityAssets.image.asset.fluid}
        />
      }
      flip
    >
      <BlockContent blocks={sanitySummary._rawUs} />
      <Button to="/about-us">More About Us</Button>
    </Article>
  )
}
