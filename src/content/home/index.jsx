import React from "react"

import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { Team } from "./components/team"
import { Events } from "./components/events"
import { Vision } from "./components/vision"

export const Home = () => (
  <>
    <Hero />
    <Events />
    <Vision />
    <Services />
    <Team />
  </>
)
