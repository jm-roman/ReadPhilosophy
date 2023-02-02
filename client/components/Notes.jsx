// loop through notes and populate notes page
import React from 'react';

// list elements
const Notes = () => {
  return (
    <>
      <h1 id='notes-title'>Notes</h1>
      <div id='note-box'>
        <div id='note-text'>Here are my notes</div>
        <button id='back-to-reader'>
          <a href='/reader'>Back to Reader</a>
        </button>
      </div>
    </>
  );
};

export default Notes;
