import React from 'react'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from 'gatsby'
import './navigation.module.css'

import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Navbar collapseOnSelect expand="lg" bg="transparent " variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">About</Nav.Link>
          </Nav>
          <Nav className="mx-auto">
            {data.allContentfulCategory.edges.map(({ node }) => {
                return (
                  <Nav.Link href={`/${node.slug}`}>{node.title}</Nav.Link>
                )
              })}
          </Nav>
          <Nav className="ml-auto">
          <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default function MyNavigation(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulCategory {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `}
      render={data => <Navigation data={data} {...props} />}
    />
  )
}

Navigation.propTypes = {
  data: PropTypes.shape({
    allContentfulCategory: PropTypes.shape({
      edges: PropTypes.shape({
        node: PropTypes.shape({
          title: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired
        }).isRequired
      }).isRequired,
    }).isRequired,
  }).isRequired,
}