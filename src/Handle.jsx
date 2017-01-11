import React from 'react';

const Handle = ({ className, vertical, offset }) => {
  const style = vertical ? { bottom: `${offset}%` } : { left: `${offset}%` };
  return <div className={className} style={style} />;
};

Handle.propTypes = {
  className: React.PropTypes.string,
  vertical: React.PropTypes.bool,
  offset: React.PropTypes.number,
};

export default Handle;
