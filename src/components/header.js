import React from 'react'
import Image from 'react-bootstrap/Image'

import styles from './hero.module.css'

export default ({ image }) => (
  <div className={styles.heroGradient}>
    <Image
      className={styles.heroImage}
      src={image} fluid
    />
  </div>
)
