import React from 'react';
import './progress-line.scss';

const ProgressLine = (props) => (
    <div className="progress">
    <div className="progress-wrapper" >
      <div className="progress-inner" style={{ width: `${props.percent}%` }} ></div>
    </div>
  </div>
);

export default ProgressLine;