require('react-flex-slider/assets/index.less');

const React = require('react');
const ReactDOM = require('react-dom');
const Slider = require('react-flex-slider');

const style = { width: 400, margin: 50 };
const threeMarks = {
  0: 0,
  50: 50,
  100: 100,
};

const fourMarks = {
  10: 'ten',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
};

const fiveMarks = {
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 40,
};

function log(value) {
  console.log(value); // eslint-disable-line no-console
}

ReactDOM.render(
  <div>
    <div style={style}>
      <p>Slider (choose marks only)</p>
      <Slider marks={threeMarks} step={null} onChange={log} defaultValue={50} />
    </div>
    <div style={style}>
      <p>Slider (choose all values)</p>
      <Slider marks={threeMarks} onChange={log} defaultValue={20} showTrack={false}/>
    </div>
    <div style={style}>
      <p>Slider (choose values in steps)</p>
      <Slider marks={threeMarks} step={10} onChange={log} defaultValue={20} />
    </div>
    <div style={style}>
      <p>Slider (choose values in steps)</p>
      <Slider
        marks={fourMarks} min={10} max={40}
        step={10} onChange={log} defaultValue={20}
      />
    </div>
    <div style={style}>
      <p>Slider (choose values in steps)</p>
      <Slider
        marks={fiveMarks} min={10} max={50}
        step={10} onChange={log} defaultValue={20}
      />
    </div>
  </div>
  , document.getElementById('__react-content'));
