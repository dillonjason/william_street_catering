import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Button } from "../../../../components/button"
import { Article } from "../../../../components/article"

import styles from "./styles.module.scss"

const query = graphql`
  query {
    allSanityTestimonial(sort: { fields: date, order: DESC }) {
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
            fluid(maxWidth: 1080) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

export const List = () => {
  const { allSanityTestimonial } = useStaticQuery(query)

  return (
    <>
      {allSanityTestimonial.nodes.map((node, index) => (
        <Article
          key={node.slug.current}
          title={node.title}
          flip={index % 2}
          className={styles.event}
          img={
            node.mainImage && (
              <Img
                style={{ maxHeight: 700 }}
                objectFit="cover"
                fluid={node.mainImage.asset.fluid}
              />
            )
          }
        >
          <p className={styles.summary}>{node.summary}</p>
          <Button to={`/events/${node.slug.current}`}>Details</Button>
        </Article>
      ))}
    </>
  )
}
