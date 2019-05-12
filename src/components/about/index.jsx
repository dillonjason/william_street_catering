import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"

import styles from "./styles.module.scss"
import { SubHeader } from "../sub_header"
import { Article } from "../article"

export const About = () => (
  <StaticQuery
    query={graphql`
      query {
        allSanityEmployee(sort: { fields: order }) {
          nodes {
            id
            name
            position
            _rawBio
            image {
              asset {
                fluid(maxWidth: 1080) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    `}
    render={({ allSanityEmployee }) => (
      <div className={styles.container}>
        <SubHeader>Who We Are</SubHeader>
        {allSanityEmployee.nodes.map((node, index) => (
          <Article
            key={node.id}
            title={`${node.name}, ${node.position}`}
            img={<Img fluid={node.image.asset.fluid} />}
            imgPosition={index % 2 === 0 ? "right" : "left"}
          >
            <p>
              <BlockContent blocks={node._rawBio} />
            </p>
          </Article>
        ))}
      </div>
    )}
  />
)
