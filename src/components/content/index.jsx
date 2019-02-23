import React from "react"

import styles from "./styles.module.scss"

import { Vision } from "../vision"
import { Testimonials } from "../testimonials"

export const Content = () => (
  <div id="content" className={styles.container}>
    <Vision />
    <Testimonials />
  </div>
)
