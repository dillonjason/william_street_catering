import React from "react"

import styles from "./styles.module.scss"

import { Vision } from "../../components/vision"
import { Hero } from "../../components/hero"
import { Services } from "./components/services"
import { Team } from "./components/team"
import { Events } from "./components/events"

export const Home = () => (
  <>
    <Hero />
    <Events />
    <Vision />
    <Services />
    <Team />
  </>
)
