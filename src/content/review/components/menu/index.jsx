import React from "react"
import PropTypes from "prop-types"
import BlockContent from "@sanity/block-content-to-react"

import { Article } from "../../../../components/article"

import * as styles from "./styles.module.scss"

export const Menu = ({ _rawMenu, menu }) => {
  if (!menu) return null

  return (
    <div className={styles.menus}>
      {menu.map(currentMenu => {
        const rawMenu = _rawMenu.find(raw => raw._key === currentMenu._key)

        return (
          <Article title={currentMenu.type} className={styles.menu}>
            <ul className={styles.itemList}>
              {currentMenu.items.map(item => {
                const rawItem = rawMenu.items.find(
                  rawItem => rawItem._key === item._key
                )

                return (
                  <li className={styles.listItem}>
                    <h3>{item.type}</h3>
                    <BlockContent blocks={rawItem.summary} />
                  </li>
                )
              })}
            </ul>
          </Article>
        )
      })}
    </div>
  )
}

Menu.propTypes = {
  _rawMenu: PropTypes.array,
  menu: PropTypes.shape(),
}
