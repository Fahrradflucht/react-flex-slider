import React from 'react';

const Handle = ({ className, offset }) => {
  const style = { left: `${offset}%` };
  return <div className={className} style={style} />;
};

Handle.propTypes = {
  className: React.PropTypes.string,
  offset: React.PropTypes.number,
};

export default Handle;
