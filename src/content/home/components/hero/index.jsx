import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import styles from "./styles.module.scss"

const query = graphql`
  query {
    sanityAssets(slug: { current: { eq: "hero" } }) {
      image {
        asset {
          fluid {
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
      <Img style={{ height: "60vh" }} fluid={sanityAssets.image.asset.fluid} />
    </div>
  )
}
