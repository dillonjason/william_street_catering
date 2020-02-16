import { useRef, useEffect, useState } from "react"
import "intersection-observer"

export const useIntersectionObserver = ({
  target,
  root,
  rootMargin,
  threshold,
}) => {
  const observer = useRef()
  const [entry, setEntry] = useState()

  const callback = entries => {
    if (entries && entries.length) {
      setEntry(entries[0])
    }
  }

  const cleanup = () => {
    if (observer.current) {
      observer.current.disconnect()
    }
  }

  useEffect(() => {
    if (target.current && !observer.current) {
      observer.current = new IntersectionObserver(callback, {
        root,
        rootMargin,
        threshold,
      })

      observer.current.observe(target.current)
    }
  }, [target, root, rootMargin, threshold])

  useEffect(() => cleanup, [])

  return entry
}

export const useHasIntersected = ({ intersectionObserver }) => {
  const [hasIntersected, setHasIntersected] = useState(false)

  useEffect(() => {
    if (!intersectionObserver) return
    if (!hasIntersected) {
      setHasIntersected(intersectionObserver.isIntersecting)
    }
  }, [intersectionObserver, hasIntersected])

  return hasIntersected
}
