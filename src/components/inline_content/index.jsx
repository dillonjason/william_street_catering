import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./styles.module.scss"

export const InlineContent = ({ children, className, ...props }) => (
  <div className={classNames(styles.items, className)} {...props}>
    {React.Children.map(children, child => (
      <div className={styles.item}>{child}</div>
    ))}
  </div>
)

InlineContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
