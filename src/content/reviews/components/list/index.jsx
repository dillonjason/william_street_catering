import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import { Button } from "../../../../components/button"
import { Article } from "../../../../components/article"

import * as styles from "./styles.module.scss"

const query = graphql`
  query {
    allSanityTestimonial(sort: { date: DESC }) {
      nodes {
        date
        title
        type
        slug {
          current
        }
        summary
        mainImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const List = () => {
  const { allSanityTestimonial } = useStaticQuery(query)

  return <>
    {allSanityTestimonial.nodes.map((node, index) => (
      <Article
        key={node.slug.current}
        title={node.title}
        flip={index % 2}
        className={styles.review}
        img={
          node.mainImage && (
            <GatsbyImage
              image={node.mainImage.asset.gatsbyImageData}
              style={{ maxHeight: 700 }}
              objectFit="cover" />
          )
        }
      >
        <p className={styles.summary}>{node.summary}</p>
        <Button to={`/reviews/${node.slug.current}`}>Details</Button>
      </Article>
    ))}
  </>;
}
