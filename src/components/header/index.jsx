import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FaPhone, FaEnvelope } from "react-icons/fa"

import styles from "./styles.module.scss"

import { Logo } from "../logo"

export const Header = () => {
  const [shrinkLogo, setShrinkLogo] = useState(false)

  window.onscroll = () => {
    const top = document.body.querySelector("#content").getBoundingClientRect()
      .top
    setShrinkLogo(top < 50)
  }

  return (
    <header className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.background} />
        <h1 className={`${styles.logo} ${shrinkLogo ? styles.smallLogo : ""}`}>
          <Link to="/">
            <Logo />
          </Link>
        </h1>
      </div>
      <div className={styles.contact}>
        <a
          className={styles.emailText}
          href="mailto:williamstreetcatering@gmail.com"
        >
          williamstreetcatering@gmail.com
        </a>
        <a
          className={styles.emailIcon}
          href="mailto:williamstreetcatering@gmail.com"
        >
          <FaEnvelope size="1.5rem" />
        </a>
        <a className={styles.phoneText} href="tel:857-253-1101">
          857-253-1101
        </a>
        <a className={styles.phoneIcon} href="tel:857-253-1101">
          <FaPhone size="1.5rem" />
        </a>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
