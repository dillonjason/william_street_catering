import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./styles.module.scss"
import { SubHeader } from "../sub_header"
import { Article } from "../article"

export const About = () => (
  <StaticQuery
    query={graphql`
      query {
        tano: file(relativePath: { eq: "tano.jpg" }) {
          ...peopleData
        }
        nick: file(relativePath: { eq: "nick.jpg" }) {
          ...peopleData
        }
        clarissa: file(relativePath: { eq: "clarissa.jpg" }) {
          ...peopleData
        }
        miles: file(relativePath: { eq: "miles.jpg" }) {
          ...peopleData
        }
      }

      fragment peopleData on File {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={data => (
      <div className={styles.container}>
        <SubHeader>Who We Are</SubHeader>
        <Article
          title="Tano Holmes, Founder"
          img={<Img fluid={data.tano.childImageSharp.fluid} />}
          imgPosition="right"
        >
          <p>
            As a lover of food and a spirited entrepreneur, Tano is the founder
            of William Street Catering. A Culinary Institute of America
            graduate, Tano worked as a line cook at both the East Coast Grill
            and Red Rooster in Harlem. He worked as a banquets chef at the
            esteemed Waldorf Astoria in Manhattan. Tano’s banquet experience
            allows him to oversee the execution of a variety of events; from
            intimate dinner gatherings to weddings and graduation parties. When
            not overseeing events at William St. Catering, Tano works as a
            licensed real-estate agent for Century 21. As an Eagle Scout, Tano
            volunteers with the Boy Scouts of America teaching cooking classes.
            Tano’s talent for hospitality provides our clients with a
            thoughtfully tailored experience.
          </p>
        </Article>
        <Article
          title="Nick Gonzalez, Executive Chef"
          img={<Img fluid={data.nick.childImageSharp.fluid} />}
          imgPosition="left"
        >
          <p>
            Nick began his career as a line cook at Luna Maya restaurant in
            Norfolk, Virginia. He graduated from the Culinary Institute of
            America in 2015. As an advocate for healthy school lunch programs,
            Nick worked as a chef instructor for Hudson Valley Farm to School
            Program and oversaw the USDA’s farm to school grant program at St.
            Andrew’s School in Richmond, Virginia working for Edible Education,
            LLC. Nick honed his skills as a line cook at Gramercy Tavern in
            Manhattan; after a year as a line cook there, he spent a year on the
            restaurant’s whole animal butchery team. He is the Assistant Kitchen
            Manager overseeing food production and menu development at Red
            Rabbit, a producer and distributor of healthy school lunches in New
            York City: 25,000+ healthy meals and snacks made fresh daily. Nick
            draws inspiration from his latin american roots, his time working
            with local farmers in New York, and his passion for quality
            ingredients.
          </p>
        </Article>
        <Article
          title="Clarissa Holmes, Logistics Coordinator"
          img={<Img fluid={data.clarissa.childImageSharp.fluid} />}
          imgPosition="right"
        >
          <p>
            A New York City public school teacher and graduate of the University
            of Texas, Clarissa oversees William St. Catering’s online presence
            and handles customer inquiries. With an eye for design, she leads
            menu formatting and layout in real time for William St. Catering
            events. Clarissa manages customer engagement with our most current
            work on social media and our website.
          </p>
        </Article>
        <Article
          title="Miles Thomas-Moore, Beverage Manager"
          img={<Img fluid={data.miles.childImageSharp.fluid} />}
          imgPosition="left"
        >
          <p>
            Miles’ experience in food and beverage service, logistics
            management, and his industry connections make him an invaluable
            member of the William St. Catering team. He has worked as a
            representative of the Beer and Specialities departments for Whole
            Foods, a bartender and manager at Snack Dragon on Manhattan’s Lower
            East Side, and currently holds the position of Sales Manager at
            S.K.I Wholesale Beer Corporation overseeing distribution for the
            West Side of Manhattan.
          </p>
        </Article>
      </div>
    )}
  />
)
