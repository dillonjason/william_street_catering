import React from "react"

import styles from "./styles.module.scss"

import { Vision } from "../../components/vision"
import { Testimonials } from "../../components/testimonials"
import { About } from "../../components/about"
import { Hero } from "../../components/hero"

export const Home = () => (
  <>
    <Hero />
    <div id="content" className={styles.container}>
      <Vision />
      <Testimonials />
      <About />
    </div>
  </>
)
