import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import styles from "./styles.module.scss"

const query = graphql`
  query {
    sanityImageAsset(
      assetId: { eq: "4ac6e563f6e5e3e4a3cec461f5734e26ddcd5ed5" }
    ) {
      fluid {
        ...GatsbySanityImageFluid
      }
    }
  }
`

export const Hero = () => {
  const { sanityImageAsset } = useStaticQuery(query)

  return (
    <div className={styles.hero}>
      <Img style={{ height: "60vh" }} fluid={sanityImageAsset.fluid} />
    </div>
  )
}
