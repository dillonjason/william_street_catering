import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as styles from "./styles.module.scss"
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

export const Reviews = () => {
  const { allSanityTestimonial } = useStaticQuery(query)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Reviews</h2>
      <InlineContent>
        {allSanityTestimonial.nodes.map(review => (
          <>
            <h3 className={styles.eventTitle}>{review.title}</h3>
            <p>{review.summary}</p>
          </>
        ))}
      </InlineContent>
      <Button to="/reviews">More Details</Button>
    </div>
  )
}
