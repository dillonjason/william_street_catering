import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

import * as styles from "./styles.module.scss"

export const Footer = () => (
  <StaticQuery
    query={graphql`
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
      }
    `}
    render={({ sanityContact }) => (
      <div className={styles.container}>
        <ul className={styles.contacts}>
          <li>
            <a
              className={styles.emailText}
              href={`mailto:${sanityContact.email}`}
            >
              {sanityContact.email}
            </a>
          </li>
          {sanityContact.address && (
            <li>
              {sanityContact.address}
              <br />
              {sanityContact.city}, {sanityContact.state} {sanityContact.zip}
            </li>
          )}
          <li>
            <a className={styles.phoneText} href={`tel:${sanityContact.phone}`}>
              {sanityContact.phone}
            </a>
          </li>
          <li>
            <a href={sanityContact.instagram}>
              <FaInstagram className={styles.icon} />
              Instagram
            </a>
          </li>
          <li>
            <a href={sanityContact.facebook}>
              <FaFacebookSquare className={styles.icon} />
              Facebook
            </a>
          </li>
        </ul>
        <ul className={styles.developer}>
          <li>&copy; {new Date().getFullYear()}</li>
          <li>Built by Dillon Jason</li>
          <li>
            <a
              href="http://www.dillonjason.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.dillonjason.dev
            </a>
          </li>
        </ul>
      </div>
    )}
  />
)
