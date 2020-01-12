import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import styles from "./styles.module.scss"

import { Logo } from "../logo"
import { Navigation } from "../navigation"

const query = graphql`
  query {
    sanityContact {
      phone
      email
    }
  }
`

export const Header = () => {
  const { sanityContact } = useStaticQuery(query)
  const { phone, email } = sanityContact

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
