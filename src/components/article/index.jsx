import React from "react"
import styles from "./styles.module.scss"

export const Article = ({ title, img, imgPosition, largeImage, children }) => (
  <div className={styles.container}>
    {title && <h3 className={styles.title}>{title}</h3>}
    <div className={styles.content}>
      <div
        className={`${styles.image} ${styles[imgPosition]} ${
          largeImage ? styles.largeImage : ""
        }`}
      >
        {img}
      </div>
      {children}
    </div>
  </div>
)
