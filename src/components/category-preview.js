import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ category }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={category.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/${category.slug}`}>{category.title}</Link>
    </h3>
    <div
      dangerouslySetInnerHTML={{
        __html: category.description,
      }}
    />
  </div>
)
