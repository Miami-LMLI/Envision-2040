import PropTypes from 'prop-types';
import React from 'react';
import {graphql} from 'gatsby';
import get from 'lodash/get';
import styles from '../components/hero.module.css';
import Layout from '../components/layout';
import CategoryPreview from '../components/category-preview';

/**
 * [Insert comment here]
 */
class CategoriesIndex extends React.Component {
  /**
   * [Insert comment here]
   * @return {*}
   */
  render() {
    const categories = get(this, 'props.data.allContentfulCategory.edges');

    return (
      <Layout location={this.props.location}>
        <div style={{background: '#fff'}}>
          <div className={styles.hero}>Categories</div>
          <div className="wrapper">
            <ul className="article-list">
              {categories.map(({node}) => {
                return (
                  <li key={node.slug}>
                    <CategoryPreview category={node} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

CategoriesIndex.propTypes = {
  location: PropTypes.any,
};

export default CategoriesIndex;

export const pageQuery = graphql`
  query categoryIndexQuery {
    allContentfulCategory {
      edges {
        node {
          title
          slug
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
