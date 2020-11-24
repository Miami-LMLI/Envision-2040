import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';

import styles from './module-preview.module.css';

const ModulePreview = ({module}) => (
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
);

ModulePreview.propTypes = {
  module: PropTypes.shape({
    category: PropTypes.shape({
      slug: PropTypes.any,
    }),
    description: PropTypes.any,
    heroImage: PropTypes.shape({
      fluid: PropTypes.any,
    }),
    slug: PropTypes.any,
    title: PropTypes.any,
  }),
};

export default ModulePreview;
