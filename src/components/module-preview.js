import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ module }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={module.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/${module.category.slug}/${module.slug}`}>{module.title}</Link>
    </h3>
    <div
      dangerouslySetInnerHTML={{
        __html: module.description,
      }}
    />
  </div>
)
