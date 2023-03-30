import React from 'react';

const Text = (props) => {
  const { currentPage, currentText } = props;
  return (
    <div id='text-box'>
      <div id='para-num'>
        <b>§{currentPage}.</b>
      </div>
      <div id='text'>{currentText}</div>
    </div>
  );
  // get text from groundwork json
  // build out div
  // switch language button (must include language in JSON)
};

export default Text;
