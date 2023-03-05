import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

import { Article } from "../../../../components/article"

import * as styles from "./styles.module.scss"

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
          gatsbyImageData
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
        sanityAssets?.image?.asset?.gatsbyImageData && (
          <GatsbyImage
            image={sanityAssets.image.asset.gatsbyImageData}
            style={{ maxHeight: 700 }}
            objectFit="cover" />
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
  );
}
