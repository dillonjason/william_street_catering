import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import styles from "./styles.module.scss"

const query = graphql`
  query {
    sanityAssets(slug: { current: { eq: "hero" } }) {
      image {
        asset {
          fluid(maxWidth: 3840) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export const Hero = () => {
  const { sanityAssets } = useStaticQuery(query)

  return (
    <div className={styles.hero}>
      <Img
        style={{ height: "60vh" }}
        objectFit="cover"
        fluid={sanityAssets.image.asset.fluid}
      />
    </div>
  )
}
