# react-flex-slider
---

Slider ui component for react based on [rc-slider](https://github.com/react-component/slider)

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/react-flex-slider.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-flex-slider
[download-image]: https://img.shields.io/npm/dm/react-flex-slider.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-flex-slider

## Feature

* support ie9,ie9+,chrome,firefox,safari

## install

[![rc-slider](https://nodei.co/npm/react-flex-slider.png)](https://npmjs.org/package/react-flex-slider)

## Usage

```js
require('react-flex-slider/assets/index.css');

var React = require('react');
var ReactDOM = require('react-dom');
var Slider = require('react-flex-slider');
ReactDOM.render(<Slider />, container);
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>className</td>
          <td>String</td>
          <td>rc-slider</td>
          <td>Additional css class for the root dom node</td>
        </tr>
        <tr>
          <td>min</td>
          <td>number</td>
          <td>0</td>
          <td>The minimum value of the slider</td>
        </tr>
        <tr>
          <td>max</td>
          <td>number</td>
          <td>100</td>
          <td>The maximum value of the slider</td>
        </tr>
        <tr>
          <td>marks</td>
          <td>object{number: string} or object{number: object{ style, label }}</td>
          <td>{}</td>
          <td>Mark on the slider. The key determines the position, and the value determines what will show. If you want to set the style of a specific mark point, the value should be an object which contains `style` and `label` properties.</td>
        </tr>
        <tr>
          <td>step</td>
          <td>number or `null`</td>
          <td>1</td>
          <td>Value to be added or subtracted on each step the slider makes. Must be greater than zero. max - min should be evenly divisible by the step value. When `marks` is not an empty object, `step` can be set to `null`, to make marks as steps.</td>
        </tr>
        <tr>
          <td>defaultValue</td>
          <td>number or [number, number, ...]</td>
          <td>0 or [0, 0]</td>
          <td>Set initial positions of handles. If range is `false`, the type of `defaultValue` should be `number`. Otherwise, `[number, number, ...]`</td>
        </tr>
        <tr>
          <td>value</td>
          <td>number or [number, number, ...]</td>
          <td></td>
          <td>Set current positions of handles. If range is `false`, the type of `defaultValue` should be `number`. Otherwise, `[number, number, ...]`</td>
        </tr>
        <tr>
          <td>handle</td>
          <td>Component</td>
          <td></td>
          <td>Provide a custom Handle to use in the slider by passing a component. This component will have a `value` and `offset` props used to define custom styling/content.</td>
        </tr>
        <tr>
          <td>included</td>
          <td>boolean</td>
          <td>true</td>
          <td>If the value is `true`, it means a continuous value interval, otherwise, it is a independent value.</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>boolean</td>
          <td>false</td>
          <td>If `true`, handles can't be moved.</td>
        </tr>
        <tr>
          <td>dots</td>
          <td>bool</td>
          <td>false</td>
          <td>When the `step` value is greater than 1, you can set the `dots` to  `true` if you want to render the slider with dots.</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>function</td>
          <td>NOOP</td>
          <td>`onChange` will be triggered while the value of Slider changing.</td>
        </tr>
        <tr>
          <td>onAfterChange</td>
          <td>function</td>
          <td>NOOP</td>
          <td>`onAfterChange` will be triggered when `ontouchend` or `onmouseup` is triggered.</td>
        </tr>
        <tr>
          <td>showTrack</td>
          <td>boolean</td>
          <td>true</td>
          <td>If `true` a track of the selected range (from min to handle position) is shown on the scale.</td>
        </tr>
    </tbody>
</table>

## Development

```
npm install
npm start
```

## Example

http://localhost:8005/examples/basics.html

## License

react-flex-slider is released under the MIT license.
