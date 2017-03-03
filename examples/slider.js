webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(194);


/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	/* eslint react/no-multi-comp: 0 */
	__webpack_require__(2);
	
	var React = __webpack_require__(3);
	var ReactDOM = __webpack_require__(34);
	var Slider = __webpack_require__(180);
	
	var style = { width: 400, margin: 50 };
	
	function log(value) {
	  console.log(value); // eslint-disable-line no-console
	}
	
	function percentFormatter(v) {
	  return v + ' %';
	}
	
	var CustomizedSlider = function (_React$Component) {
	  _inherits(CustomizedSlider, _React$Component);
	
	  function CustomizedSlider(props) {
	    _classCallCheck(this, CustomizedSlider);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.state = {
	      value: 50
	    };
	    return _this;
	  }
	
	  CustomizedSlider.prototype.onSliderChange = function onSliderChange(value) {
	    log(value);
	    this.setState({
	      value: value
	    });
	  };
	
	  CustomizedSlider.prototype.onAfterChange = function onAfterChange(value) {
	    console.log(value); // eslint-disable-line no-console
	  };
	
	  CustomizedSlider.prototype.render = function render() {
	    return React.createElement(Slider, { value: this.state.value,
	      onChange: this.onSliderChange, onAfterChange: this.onAfterChange
	    });
	  };
	
	  return CustomizedSlider;
	}(React.Component);
	
	var DynamicBounds = function (_React$Component2) {
	  _inherits(DynamicBounds, _React$Component2);
	
	  function DynamicBounds(props) {
	    _classCallCheck(this, DynamicBounds);
	
	    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));
	
	    _this2.state = {
	      min: 0,
	      max: 100
	    };
	    return _this2;
	  }
	
	  DynamicBounds.prototype.onSliderChange = function onSliderChange(value) {
	    log(value);
	  };
	
	  DynamicBounds.prototype.onMinChange = function onMinChange(e) {
	    this.setState({
	      min: +e.target.value || 0
	    });
	  };
	
	  DynamicBounds.prototype.onMaxChange = function onMaxChange(e) {
	    this.setState({
	      max: +e.target.value || 100
	    });
	  };
	
	  DynamicBounds.prototype.render = function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'label',
	        null,
	        'Min: '
	      ),
	      React.createElement('input', { type: 'number', value: this.state.min, onChange: this.onMinChange }),
	      React.createElement('br', null),
	      React.createElement(
	        'label',
	        null,
	        'Max: '
	      ),
	      React.createElement('input', { type: 'number', value: this.state.max, onChange: this.onMaxChange }),
	      React.createElement('br', null),
	      React.createElement('br', null),
	      React.createElement(Slider, { defaultValue: 50, min: this.state.min, max: this.state.max,
	        onChange: this.onSliderChange
	      })
	    );
	  };
	
	  return DynamicBounds;
	}(React.Component);
	
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Basic Slider'
	    ),
	    React.createElement(Slider, { tipTransitionName: 'rc-slider-tooltip-zoom-down', onChange: log })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Basic Slider\uFF0C`step=20`'
	    ),
	    React.createElement(Slider, { step: 20, defaultValue: 50, onBeforeChange: log })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Basic Slider\uFF0C`step=20, dots`'
	    ),
	    React.createElement(Slider, { dots: true, step: 20, defaultValue: 100, onAfterChange: log })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Basic Slider with `tipFormatter`'
	    ),
	    React.createElement(Slider, { tipFormatter: percentFormatter,
	      tipTransitionName: 'rc-slider-tooltip-zoom-down', onChange: log
	    })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Basic Slider without tooltip'
	    ),
	    React.createElement(Slider, { tipFormatter: null, onChange: log })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Controlled Slider'
	    ),
	    React.createElement(Slider, { value: 50 })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Customized Slider'
	    ),
	    React.createElement(CustomizedSlider, null)
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Slider with dynamic `min` `max`'
	    ),
	    React.createElement(DynamicBounds, null)
	  )
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=slider.js.map