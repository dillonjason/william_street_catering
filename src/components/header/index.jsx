import { Link } from "gatsby"
import React from "react"

import * as styles from "./styles.module.scss"

import { Logo } from "../logo"
import { Navigation } from "../navigation"

export const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </h1>
      <div className={styles.navigation}>
        <Navigation />
      </div>
    </header>
  )
}
