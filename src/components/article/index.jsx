import React from "react"
import classNames from "classnames"
import styles from "./styles.module.scss"

export const Article = ({ title, img, children, className, ...props }) => (
  <div className={classNames(styles.container, className)} {...props}>
    <div className={styles.image}>{img}</div>
    <div className={styles.content}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children}
    </div>
  </div>
)
