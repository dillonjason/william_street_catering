import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.css"
import BlockContent from "@sanity/block-content-to-react"

import styles from "./styles.module.scss"
import "./carousel.scss"
import { SubHeader } from "../sub_header"
import { Article } from "../article"

export const Vision = () => (
  <StaticQuery
    query={graphql`
      query {
        sanitySummary {
          title
          _rawBody
          images {
            asset {
              fluid(maxWidth: 1080) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    `}
    render={({ sanitySummary }) => (
      <div className={styles.container}>
        <SubHeader>{sanitySummary.title}</SubHeader>
        <Article
          img={
            <div className={styles.carousel}>
              <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                showStatus={false}
                transitionTime={1000}
              >
                {sanitySummary.images.map(image => (
                  <div className={styles.carouselWrapper}>
                    <Img fluid={image.asset.fluid} />
                  </div>
                ))}
              </Carousel>
            </div>
          }
          imgPosition="left"
          largeImage
        >
          <p>
            <BlockContent blocks={sanitySummary._rawBody} />
          </p>
        </Article>
      </div>
    )}
  />
)
