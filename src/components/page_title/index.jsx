import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

export const PageTitle = ({ children }) => (
  <h1 className={styles.title}>{children}</h1>
)

PageTitle.propTypes = {
  children: PropTypes.node,
}
