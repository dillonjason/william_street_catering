import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image";

import * as styles from "./styles.module.scss"

const INTERVAL_LENGTH = 5000

export const Images = ({ images }) => {
  const [visibleIndex, setVisibleIndex] = useState(0)

  useEffect(() => {
    const maxIndex = images.length - 1

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
      {images.map((image, index) => (
        <GatsbyImage
          image={image}
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
          objectFit="cover" />
      ))}
    </div>
  );
}

Images.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
}
