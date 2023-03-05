import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import BlockContent from "@sanity/block-content-to-react"

import { Article } from "../../../../components/article"

import * as styles from "./styles.module.scss"

const query = graphql`
  query {
    allSanityEmployee(sort: { order: ASC }) {
      nodes {
        id
        name
        position
        _rawBio
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Founders = () => {
  const { allSanityEmployee } = useStaticQuery(query)

  return <>
    {allSanityEmployee.nodes.map((node, index) => (
      <Article
        key={node.id}
        title={`${node.name}, ${node.position}`}
        flip={index % 2}
        className={styles.founderArticle}
        img={
          <GatsbyImage
            image={node.image.asset.gatsbyImageData}
            style={{ maxHeight: 700 }}
            objectFit="cover" />
        }
      >
        <BlockContent blocks={node._rawBio} />
      </Article>
    ))}
  </>;
}
