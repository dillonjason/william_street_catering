import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./styles.module.scss"
import { SubHeader } from "../sub_header"
import { Article } from "../article"
import { Quote } from "../quote"

export const Testimonials = () => (
  <StaticQuery
    query={graphql`
      query {
        rimm_event: file(relativePath: { eq: "apple_salad.jpg" }) {
          ...testimonialData
        }
        eglin_event: file(relativePath: { eq: "eglin_event.jpg" }) {
          ...testimonialData
        }
      }

      fragment testimonialData on File {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={data => (
      <div className={styles.container}>
        <SubHeader>What Others Say About Us</SubHeader>
        <Article
          img={<Img fluid={data.rimm_event.childImageSharp.fluid} />}
          imgPosition="right"
        >
          <Quote author="Eric and Allison Rimm">
            Tano Holmes catered our party for about 40 Harvard School of Public
            Health Nutrition Faculty, Post-docs, and students. From the
            beginning of the process, Tano was creative, collaborative and
            responsive to our suggestions and requests for revisions to the
            menu. He and his crew were so well organized that when they arrived
            at our home, the evening went smoothly and flawlessly from set up,
            to service, to clean up. They were incredibly professional and our
            guests all felt very well cared for. The food was delicious and they
            talked about it for weeks. We will use William Street catering for
            any affairs we have planned in the future if at all possible and
            recommend them without reservation.
          </Quote>
        </Article>
        <Article
          img={<Img fluid={data.eglin_event.childImageSharp.fluid} />}
          imgPosition="left"
        >
          <Quote author="Joy Eglin">
            First I have to say that this is an amazing team at William St.
            Catering. I hired Tano and Nick to cater my daughter's baby shower
            and they were simply extraordinary. From the minute I emailed Tano,
            I was met with constant respect and the willingness to do whatever
            it took to make the day extra special for me, my daughter, and all
            my guests. He answered all my emails immediately throughout the
            process and tweaked and tweaked and tweaked the menu based on my
            requests - each and every time without question ... until I was
            completely satisfied, making me feel like it was a pleasure to help
            me and make me happy ... and he did. Now the food. It was absolutely
            delicious and all my guests raved about every single thing they
            served. SOOO GOOD. Appetizers, Entrees and even desserts. WOW, just
            perfect. And most of all, it was simple, one stop shopping ...
            everything was included in the price per person (which was extremely
            reasonable) and I didn't have to worry about ANYTHING! There were no
            surprises and both Tano and Nick went way above and beyond to
            accommodate me (even at the 11th hour when we needed something extra
            - they didn't hesitate to step up and take care of it at their
            cost). Who does that? They do. I will use William St. for lots of
            future celebrations as I feel like Tano and Nick are now part of the
            family. Well done and thank you from the bottom of my heart for
            making us all smile. Xoxo
          </Quote>
        </Article>
      </div>
    )}
  />
)
