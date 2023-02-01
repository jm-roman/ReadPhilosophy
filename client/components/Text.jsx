import React from 'react';

const Text = (props) => {
  return (
    <div id='text-box'>
      <div id='para-num'>
        <b>§{props.currentPage}</b>
      </div>
      <div id='text'>{props.currentText}</div>
    </div>
  );
  // get text from groundwork json
  // build out div
  // switch language button (must include language in JSON)
};

export default Text;
