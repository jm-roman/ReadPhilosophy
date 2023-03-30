import React from 'react';

const Bottom = (props) => {
  const { currentPage, prevPage, lastPage, nextPage } = props;

  return (
    <div id='bottom-box'>
      <div id='bottom'>
        {currentPage > 1 && (
          <button id='prev' onClick={prevPage}>
            Previous
          </button>
        )}
        {currentPage <= 1 && (
          <button id='prev'>
            <a href='/'>Go Home</a>
          </button>
        )}
        {currentPage < lastPage && (
          <button id='next' onClick={nextPage}>
            Next
          </button>
        )}
        {currentPage >= lastPage && (
          <button id='next' onClick={nextPage}>
            <a href='/notes'>See Notes</a>
          </button>
        )}
      </div>
    </div>
  );
};

export default Bottom;
