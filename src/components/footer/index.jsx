import React from "react"

import styles from "./styles.module.scss"

export const Footer = () => (
  <div className={styles.container}>
    <ul className={styles.contacts}>
      <li>
        <a
          className={styles.emailText}
          href="mailto:williamstreetcatering@gmail.com"
        >
          williamstreetcatering@gmail.com
        </a>
      </li>
      <li>
        3044 3rd Ave Unit 4C
        <br />
        Bronx, NY 10451
      </li>
      <li>
        <a className={styles.phoneText} href="tel:857-253-1101">
          857-253-1101
        </a>
      </li>
    </ul>
    <ul className={styles.developer}>
      <li>&copy; {new Date().getFullYear()}</li>
      <li>Built by Dillon Jason</li>
      <li>
        <a href="http://www.dillonjason.net" target="_blank">
          www.dillonjason.net
        </a>
      </li>
      <li>
        <a
          href="https://github.com/dillonjason/william_street_catering"
          target="_blank"
        >
          Source
        </a>
      </li>
    </ul>
  </div>
)
