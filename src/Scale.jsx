import React from 'react';
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

  const elements = marksKeys.map(parseFloat).sort((a, b) => a - b).map((point) => {
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

  return elements;
};

const Scale = ({ prefixCls, marks, dots, step, included, handles,
                tracks, lowerBound, upperBound, max, min }) => {
  const dotNodes = calcPoints(marks, dots, step, min, max).map((point) => {
    const isActived = (!included && point === upperBound) ||
            (included && point <= upperBound && point >= lowerBound);
    const pointClassName = classNames({
      [`${prefixCls}-dot`]: true,
      [`${prefixCls}-dot-active`]: isActived,
    });

    return (<span className={pointClassName} />);
  });

  const markNodes = createMarks(`${prefixCls}-mark`, marks, included, upperBound, lowerBound);

  const elements = dotNodes.map((dotNode, index) => (
    <div
      className={`${prefixCls}-scaleElement`}
      style={{ width: `${100 / dotNodes.length}%` }}
      key={index}
    >
      {dotNode}
      {markNodes[index]}
    </div>
  ));

  const elementsWidthFactor = 1 / (1 - (1 / elements.length));
  const elementsMarginFactor = (1 - elementsWidthFactor) / 2;

  const scaleElementsStyle = {
    width: `${elementsWidthFactor * 100}%`,
    marginLeft: `${elementsMarginFactor * 100}%`,
  };

  return (
    <div className={`${prefixCls}-scale`}>
      {handles}
      <div className={`${prefixCls}-rail`} />
      {tracks}
      <div className={`${prefixCls}-scaleElements`} style={scaleElementsStyle}>
        {elements}
      </div>
    </div>);
};

Scale.propTypes = {
  prefixCls: React.PropTypes.string,
  marks: React.PropTypes.objectOf(
    React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
  ),
  dots: React.PropTypes.bool,
  step: React.PropTypes.number,
  included: React.PropTypes.bool,
  handles: React.PropTypes.node,
  tracks: React.PropTypes.node,
  lowerBound: React.PropTypes.number,
  upperBound: React.PropTypes.number,
  max: React.PropTypes.number,
  min: React.PropTypes.number,
};

export default Scale;
