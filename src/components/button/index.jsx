import React from "react"
import { Link } from "gatsby"

import styles from "./styles.module.scss"

export const Button = ({ to, children }) => (
  <Link className={styles.button} to={to}>
    {children}
  </Link>
)
