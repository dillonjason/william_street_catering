import React from "react"

import { Summary } from "./components/summary"
import { Menu } from "./components/menu"

export const Event = ({ data }) => (
  <>
    <Summary {...data} />
    <Menu {...data} />
  </>
)
