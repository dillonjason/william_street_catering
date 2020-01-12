import React from "react"

import styles from "./styles.module.scss"

import { Vision } from "../vision"
import { Testimonials } from "../testimonials"
import { About } from "../about"
import { Hero } from "../hero"

export const Content = () => (
  <>
    <Hero />
    <div id="content" className={styles.container}>
      <Vision />
      <Testimonials />
      <About />
    </div>
  </>
)
