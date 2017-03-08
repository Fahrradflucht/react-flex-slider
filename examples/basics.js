webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var React = __webpack_require__(3);
	var ReactDOM = __webpack_require__(34);
	var Slider = __webpack_require__(180);
	
	var style = { width: 400, margin: 50 };
	var threeMarks = {
	  0: 0,
	  50: 50,
	  100: 100
	};
	
	var fourMarks = {
	  10: 'ten',
	  20: 'twenty',
	  30: 'thirty',
	  40: 'forty'
	};
	
	var fiveMarks = {
	  10: 10,
	  20: 20,
	  30: 30,
	  40: 40,
	  50: 40
	};
	
	function log(value) {
	  console.log(value); // eslint-disable-line no-console
	}
	
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Slider (choose marks only)'
	    ),
	    React.createElement(Slider, { marks: threeMarks, step: null, onChange: log, defaultValue: 50 })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Slider (choose all values)'
	    ),
	    React.createElement(Slider, { marks: threeMarks, onChange: log, defaultValue: 20, showTrack: false })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Slider (choose values in steps)'
	    ),
	    React.createElement(Slider, { marks: threeMarks, step: 10, onChange: log, defaultValue: 20 })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Slider (choose values in steps)'
	    ),
	    React.createElement(Slider, {
	      marks: fourMarks, min: 10, max: 40,
	      step: 10, onChange: log, defaultValue: 20
	    })
	  ),
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(
	      'p',
	      null,
	      'Slider (choose values in steps)'
	    ),
	    React.createElement(Slider, {
	      marks: fiveMarks, min: 10, max: 50,
	      step: 10, onChange: log, defaultValue: 20
	    })
	  )
	), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=basics.js.map