import React from "react"
import { Link } from "gatsby"

import styles from "./styles.module.scss"

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.largeOnly} to="/about-us">
        About Us
      </Link>
      <Link className={styles.largeOnly} to="/reviews">
        Reviews
      </Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  )
}
