import React from "react"
import { useStaticQuery } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import styles from "./styles.module.scss"

const query = graphql`
  {
    allSanityServices {
      nodes {
        type
        summary {
          _key
          _type
          style
          children {
            text
            _key
            _type
          }
        }
      }
    }
  }
`

export const Services = () => {
  const { allSanityServices } = useStaticQuery(query)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Services Offered</h2>
      <div className={styles.services}>
        {allSanityServices.nodes.map(service => (
          <div className={styles.service}>
            <h3 className={styles.serviceType}>{service.type}</h3>
            <BlockContent blocks={service.summary} />
          </div>
        ))}
      </div>
    </div>
  )
}
