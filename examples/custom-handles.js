webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(192);


/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	__webpack_require__(2);
	
	var React = __webpack_require__(3);
	var ReactDOM = __webpack_require__(34);
	var Slider = __webpack_require__(180);
	
	var wrapperStyle = { width: 400, margin: 50 };
	
	var handleStyle = {
	  position: 'absolute',
	  transform: 'translate(-50%, -50%)',
	  cursor: 'pointer',
	  padding: '2px',
	  border: '2px solid #abe2fb',
	  borderRadius: '3px',
	  background: '#fff',
	  fontSize: '14px',
	  textAlign: 'center'
	};
	
	var CustomHandle = function (_React$Component) {
	  _inherits(CustomHandle, _React$Component);
	
	  function CustomHandle() {
	    _classCallCheck(this, CustomHandle);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  CustomHandle.prototype.render = function render() {
	    var props = this.props;
	    var style = _extends({ left: props.offset + '%' }, handleStyle);
	    return React.createElement(
	      'div',
	      { style: style },
	      'val: ',
	      props.value
	    );
	  };
	
	  return CustomHandle;
	}(React.Component);
	
	CustomHandle.propTypes = {
	  value: React.PropTypes.any,
	  offset: React.PropTypes.number
	};
	
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'div',
	    { style: wrapperStyle },
	    React.createElement(
	      'p',
	      null,
	      'Default slider'
	    ),
	    React.createElement(Slider, { min: 0, max: 20, defaultValue: 3 })
	  ),
	  React.createElement(
	    'div',
	    { style: wrapperStyle },
	    React.createElement(
	      'p',
	      null,
	      'Slider with custom handle'
	    ),
	    React.createElement(Slider, { min: 0, max: 20, defaultValue: 3, handle: React.createElement(CustomHandle, null) })
	  )
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=custom-handles.js.map