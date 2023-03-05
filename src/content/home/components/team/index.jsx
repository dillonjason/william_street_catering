import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
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
          gatsbyImageData
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
        <GatsbyImage
          image={sanityAssets.image.asset.gatsbyImageData}
          style={{ maxHeight: 700 }}
          objectFit="cover" />
      }
      flip
    >
      <BlockContent blocks={sanitySummary._rawUs} />
      <Button to="/about-us">More About Us</Button>
    </Article>
  );
}
