import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FaPhone, FaEnvelope } from "react-icons/fa"

import styles from "./styles.module.scss"

import { Logo } from "../logo"

export const Header = () => {
  const [shrinkLogo, setShrinkLogo] = useState(false)

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      const content = document.body
        .querySelector("#content")
        .getBoundingClientRect()
      const body = document.body.getBoundingClientRect()

      const needToShrink = content.top < 50 && !shrinkLogo
      const needToGrow = body.top === 0 && shrinkLogo

      if (needToShrink) {
        setShrinkLogo(true)
      } else if (needToGrow) {
        setShrinkLogo(false)
      }
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          sanityContact {
            phone
            email
          }
        }
      `}
      render={({ sanityContact }) => {
        const { phone, email } = sanityContact
        return (
          <header className={styles.container}>
            <div className={styles.hero}>
              <div className={styles.background} />
              <h1
                className={`${styles.logo} ${
                  shrinkLogo ? styles.smallLogo : ""
                }`}
              >
                <Link to="/">
                  <Logo />
                </Link>
              </h1>
            </div>
            <div className={styles.contact}>
              <a className={styles.emailText} href={`mailto:${email}`}>
                {email}
              </a>
              <a className={styles.emailIcon} href={`mailto:${email}`}>
                <FaEnvelope size="1.5rem" />
              </a>
              <a className={styles.phoneText} href={`tel:${phone}`}>
                {phone}
              </a>
              <a className={styles.phoneIcon} href={`tel:${phone}`}>
                <FaPhone size="1.5rem" />
              </a>
            </div>
          </header>
        )
      }}
    />
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
