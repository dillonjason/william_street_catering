import React from "react"
import styles from "./styles.module.scss"

export const Article = ({ title, img, children }) => (
  <div className={styles.container}>
    <div className={styles.image}>{img}</div>
    <div className={styles.content}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children}
    </div>
  </div>
)
