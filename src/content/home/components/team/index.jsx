import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "react-responsive-carousel/lib/styles/carousel.css"
import BlockContent from "@sanity/block-content-to-react"

import styles from "./styles.module.scss"

import { Article } from "../../../../components/article"
import { Button } from "../../../../components/button"

const query = graphql`
  query {
    sanitySummary {
      _rawUs
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

export const Team = () => {
  const { sanitySummary } = useStaticQuery(query)
  return (
    <Article
      title="Who we are"
      img={
        <Img
          style={{ maxHeight: 700 }}
          objectFit="cover"
          fluid={sanitySummary.images[1].asset.fluid}
        />
      }
      flip
    >
      <BlockContent blocks={sanitySummary._rawUs} />
      <Button to="/about-us">More About Us</Button>
    </Article>
  )
}
