import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.css"

import styles from "./styles.module.scss"

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
        <div className={styles.content}>
          <h2>What it means to work with William St.</h2>
          <p>
            Just take out whatever you don't want. It'll change your entire
            perspective. Just let this happen. We just let this flow right out
            of our minds. Even the worst thing we can do here is good. Let that
            brush dance around there and play. We'll make some happy little
            bushes here.
          </p>
          <p>
            Steve wants reflections, so let's give him reflections. See how easy
            it is to create a little tree right in your world. I'm gonna add
            just a tiny little amount of Prussian Blue. Nature is so fantastic,
            enjoy it. Let it make you happy. And that's when it becomes fun -
            you don't have to spend your time thinking about what's happening -
            you just let it happen.
          </p>
        </div>
      </div>
    )}
  />
)
