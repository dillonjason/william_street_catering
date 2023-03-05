import React from "react"
import PropTypes from "prop-types"

import BlockContent from "@sanity/block-content-to-react"

import { Article } from "../../../../components/article"
import { Images } from "../../../../components/images"

export const Summary = ({ title, _rawBody, images, mainImage }) => (
  <Article
    title={title}
    img={
      (images.length || mainImage) && (
        <Images
          images={
            images && images.length
              ? images.map(img => img.asset.gatsbyImageData)
              : [mainImage.asset.gatsbyImageData]
          }
        />
      )
    }
  >
    <BlockContent blocks={_rawBody} />
  </Article>
)

Summary.propTypes = {
  title: PropTypes.string.isRequired,
  _rawBody: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
  mainImage: PropTypes.object.isRequired,
}
