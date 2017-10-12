import React from 'react';
import PropTypes from 'prop-types';

const Handle = ({ className, offset }) => {
  const style = { left: `${offset}%` };
  return <div className={className} style={style} />;
};

Handle.propTypes = {
  className: PropTypes.string,
  offset: PropTypes.number,
};

export default Handle;
