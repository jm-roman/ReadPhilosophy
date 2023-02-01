import React from 'react';

const Bottom = (props) => {
  return (
    <div id='bottom-box'>
      <div id='bottom'>
        <button id='prev' onClick={props.prevPage}>
          Previous
        </button>
        <button id='next' onClick={props.nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Bottom;
