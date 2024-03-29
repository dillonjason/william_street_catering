import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import * as styles from "./styles.module.scss"
import { InlineContent } from "../../../../components/inline_content"

const query = graphql`
  {
    allSanityServices(limit: 3) {
      nodes {
        type
        _rawSummary
      }
    }
  }
`

export const Services = () => {
  const { allSanityServices } = useStaticQuery(query)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Why William St. Catering</h2>
      <InlineContent>
        {allSanityServices.nodes.map(service => (
          <>
            <h3 className={styles.serviceType}>{service.type}</h3>
            <BlockContent blocks={service._rawSummary} />
          </>
        ))}
      </InlineContent>
    </div>
  )
}
