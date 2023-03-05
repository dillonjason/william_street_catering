import React, { useRef } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import {
  useIntersectionObserver,
  useHasIntersected,
} from "../../hooks/useIntersectionObserver"

import * as styles from "./styles.module.scss"

export const InlineContent = ({ children, className, ...props }) => {
  const selfRef = useRef()

  const intersectionObserver = useIntersectionObserver({
    target: selfRef,
    threshold: 0.25,
  })

  const hasIntersected = useHasIntersected({ intersectionObserver })

  return (
    <div
      ref={selfRef}
      className={classNames(styles.items, className, {
        [styles.show]: hasIntersected,
      })}
      {...props}
    >
      {React.Children.map(children, child => (
        <div className={styles.item}>{child}</div>
      ))}
    </div>
  )
}

InlineContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
