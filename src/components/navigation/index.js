import React from "react"
import { Link } from "gatsby"

import styles from "./styles.module.scss"

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.largeOnly} to="/about-us">
        About Us
      </Link>
      <Link className={styles.largeOnly} to="/events">
        Events
      </Link>
      <Link to="/contact-us">Contact Us</Link>
    </nav>
  )
}
