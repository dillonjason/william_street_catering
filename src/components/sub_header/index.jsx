import React from "react"
import styles from "./styles.module.scss"

export const SubHeader = ({ children }) => (
  <h2 className={styles.subHeader}>{children}</h2>
)
