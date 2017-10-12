import React from 'react';
import PropTypes from 'prop-types';

const Track = ({ className, included, offset, length }) => {
  const style = {
    visibility: included ? 'visible' : 'hidden',
    left: `${offset}%`,
    width: `${length}%`,
  };
  return <div className={className} style={style} />;
};

Track.propTypes = {
  className: PropTypes.string,
  included: PropTypes.bool,
  offset: PropTypes.number,
  length: PropTypes.number,
};

export default Track;
