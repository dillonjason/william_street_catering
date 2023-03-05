import React from "react"
import * as styles from "./styles.module.scss"

export const SubHeader = ({ children }) => (
  <h2 className={styles.subHeader}>{children}</h2>
)
