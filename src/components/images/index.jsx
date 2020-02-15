import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import styles from "./styles.module.scss"

const INTERVAL_LENGTH = 5000

export const Images = ({ fluids }) => {
  const [visibleIndex, setVisibleIndex] = useState(0)

  useEffect(() => {
    const maxIndex = fluids.length - 1

    const interval = setInterval(() => {
      setVisibleIndex(currentIndex => {
        if (currentIndex === maxIndex) {
          return 0
        }

        return currentIndex + 1
      })
    }, INTERVAL_LENGTH)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.container}>
      {fluids.map((fluid, index) => (
        <Img
          key={index}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: index === visibleIndex ? 1 : 0,
            transition: "opacity 200ms ease-in-out",
          }}
          objectFit="cover"
          fluid={fluid}
        />
      ))}
    </div>
  )
}

Images.propTypes = {
  fluids: PropTypes.arrayOf(PropTypes.object),
}
