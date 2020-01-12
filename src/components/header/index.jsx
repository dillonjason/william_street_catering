import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { FaPhone, FaEnvelope } from "react-icons/fa"

import styles from "./styles.module.scss"

import { Logo } from "../logo"

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
      <div className={styles.main}>
        <h1 className={styles.logo}>
          <Link to="/">
            <Logo />
          </Link>
        </h1>
      </div>
      <div className={styles.contact}>
        <a className={styles.emailText} href={`mailto:${email}`}>
          {email}
        </a>
        <a className={styles.emailIcon} href={`mailto:${email}`}>
          <FaEnvelope size="1.5rem" />
        </a>
        <a className={styles.phoneText} href={`tel:${phone}`}>
          {phone}
        </a>
        <a className={styles.phoneIcon} href={`tel:${phone}`}>
          <FaPhone size="1.5rem" />
        </a>
      </div>
    </header>
  )
}
