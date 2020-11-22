import React from 'react'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from 'gatsby'
import './navigation.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faSitemap, faAddressBook } from "@fortawesome/free-solid-svg-icons";

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Navbar collapseOnSelect expand="lg" bg="transparent " variant="light">
        <Navbar.Brand href="/">Envision 2040</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title={<><FontAwesomeIcon icon={faSitemap} /> Categories</>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="/categories">Categories</NavDropdown.Item>
              <NavDropdown.Divider />
              {data.allContentfulCategory.edges.map(({ node }) => {
                return (
                  <NavDropdown.Item href={`/${node.slug}`}>{node.title}</NavDropdown.Item>
                )
              })}
            </NavDropdown>
            <Nav.Link href="/about"><FontAwesomeIcon icon={faInfoCircle} /> About</Nav.Link>
            <Nav.Link href="/contact"><FontAwesomeIcon icon={faAddressBook} /> Contact Us</Nav.Link>
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