import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./styles.module.scss"
import { SubHeader } from "../sub_header"
import { Article } from "../article"

export const Testimonials = () => (
  <StaticQuery
    query={graphql`
      query {
        first: file(relativePath: { eq: "testimonial1.jpg" }) {
          ...testimonialData
        }
        second: file(relativePath: { eq: "testimonial2.jpg" }) {
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
          title="Spicy Fiesta"
          img={<Img fluid={data.first.childImageSharp.fluid} />}
          imgPosition="right"
        >
          <p>
            Parrel Jack Tar dance the hempen jig pinnace gaff ahoy landlubber or
            just lubber jib ballast pink. Ye execution dock list splice the main
            brace spirits spyglass league bowsprit transom Arr. Jack Tar grapple
            blow the man down Sea Legs hands deadlights lookout Arr man-of-war
            grog.
          </p>
          <p>
            Snow gibbet shrouds clap of thunder Sink me keel handsomely smartly
            boom topsail. Aft scallywag fire in the hole come about overhaul
            spirits Letter of Marque doubloon bring a spring upon her cable
            carouser. Privateer grapple fore scuttle pressgang splice the main
            brace port poop deck lugger plunder.
          </p>
        </Article>
        <Article
          title="Presidental Sandwich"
          img={<Img fluid={data.second.childImageSharp.fluid} />}
          imgPosition="left"
        >
          <p>
            Ancient alien mainstream archaelogy evidence alien contend
            anti-gravity, portal Chariot of the Gods Easter island, choral
            castle ancient religions King Soloman. Earth mound I know it sounds
            crazy... Astronaut UFO portal anti-gravity, sky people King Soloman
            pre-colonial aerodynamics mainstream archaelogy, the answer is a
            resounding YES... Weightless foo fighter UFO. Star people UFO Machu
            Picchu crystal skull Nazca lines Easter island, mystery DNA
            manipulation legendary times ancient religions pyramids, alien
            otherworldly visitors portal ancient religions sky people. Nazca
            lines von Daniken portal contend, sun disc elongated skull,
            otherworldly visitors weightless sightings. Ancient alien theorists
            magnetic current mercury King Soloman, otherworldly visitors Indian
            texts von Daniken vimana crystal skull, Sumerian texts mercury
            mainstream archaelogy portal. Cover up extraterrestrial origin star
            people sky people extraterrestrial Easter island, extraterrestrial
            origin legendary times NASA Mahabharata Puma Punku burmuta triangle,
            foo fighter Indian texts choral castle flying vessels.
          </p>
        </Article>
      </div>
    )}
  />
)
