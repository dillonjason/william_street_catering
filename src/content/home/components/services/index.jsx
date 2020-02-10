import React from "react"
import { useStaticQuery } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import styles from "./styles.module.scss"
import { Button } from "../../../../components/button"
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
      <h2 className={styles.title}>Services Offered</h2>
      <InlineContent>
        {allSanityServices.nodes.map(service => (
          <>
            <h3 className={styles.serviceType}>{service.type}</h3>
            <BlockContent blocks={service._rawSummary} />
          </>
        ))}
      </InlineContent>
      <Button to="/services">More Details</Button>
    </div>
  )
}
