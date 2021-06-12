import React from "react"

import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { Team } from "./components/team"
import { Reviews } from "./components/reviews"
import { Vision } from "./components/vision"

export const Home = () => (
  <>
    <Hero />
    <Reviews />
    <Vision />
    <Services />
    <Team />
  </>
)
