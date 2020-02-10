import React from "react"
import { useStaticQuery } from "gatsby"

import styles from "./styles.module.scss"
import { Button } from "../../../../components/button"
import { InlineContent } from "../../../../components/inline_content"

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
      <InlineContent>
        {allSanityTestimonial.nodes.map(event => (
          <>
            <h3 className={styles.eventTitle}>{event.title}</h3>
            <p>{event.summary}</p>
          </>
        ))}
      </InlineContent>
      <Button to="/events">More Details</Button>
    </div>
  )
}
