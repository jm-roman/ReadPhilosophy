import React from 'react';

const Bottom = (props) => {
  console.log(props);
  return (
    <div id='bottom-box'>
      <div id='bottom'>
        {props.currentPage > 1 && (
          <button id='prev' onClick={props.prevPage}>
            Previous
          </button>
        )}
        {props.currentPage <= 1 && (
          <button id='prev'>
            <a href='/'>Go Home</a>
          </button>
        )}
        {props.currentPage < props.lastPage && (
          <button id='next' onClick={props.nextPage}>
            Next
          </button>
        )}
        {props.currentPage >= props.lastPage && (
          <button id='next' onClick={props.nextPage}>
            <a href='/notes'>See Notes</a>
          </button>
        )}
      </div>
    </div>
  );
};

export default Bottom;
