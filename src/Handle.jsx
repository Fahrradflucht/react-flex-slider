import React from 'react';
import PropTypes from 'prop-types';

// This needs to be a class component since the slider carries refs to the
// handles.
// eslint-disable-next-line react/prefer-stateless-function
class Handle extends React.Component {
  render() {
    const { className, offset } = this.props;
    const style = { left: `${offset}%` };

    return <div className={className} style={style} />;
  }
}

Handle.propTypes = {
  className: PropTypes.string,
  offset: PropTypes.number,
};

export default Handle;
