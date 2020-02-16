import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"

import { Article } from "../../../../components/article"

import styles from "./styles.module.scss"

const query = graphql`
  query {
    allSanityEmployee(sort: { fields: order }) {
      nodes {
        id
        name
        position
        _rawBio
        image {
          asset {
            fluid(maxWidth: 1920) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

export const Founders = () => {
  const { allSanityEmployee } = useStaticQuery(query)

  return (
    <>
      {allSanityEmployee.nodes.map((node, index) => (
        <Article
          key={node.id}
          title={`${node.name}, ${node.position}`}
          flip={index % 2}
          className={styles.founderArticle}
          img={
            <Img
              style={{ maxHeight: 700 }}
              objectFit="cover"
              fluid={node.image.asset.fluid}
            />
          }
        >
          <BlockContent blocks={node._rawBio} />
        </Article>
      ))}
    </>
  )
}
