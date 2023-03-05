import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import * as styles from "./styles.module.scss"

const query = graphql`
  query {
    sanityAssets(slug: { current: { eq: "hero" } }) {
      image {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`

export const Hero = () => {
  const { sanityAssets } = useStaticQuery(query)

  return (
    <div className={styles.hero}>
      <GatsbyImage
        image={sanityAssets.image.asset.gatsbyImageData}
        style={{ height: "60vh" }}
        objectFit="cover" />
    </div>
  );
}
