import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';

/**
 * [Insert comment here].
 */
class Contact extends React.Component {
  /**
   * [Insert comment here].
   * @return {*} [Insert comment here].
   */
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{background: '#fff'}}>
          <div className="wrapper">
            <h2 className="section-headline">Contact</h2>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </Layout>
    );
  }
}

Contact.propTypes = {
  location: PropTypes.any,
};

export default Contact;
