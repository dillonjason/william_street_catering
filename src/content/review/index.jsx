import React from "react"

import { Summary } from "./components/summary"
import { Menu } from "./components/menu"

export const Review = ({ data }) => (
  <>
    <Summary {...data} />
    <Menu {...data} />
  </>
)
