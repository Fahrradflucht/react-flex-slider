import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import warning from 'warning';

function calcPoints(marks, dots, step, min, max) {
  warning(
    dots ? step > 0 : true,
    '`Slider[step]` should be a positive number in order to make Slider[dots] work.',
  );
  const points = Object.keys(marks).map(parseFloat);
  if (dots) {
    for (let i = min; i <= max; i += step) {
      if (!(points.indexOf(i) >= 0)) {
        points.push(i);
      }
    }
  }
  return points;
}

const createMarks = (className, marks, included, upperBound, lowerBound) => {
  const marksKeys = Object.keys(marks);

  return marksKeys.map(parseFloat).sort((a, b) => a - b).map((point) => {
    const isActived = (!included && point === upperBound) ||
            (included && point <= upperBound && point >= lowerBound);
    const markClassName = classNames({
      [`${className}-text`]: true,
      [`${className}-text-active`]: isActived,
    });

    const markPoint = marks[point];
    const markPointIsObject = typeof markPoint === 'object' &&
            !React.isValidElement(markPoint);
    const markLabel = markPointIsObject ? markPoint.label : markPoint;
    return (
      <span className={markClassName} key={point}>
        {markLabel}
      </span>);
  });
};

const Scale = ({ prefixCls, marks, dots, step, included, handles,
                tracks, lowerBound, upperBound, max, min }) => {
  const dotElements = calcPoints(marks, dots, step, min, max).map((point) => {
    const isActive = (!included && point === upperBound) ||
            (included && point <= upperBound && point >= lowerBound);
    const pointClassName = classNames({
      [`${prefixCls}-dot`]: true,
      [`${prefixCls}-dot-active`]: isActive,
    });

    return (<span className={pointClassName} />);
  });

  const markElements = createMarks(`${prefixCls}-mark`, marks, included, upperBound, lowerBound);

  const scaleElements = dotElements.map((dotNode, index) => (
    <div
      className={`${prefixCls}-scaleElement`}
      style={{ width: `${100 / dotElements.length}%` }}
      key={index}
    >
      {dotNode}
      {markElements[index]}
    </div>
  ));

  const scaleElementsWidthFactor = 1 / (1 - (1 / scaleElements.length));
  const sclaeElementsMarginFactor = (1 - scaleElementsWidthFactor) / 2;

  const scaleElementsStyle = {
    width: `${scaleElementsWidthFactor * 100}%`,
    marginLeft: `${sclaeElementsMarginFactor * 100}%`,
  };

  return (
    <div className={`${prefixCls}-scale`}>
      {handles}
      <div className={`${prefixCls}-rail`} />
      {tracks}
      <div className={`${prefixCls}-scaleElements`} style={scaleElementsStyle}>
        {scaleElements}
      </div>
    </div>);
};

Scale.propTypes = {
  prefixCls: PropTypes.string,
  marks: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ),
  dots: PropTypes.bool,
  step: PropTypes.number,
  included: PropTypes.bool,
  handles: PropTypes.node,
  tracks: PropTypes.node,
  lowerBound: PropTypes.number,
  upperBound: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
};

export default Scale;
