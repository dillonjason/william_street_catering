import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

import { Article } from "../../../../components/article"
import { SubHeader } from "../../../../components/sub_header"

import styles from "./styles.module.scss"

const query = graphql`
  query {
    sanityContact {
      phone
      email
      address
      city
      state
      zip
      facebook
      instagram
    }
    sanityAssets(slug: { current: { eq: "contact-us" } }) {
      image {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
export const ContactMethods = () => {
  const { sanityContact, sanityAssets } = useStaticQuery(query)

  return (
    <Article
      title="Contact Us"
      img={
        sanityAssets?.image?.asset?.fluid && (
          <Img
            style={{ maxHeight: 700 }}
            objectFit="cover"
            fluid={sanityAssets.image.asset.fluid}
          />
        )
      }
      flip
    >
      <ul className={styles.contacts}>
        <li>
          <h3>By Email</h3>
          <a
            className={styles.emailText}
            href={`mailto:${sanityContact.email}`}
          >
            {sanityContact.email}
          </a>
        </li>
        <li>
          <h3>By Phone</h3>
          <a className={styles.phoneText} href={`tel:${sanityContact.phone}`}>
            {sanityContact.phone}
          </a>
        </li>
        {sanityContact.address && (
          <li>
            <h3>By Mail</h3>
            {sanityContact.address}
            <br />
            {sanityContact.city}, {sanityContact.state} {sanityContact.zip}
          </li>
        )}
        <li>
          <h3>On Social Media</h3>
          <a href={sanityContact.instagram}>
            <FaInstagram className={styles.icon} />
            Instagram
          </a>
          <a href={sanityContact.facebook}>
            <FaFacebookSquare className={styles.icon} />
            Facebook
          </a>
        </li>
      </ul>
    </Article>
  )
}
