import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { InlineContent } from "../../../../components/inline_content"

import styles from "./styles.module.scss"

const query = graphql`
  query {
    sanityContact {
      email
      phone
    }
  }
`
export const ContactMethods = () => {
  const { sanityContact } = useStaticQuery(query)

  return (
    <InlineContent className={styles.container}>
      <>
        <h3 className={styles.title}>By Phone</h3>
        <a className={styles.link} href={`tel: ${sanityContact.phone}`}>
          {sanityContact.phone}
        </a>
      </>
      <>
        <h3 className={styles.title}>By Email</h3>
        <a className={styles.link} href={`mailto: ${sanityContact.email}`}>
          {sanityContact.email}
        </a>
      </>
    </InlineContent>
  )
}
