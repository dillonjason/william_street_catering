import React, { useRef } from "react"
import classNames from "classnames"

import {
  useIntersectionObserver,
  useHasIntersected,
} from "../../hooks/useIntersectionObserver"

import styles from "./styles.module.scss"

export const Article = ({
  title,
  img,
  canHideImg,
  children,
  flip,
  className,
  ...props
}) => {
  const selfRef = useRef()

  const intersectionObserver = useIntersectionObserver({
    target: selfRef,
    threshold: 0.6,
  })

  const hasIntersected = useHasIntersected({ intersectionObserver })

  return (
    <div
      ref={selfRef}
      className={classNames(styles.container, className, {
        [styles.flip]: flip,
      })}
      {...props}
    >
      {img && (
        <div
          className={classNames(styles.image, { [styles.canHide]: canHideImg })}
        >
          {img}
        </div>
      )}
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {title && (
          <div
            className={classNames(styles.underline, {
              [styles.show]: hasIntersected,
            })}
          />
        )}
        <div
          className={classNames(styles.children, {
            [styles.show]: hasIntersected,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
