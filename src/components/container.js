import PropTypes from 'prop-types';
import React from 'react';

const Container = ({children}) => (
  <div style={{maxWidth: 1180, margin: '0 auto'}}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
