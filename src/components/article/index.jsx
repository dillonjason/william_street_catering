import React, { useRef, useEffect, useState } from "react"
import classNames from "classnames"

import { useIntersectionObserver } from "../../hooks/useIntersectionObserver"

import styles from "./styles.module.scss"

export const Article = ({ title, img, children, className, ...props }) => {
  const selfRef = useRef()
  const [hasIntersected, setHasIntersected] = useState(false)

  const intersection = useIntersectionObserver({
    target: selfRef,
    threshold: 1,
  })

  useEffect(() => {
    if (!intersection) return
    if (!hasIntersected) {
      setHasIntersected(intersection.isIntersecting)
    }
  }, [intersection])

  return (
    <div
      ref={selfRef}
      className={classNames(styles.container, className)}
      {...props}
    >
      <div className={styles.image}>{img}</div>
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {title && (
          <div
            className={classNames(styles.underline, {
              [styles.show]: hasIntersected,
            })}
          />
        )}
        {children}
      </div>
    </div>
  )
}
