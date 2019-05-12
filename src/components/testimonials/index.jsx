import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"

import styles from "./styles.module.scss"
import { SubHeader } from "../sub_header"
import { Article } from "../article"
import { Quote } from "../quote"

export const Testimonials = () => (
  <StaticQuery
    query={graphql`
      query {
        allSanityTestimonial {
          nodes {
            id
            clientName
            _rawBody
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
    `}
    render={({ allSanityTestimonial }) => (
      <div className={styles.container}>
        <SubHeader>What Others Say About Us</SubHeader>
        {allSanityTestimonial.nodes.map((node, index) => (
          <Article
            key={node.id}
            img={<Img fluid={node.mainImage.asset.fluid} />}
            imgPosition={index % 2 === 0 ? "right" : "left"}
          >
            <Quote author={node.clientName}>
              <BlockContent blocks={node._rawBody} />
            </Quote>
          </Article>
        ))}
      </div>
    )}
  />
)
