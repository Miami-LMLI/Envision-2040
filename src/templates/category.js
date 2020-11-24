import PropTypes from 'prop-types';
import React from 'react';
import {graphql} from 'gatsby';
import get from 'lodash/get';
// import Img from 'gatsby-image';
import Layout from '../components/layout';
import ModulePreview from '../components/module-preview';

import styles from '../components/hero.module.css';

/**
 * [Insert comment here].
 */
class CategoryTemplate extends React.Component {
  /**
   * [Insert comment here].
   * @return {*} [Insert comment here].
   */
  render() {
    const category = get(this.props, 'data.contentfulCategory');
    const modules = get(this.props, 'data.allContentfulModule.edges');

    return (
      <Layout location={this.props.location}>
        <div style={{background: '#fff'}}>
          {/* <div>
            <Img
              className={styles.heroImage}
              alt={category.title}
              fluid={category.heroImage.fluid}
            />
          </div> */}
          <h1 className={styles.heroGradient}>{category.title}</h1>
          <div className="wrapper">
            {/* <h1 className="section-headline">{category.title}</h1> */}
            <div
              dangerouslySetInnerHTML={{
                __html: category.body.childMarkdownRemark.html,
              }}
            />
            <ul className="list">
              {modules.map(({node}) => {
                return (
                  <li key={node.slug}>
                    <ModulePreview module={node} />
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

CategoryTemplate.propTypes = {
  location: PropTypes.any,
};

export default CategoryTemplate;

export const pageQuery = graphql`
  query CategoryBySlug($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      id
      title
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulModule(filter: {category: {slug: {eq: $slug}}}, sort: {fields: title}) {
    edges {
        node {
          title
          slug
          heroImage {
            fluid(maxHeight: 700, maxWidth: 1050, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          category {
            slug
          }
        }
      }
    }
  }
`;
