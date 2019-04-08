import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.css"

import styles from "./styles.module.scss"
import "./carousel.scss"
import { SubHeader } from "../sub_header"
import { Article } from "../article"

export const Vision = () => (
  <StaticQuery
    query={graphql`
      query {
        first: file(relativePath: { eq: "food1.jpg" }) {
          ...fileData
        }
        second: file(relativePath: { eq: "food2.jpg" }) {
          ...fileData
        }
        third: file(relativePath: { eq: "food3.jpg" }) {
          ...fileData
        }
      }

      fragment fileData on File {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={data => (
      <div className={styles.container}>
        <SubHeader>What It Means to Work With Us</SubHeader>
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
                <div className={styles.carouselWrapper}>
                  <Img fluid={data.first.childImageSharp.fluid} />
                </div>
                <div className={styles.carouselWrapper}>
                  <Img fluid={data.second.childImageSharp.fluid} />
                </div>
                <div className={styles.carouselWrapper}>
                  <Img fluid={data.third.childImageSharp.fluid} />
                </div>
              </Carousel>
            </div>
          }
          imgPosition="left"
          largeImage
        >
          <p>
            William St. Catering is a hospitality-focused, quality-driven
            catering company operating in the Bronx and servicing all of New
            York City. Offering catering services from Boston to Miami, we offer
            the experience, customization, and passion to make your event truly
            remarkable. Our mission is to provide flawless catering services
            with an exceptionally-customized experience, high-quality food and
            beverage service, and detail-oriented hospitality that leaves our
            customers with the sense that they have been genuinely cared for.
          </p>
        </Article>
      </div>
    )}
  />
)
