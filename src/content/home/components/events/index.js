import React from "react"
import { useStaticQuery } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import styles from "./styles.module.scss"
import { Button } from "../../../../components/button"

const query = graphql`
  {
    allSanityTestimonial(limit: 3) {
      nodes {
        summary
        title
      }
    }
  }
`

export const Events = () => {
  const { allSanityTestimonial } = useStaticQuery(query)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Events</h2>
      <div className={styles.events}>
        {allSanityTestimonial.nodes.map(event => (
          <div className={styles.event}>
            <h3 className={styles.eventTitle}>{event.title}</h3>
            <p>{event.summary}</p>
          </div>
        ))}
      </div>
      <Button to="/events">More Details</Button>
    </div>
  )
}
