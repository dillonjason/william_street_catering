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
      title
      _rawBody
    }
    sanityAssets(slug: { current: { eq: "about-william-st-catering" } }) {
      image {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`

export const Vision = () => {
  const { sanitySummary, sanityAssets } = useStaticQuery(query)
  return (
    <Article
      title={sanitySummary.title}
      img={
        <GatsbyImage
          image={sanityAssets.image.asset.gatsbyImageData}
          style={{ maxHeight: 700 }}
          objectFit="cover" />
      }
    >
      <BlockContent blocks={sanitySummary._rawBody} />
      <Button to="/contact">Contact Us</Button>
    </Article>
  );
}
