import { Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styles from "./category-preview.module.css";
import Carousel from "react-bootstrap/Carousel";

/**
 * The class that represents the category preview component.
 */
class CategoryCarousol extends React.Component {
  /**
   * Returns the category preview component's content that is
   * supposed to be rendered by a user's browser inside a Layout component.
   * @return {*} The category preview component content that is supposed to
   * be rendered by a browser.
   */
  render() {
    const { categories } = this.props;

    return (
      <Carousel>
        {categories.map(({ node }) => {
          return (
            <Carousel.Item>
              <Link to={`/${node.slug}`}>
                <Img alt={node.title} fluid={node.heroImage.fluid} />
              </Link>
              <Carousel.Caption>
                <h3>{node.title}</h3>
                <p class="d-none d-sm-block">{node.description.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
      // <Link to={`/${category.slug}`}>
      // {/* <Img alt={category.title}
      //   className={styles.previewImg}
      //   fluid={category.heroImage.fluid}
      // />
      // <h3 className={styles.previewTitle}>
      //   {category.title}
      // </h3>
      // <div
      //   dangerouslySetInnerHTML={{
      //     __html: category.description.childMarkdownRemark.html,
      //   }}
      // /> */}
      // </Link>
    );
  }
}

export default CategoryCarousol;
