import PropTypes from 'prop-types';
import React from 'react';
import Image from 'react-bootstrap/Image';

import styles from './hero.module.css';

const Header = ({image}) => (
  <div className={styles.heroGradient}>
    <Image
      className={styles.heroImage}
      src={image} fluid
    />
  </div>
);

Header.propTypes = {
  image: PropTypes.any,
};

export default Header;
