import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

export const Quote = ({ author, children }) => (
  <div className={styles.container}>
    <div className={styles.quotes}>&#10077;</div>
    <div className={styles.content}>
      <div className={styles.text}>{children}</div>
      <div className={styles.author}>- {author}</div>
    </div>
  </div>
)

Quote.propTypes = {
  children: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}
