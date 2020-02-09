import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import { Header } from "../header"
import { Footer } from "../footer"
import styles from "./layout.module.scss"

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export const Layout = ({ children }) => {
  const { site } = useStaticQuery(query)
  return (
    <div className={styles.layoutGrid}>
      <Header siteTitle={site.siteMetadata.title} />
      <div className={styles.contentGrid}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
