import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { graphql, useStaticQuery } from "gatsby"

import { Header } from "../header"
import { Footer } from "../footer"
import * as styles from "./layout.module.scss"

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export const Layout = ({ children, singleRow }) => {
  const { site } = useStaticQuery(query)
  return (
    <div className={styles.layoutGrid}>
      <Header siteTitle={site.siteMetadata.title} />
      <div className={classNames(styles.contentGrid)}>
        {singleRow ? (
          <div className={styles.singleRow}>{children}</div>
        ) : (
          children
        )}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  singleRow: PropTypes.bool,
}
